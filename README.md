# Feedbase

A full-stack SaaS feedback board built with the **$20/mo startup stack**. Collect, prioritize, and act on user feedback — powered entirely by free-tier services.

## Tech Stack

| Service | Purpose | Cost |
|---------|---------|------|
| [Next.js](https://nextjs.org) | React framework | Free |
| [Clerk](https://clerk.com) | Authentication | Free |
| [Supabase](https://supabase.com) | PostgreSQL database | Free |
| [Stripe](https://stripe.com) | Payments | 2.9%/txn |
| [Resend](https://resend.com) | Transactional emails | Free |
| [PostHog](https://posthog.com) | Product analytics | Free |
| [Sentry](https://sentry.io) | Error tracking | Free |
| [Upstash](https://upstash.com) | Serverless Redis | Free |
| [Pinecone](https://pinecone.io) | Vector search | Free |
| [Vercel](https://vercel.com) | Deployment | Free |

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in the values from each service's dashboard:

```bash
cp .env.example .env.local
```

### 3. Set up Supabase

Run the schema in `supabase-schema.sql` in your Supabase SQL Editor.

### 4. Run the dev server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- **Landing page** — Modern marketing page with features, pricing, and tech stack showcase
- **Authentication** — Sign up / sign in via Clerk (social logins, MFA)
- **Feedback board** — Submit, vote, and search feedback
- **Payments** — Stripe subscriptions with webhook handling
- **Emails** — Transactional notifications via Resend
- **Analytics** — PostHog event tracking and funnels
- **Error tracking** — Sentry for real-time error monitoring
- **Rate limiting** — Upstash Redis for API protection
- **AI search** — Pinecone vector search across feedback

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/adam-fahim/adam-fahim)

## License

MIT
