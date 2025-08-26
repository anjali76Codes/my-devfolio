# Overview

This is a full-stack personal portfolio website built with React and Express. The application features a modern, responsive design showcasing personal information, skills, projects, achievements, and contact functionality. It's designed as a professional portfolio site with a clean, interactive user interface and a contact form that saves messages to a database.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui components for consistent design
- **UI Components**: Extensive use of Radix UI primitives wrapped in custom components
- **State Management**: React Query for server state, React hooks for local state
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Theme**: Custom theme provider supporting light/dark mode toggle

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Structure**: RESTful API with a single contact endpoint (`/api/contact`)
- **Request Handling**: JSON body parsing with Express middleware
- **Error Handling**: Global error handler with structured error responses
- **Logging**: Custom request/response logging middleware for API endpoints
- **Development**: Vite integration for hot reloading in development mode

## Data Storage
- **ORM**: Drizzle ORM for type-safe database interactions
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **Schema**: Defined in shared schema file with Zod validation
- **Migrations**: Database migrations managed through Drizzle Kit
- **In-Memory Fallback**: MemStorage class provides in-memory storage for development/testing

## Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Messages Table**: Stores contact form submissions (id, name, email, subject, message, createdAt)
- **Type Safety**: Full TypeScript integration with inferred types from schema

## Authentication & Security
- **Session Storage**: Configured for PostgreSQL-based sessions using connect-pg-simple
- **CORS**: Credentials included in API requests
- **Environment**: Secure environment variable handling for database connections

# External Dependencies

## Core Technologies
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **Drizzle ORM**: Database ORM with PostgreSQL dialect
- **React Query**: Server state management and caching
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui**: Component library built on Radix UI primitives

## UI & Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets (Simple Icons for brand logos)
- **Class Variance Authority**: Utility for managing CSS class variants
- **Date-fns**: Date manipulation and formatting library

## Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer
- **Replit Plugins**: Development environment integration and error overlay

## Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation for forms and API data
- **Hookform Resolvers**: Integration between React Hook Form and Zod

## Database & Backend
- **Express**: Web framework for Node.js
- **Connect-pg-simple**: PostgreSQL session store
- **Drizzle-zod**: Integration between Drizzle ORM and Zod validation
- **TSX**: TypeScript execution for development server