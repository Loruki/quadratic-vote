# Quadratic Vote

A quadratic voting web application built with Next.js 15 (App Router) + TypeScript.

## Commands

- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Type check: `npx tsc --noEmit`
- Test: `npm test`
- Test single file: `npm test -- path/to/file`
- E2E tests: `npx playwright test`
- DB generate: `npx drizzle-kit generate`
- DB migrate: `npx drizzle-kit migrate`
- Format: `npx prettier --write .`

## Code Style

- TypeScript strict mode, functional components with hooks
- 2-space indent, semicolons, single quotes in imports
- PascalCase for components, camelCase for functions/variables
- Server Components by default; add "use client" only when needed
- Colocate component tests in `__tests__/` subdirectories

## Architecture

- **Database**: Supabase (Postgres) with Drizzle ORM (`src/db/`)
- **Validation**: Zod schemas shared between client and server (`src/lib/validators/`)
- **UI**: Tailwind CSS v4 + shadcn/ui components (`src/components/ui/`)
- **No auth**: Voters identified by anonymous cookie token, admin access via secret URL token
- **Quadratic cost**: votes^2 = credits spent. Core math in `src/lib/quadratic.ts`

## File Organization

- `src/app/` — Pages and API route handlers
- `src/components/ui/` — shadcn/ui primitives (auto-generated, don't edit manually)
- `src/components/{landing,poll,vote,results}/` — Feature components
- `src/db/schema.ts` — Drizzle table definitions (single source of truth)
- `src/lib/validators/` — Zod schemas used by both API routes and forms
- `src/hooks/` — Custom React hooks

## Git

- Branch naming: `feature/`, `fix/`, `refactor/`
- Commit style: imperative mood, concise ("add poll creation API" not "added the API for creating polls")
- Run lint + type-check before committing
