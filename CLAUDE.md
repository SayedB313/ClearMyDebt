# CLAUDE.md — MyClearDebt

## What This Is

MyClearDebt (mycleardebt.com) — a debt relief directory and education platform for Canada and the US. Connects distressed consumers with verified, government-licensed debt relief providers.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Database:** PostgreSQL 16 via Prisma 7 (`@prisma/adapter-pg` driver adapter)
- **Payments:** Stripe (provider subscriptions)
- **Email:** Resend (transactional)
- **Hosting:** Coolify on OP3 (Hetzner VPS), Cloudflare DNS + CDN

## Brand Identity

- **Tagline:** "Know before you owe."
- **Primary color:** Deep teal `#0D7377`
- **Secondary color:** Warm amber `#F5A623`
- **Accent:** Soft cream `#FAF7F2`
- **Text:** Charcoal `#2D2D2D`
- **Font:** Inter
- **Voice:** Calm, knowledgeable, non-judgmental. Never salesy. Education-first.

## Key Architecture Decisions

- **ISR for scale:** 15,000+ programmatic pages generated on-demand via ISR, not built at deploy time
- **Server Components by default:** Zero client JS unless explicitly needed (quiz, calculators)
- **Answer-first content:** Every page leads with a 40-60 word direct answer block (AEO 50-Word Rule)
- **Schema markup everywhere:** JSON-LD on every page (FAQPage, LocalBusiness, BreadcrumbList, Article, HowTo)
- **AI crawler friendly:** robots.ts allows GPTBot, ClaudeBot, PerplexityBot; llms.txt at root
- **hreflang ready:** en-CA default, en-US added when US pages launch

## Database

- **Name:** `debtrelief_db`
- **User:** `coolify_apps`
- **Host PostgreSQL 16** on OP3 (same instance as other Coolify apps)

## Commands

```bash
npm run dev          # Local development
npm run build        # Production build
npm run lint         # ESLint
npx prisma validate  # Validate schema
npx prisma migrate dev  # Run migrations (dev)
npx prisma db push   # Push schema to DB
```

## Compliance (CRITICAL)

Every page MUST include:
- Footer disclaimer: "MyClearDebt is not a debt relief provider..."
- Links to OSB, CFPB, FTC
- "How we make money" link

Provider listings MUST show:
- License type and number
- "Verify this license" link to government register
- Clear labeling of paid/promoted placements

We MUST NOT:
- Handle consumer funds
- Negotiate with creditors
- Guarantee outcomes
- Charge consumers
- Use "debt adjuster" language

## Planning Docs

- `docs/GAMEPLAN-mycleardebt.md` — Full build plan, phased rollout, keyword research, content calendar
- `docs/BRANDPLAN-mycleardebt.md` — Brand identity, trust architecture, consumer journey, compliance
