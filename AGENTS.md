# Repository Guidelines

## Project Structure & Module Organization
- `app/` hosts the Next.js App Router entry points (`page.tsx`, `layout.tsx`, loading states) plus global CSS. Treat each route segment as a feature boundary.
- `components/` stores reusable UI primitives (largely Shadcn-based). Add new cross-route widgets here and keep variants colocated.
- `hooks/` contains shared client-side hooks such as `use-language`. Mirror this pattern for new global hooks.
- `lib/` holds utilities, configuration, and translation data. Extend localized copy inside `lib/translations.ts`.
- `public/` serves static assets (logos, favicons). Keep large media in a CDN and reference URLs here.

## Build, Test, and Development Commands
- `pnpm install` — set up dependencies; always prefer pnpm to maintain `pnpm-lock.yaml`.
- `pnpm dev` — start the development server on http://localhost:3000 with hot reload.
- `pnpm lint` — run Next.js ESLint presets (covers TypeScript, React, Tailwind usage).
- `pnpm build` — produce an optimized production build; run before deploying.
- `pnpm start` — serve the production build locally for smoke checks.

## Coding Style & Naming Conventions
- TypeScript + React functional components are standard; favor 2-space indentation and explicit types when the inference is unclear.
- Leverage Tailwind utility classes; group layout → spacing → typography for readability.
- Name files in lowercase-hyphen (`project-card.tsx`), except hooks (`use-*.ts`) and components exported via PascalCase.
- Keep translation keys concise and mirrored across `en`/`pt`. Update `use-language` if additional locales are introduced.

## Testing Guidelines
- No automated test suite is configured yet. Add Jest/Testing Library for components or Playwright for E2E when introducing complex flows.
- When tests exist, colocate them in `__tests__` directories or alongside the source with `.test.tsx` suffixes.
- Run `pnpm lint` and any new test commands before opening a PR; include coverage notes in the PR body.

## Commit & Pull Request Guidelines
- Follow Conventional Commits (`feat:`, `fix:`, `chore:`) as seen in the log (`feat: add translations support to website`).
- Write focused commits grouped by concern; avoid mixing refactors with feature work.
- Pull requests should include: summary, testing evidence (`pnpm lint`, manual screenshots for UI), and linked issues or task IDs.
- Request review from a teammate familiar with the affected area and wait for CI (lint/build) to pass before merging.***
