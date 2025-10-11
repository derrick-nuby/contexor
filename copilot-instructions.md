# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Contexor is a lightweight, plug-and-play AI assistant widget that can be embedded into any website to provide context-aware answers. It works entirely in the browser with no backend required, allowing users to integrate AI assistance by adding a script tag or npm package with their own AI API key (OpenAI, Claude, etc.).

## Repository Structure

This is a Turborepo monorepo managed with pnpm workspaces:

- `packages/contexor/` - Core package containing the AI assistant widget implementation
- `apps/docs/` - Documentation site (placeholder, likely using Fumadocs based on git history)
- `apps/web/` - Main web application (placeholder)
- `examples/` - Integration examples for various frameworks (Next.js, React, TanStack Start)

## Development Commands

**Package Manager:** pnpm 10.15.0+

**Prerequisites:** Node.js >= 18

### Primary Commands

```bash
# Install dependencies
pnpm install

# Run development mode for all workspaces
pnpm dev

# Build all packages and apps
pnpm build

# Lint all packages
pnpm lint

# Start production build (requires build first)
pnpm start
```

### Turbo-Specific Notes

- All commands use Turborepo for task orchestration
- Turbo uses TUI (terminal UI) mode by default (configured in turbo.json)
- Build tasks have dependency ordering (^build means dependencies build first)
- Dev and start tasks run in persistent mode (don't exit after completion)
- Turbo caching is enabled for build and lint, disabled for dev and start

### Working with Specific Workspaces

When developing in a specific package or app, use pnpm filtering:

```bash
# Run dev for a specific workspace
pnpm --filter contexor dev
pnpm --filter docs dev

# Build a specific package
pnpm --filter contexor build

# Add a dependency to a specific workspace
pnpm --filter contexor add <package-name>
```

## Architecture Notes

### Monorepo Configuration

- **Workspace Definition:** Defined in `pnpm-workspace.yaml` with patterns `apps/*` and `packages/*`
- **Build System:** Turborepo handles task execution, caching, and dependency graphs
- **TypeScript:** TypeScript 5.9.2 is used but tsconfig files may not be present yet (early stage)

### Core Package (packages/contexor)

Version: 0.0.1-canary.1

The core package is designed as a universal widget that:

- Gathers context from the current webpage (visible text, metadata, documents)
- Uses client-provided AI API keys (no backend infrastructure)
- Provides context-aware responses in the browser
- Can be integrated via script tag or npm package

**Important:** The package is currently in early development. Most directories contain placeholder README files. The actual implementation of the widget is not yet present in the codebase.

### Git Workflow

- Default branch: `develop`
- Recent work has focused on:
  - Documentation setup with Fumadocs
  - AI search functionality with Inkeep integration
  - Monorepo structure setup
  - Removing template code from Turborepo starter

## Special Considerations

### .gitignore Coverage

The repository ignores:

- Standard build outputs (.next/, out/, build, dist)
- Draft directories and files (draft/, drafts/, .draft/, .drafts/ and variations)
- An `instructions/` directory (likely containing internal development notes)

### Environment Files

Build tasks explicitly include `.env*` files as inputs (see turbo.json), indicating that environment variables may be important for build-time configuration.

### VSCode Configuration

ESLint is configured with auto-detection for working directories, supporting the monorepo structure.

## Development Status

This project is in early stages:

- Core package structure is defined but implementation is minimal
- Documentation and web apps are placeholders
- Example integrations are planned but not yet implemented
- No test infrastructure is currently set up (package.json has placeholder test script)

When working in this codebase, expect to build foundational functionality rather than modify existing implementations.
