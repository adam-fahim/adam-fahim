# AGENTS.md

## Cursor Cloud specific instructions

This is **Feedbase**, a full-stack SaaS feedback board built with the "$20/mo startup stack". It integrates 9+ free-tier services (Clerk, Supabase, Stripe, Resend, PostHog, Sentry, Upstash, Pinecone) on Next.js 16 with shadcn/ui and Tailwind CSS v4.

### Running the app

- `pnpm install` to install dependencies
- `pnpm dev` to start the dev server on port 3000
- `pnpm build` to verify production build
- `pnpm lint` to run ESLint

### Key notes

- **All services degrade gracefully** when API keys are missing. The app starts and works without any `.env.local` values configured — service wrappers in `src/lib/` return `null` and API routes return placeholder responses.
- **shadcn/ui** components live in `src/components/ui/`. Add new ones via `npx shadcn@latest add <component>`.
- **Tailwind v4** uses CSS-based theming in `src/app/globals.css` (no `tailwind.config.ts`). The dark theme is always-on (`<html className="dark">`).
- **pnpm.onlyBuiltDependencies** in `package.json` whitelists build scripts for `@clerk/shared`, `@sentry/cli`, `core-js`, and `protobufjs`.
- The `src/middleware.ts` uses a passthrough middleware by default. Swap in `clerkMiddleware()` when Clerk keys are configured.
- The Supabase schema is in `supabase-schema.sql` (run manually in the Supabase SQL Editor).
- The env var template is in `.env.example`.
