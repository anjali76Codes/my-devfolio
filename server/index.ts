import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite"; // keep setupVite for local dev

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// simple request logger for API routes
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) logLine = logLine.slice(0, 79) + "…";
      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  // error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // ✅ in development use Vite (for hot reload)
  if (app.get("env") === "development") {
    await setupVite(app, server);
  }

  // ✅ in production (Render), ONLY serve the API
  // frontend will be hosted separately on Vercel
  app.get("/health", (_req: Request, res: Response) => {
    res.json({ ok: true });
  });

  // Always use the provided PORT (Render sets this env var)
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });
})();
