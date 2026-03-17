# CLAUDE.md — MyClearDebt

## What This Is

MyClearDebt (mycleardebt.com) — a debt relief directory and education platform for Canada (expanding to US). Connects distressed consumers with verified, government-licensed debt relief providers. Free for consumers; providers pay for enhanced listings.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Server Components, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS 4 (`@import "tailwindcss"` + `@theme inline` in globals.css) — no tailwind.config
- **Components:** shadcn/ui (not yet installed — add as needed)
- **Database:** PostgreSQL 16 via Prisma 7 (`@prisma/adapter-pg` driver adapter)
- **Payments:** Stripe (provider subscriptions — not yet configured)
- **Email:** Resend (transactional — not yet configured)
- **Hosting:** Coolify on OP3 (Hetzner VPS), Cloudflare DNS + CDN (pending domain registration)

## Brand Identity

- **Tagline:** "Know before you owe."
- **Primary:** Deep teal `#0D7377` (trust, professionalism)
- **Secondary:** Warm amber `#F5A623` (warmth, action CTAs)
- **Accent:** Soft cream `#FAF7F2` (section backgrounds)
- **Text:** Charcoal `#2D2D2D` (primary) / `#4A4A4A` (secondary)
- **Font:** Inter (via `next/font/google`)
- **Voice:** Calm, knowledgeable, non-judgmental. Never salesy. Education-first. No dark patterns.

## Key Architecture Decisions

- **ISR for scale:** 15,000+ programmatic pages generated on-demand, not at build time
- **Server Components by default:** Zero client JS unless explicitly needed (quiz, calculators)
- **Answer-first content:** Every page leads with a 40-60 word direct answer block (AEO 50-Word Rule)
- **Schema markup everywhere:** JSON-LD on every page (FAQPage, LocalBusiness, BreadcrumbList, Article, HowTo)
- **AI crawler friendly:** robots.ts allows GPTBot, ClaudeBot, PerplexityBot; llms.txt at root
- **hreflang ready:** `lang="en-CA"` default, en-US alternates added when US pages launch
- **Standalone Docker output:** `output: "standalone"` in next.config.ts for minimal container size

## Project Structure

```
app/
├── layout.tsx                     # Root layout — Inter font, nav, compliance footer
├── page.tsx                       # Homepage (hero, options, FAQ)
├── globals.css                    # Tailwind 4 + brand colors via @theme inline
├── options/
│   ├── page.tsx                   # Comparison table + cards
│   └── [slug]/page.tsx            # Option deep-dives (6 types) — STUB
├── quiz/page.tsx                  # Interactive questionnaire — STUB
├── calculator/[type]/page.tsx     # 3 calculators — STUB
├── blog/
│   ├── page.tsx                   # Blog index — STUB
│   └── [slug]/page.tsx            # Blog posts — STUB
├── guides/[slug]/page.tsx         # Pillar guides — STUB
├── provider/[slug]/page.tsx       # Provider profiles — STUB
├── [provinceOrState]/
│   ├── page.tsx                   # Province/state hub — STUB
│   └── [city]/
│       ├── page.tsx               # City hub — STUB
│       └── [service]/page.tsx     # City×Service (programmatic) — STUB
├── scam-alert/page.tsx            # Anti-scam resource (full content)
├── how-we-work/page.tsx           # Revenue transparency (full content)
├── about/page.tsx                 # Mission + principles (full content)
├── debt-report/page.tsx           # Quarterly stats — STUB
├── for-providers/page.tsx         # Provider signup — STUB
├── sitemap.ts                     # Dynamic XML sitemap
├── robots.ts                      # AI-crawler-friendly robots.txt
└── llms.txt/route.ts              # AI system guidance (via public/llms.txt)

lib/
├── db.ts                          # Prisma client singleton (PrismaPg adapter)
├── schema.tsx                     # JSON-LD generators (SchemaOrg, faqSchema, etc.)
└── metadata.ts                    # Metadata helper with hreflang

prisma/
├── schema.prisma                  # 8 models, 5 enums (no url in datasource — Prisma 7)
└── prisma.config.ts               # Prisma 7 CLI config (datasource URL from env)

docs/
├── GAMEPLAN-mycleardebt.md        # Full build plan, phased rollout, keyword research
├── BRANDPLAN-mycleardebt.md       # Brand identity, trust architecture, compliance
├── IMPLEMENTATION.md              # Phase tracker with checkboxes
└── NEXT-STEPS.md                  # Detailed next steps with priorities
```

## Database

- **Name:** `debtrelief_db`
- **User:** `coolify_apps`
- **Host:** PostgreSQL 16 on OP3 (Docker gateway: `10.0.1.1:5432`)
- **Models:** Provider, City, ProvinceState, Service, CityService, Review, Lead, BlogPost
- **Enums:** ProviderType (LIT/LAWYER/COUNSELOR/SETTLEMENT), ProviderTier, Country, LeadType, LeadStatus

### Prisma 7 Notes
- **No `url` in schema.prisma** — datasource URL provided via `prisma.config.ts`
- **No `previewFeatures`** — driver adapters are stable in Prisma 7
- **Runtime:** Uses `@prisma/adapter-pg` with `pg` Pool (see `lib/db.ts`)
- **CLI config:** `prisma.config.ts` with `defineConfig()` — required for `prisma generate`, `prisma migrate`, `prisma db push`

## Commands

```bash
npm run dev              # Local dev server (Turbopack)
npm run build            # Production build
npm run lint             # ESLint
npx prisma validate      # Validate schema
npx prisma generate      # Generate Prisma Client
npx prisma migrate dev   # Run migrations (dev)
npx prisma db push       # Push schema to DB (no migration)
```

### Local Database Access
```bash
# SSH tunnel to OP3 PostgreSQL (local dev)
ssh -N -L 15432:127.0.0.1:5432 openclaw@100.76.178.67
# Then use DATABASE_URL=postgresql://coolify_apps:coolify_apps_op3_2026@localhost:15432/debtrelief_db
```

## Deployment

- **Platform:** Coolify on OP3 (Hetzner VPS)
- **App UUID:** `agw808s000osk0o008w88w88`
- **Temp URL:** `http://agw808s000osk0o008w88w88.46.225.73.26.sslip.io`
- **GitHub:** `SayedB313/ClearMyDebt` — auto-deploys on push to `main`
- **Docker:** Multi-stage `node:22-alpine` → standalone output
- **Important:** `NODE_ENV=development` is set during `npm ci` in Dockerfile to include Tailwind CSS 4 devDependencies. Coolify injects `NODE_ENV=production` as a build-time ARG which would otherwise skip them.

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

## Content Standards

- **Answer-first:** Open every page/post with a 40-60 word direct answer to the page's primary question
- **Schema markup:** Every page gets appropriate JSON-LD (use helpers in `lib/schema.tsx`)
- **Sources:** Cite OSB, CAIRP, CFPB, FTC data — never unsourced claims
- **Tone:** Calm, non-judgmental, education-first. No urgency tactics, no countdown timers
- **Updates:** Include "Last updated: [date]" on all factual content

## Planning Docs

- `docs/GAMEPLAN-mycleardebt.md` — Full build plan, phased rollout, keyword research, content calendar
- `docs/BRANDPLAN-mycleardebt.md` — Brand identity, trust architecture, consumer journey, compliance
- `docs/IMPLEMENTATION.md` — Phase tracker with checkboxes
- `docs/NEXT-STEPS.md` — Detailed next steps, priorities, and infrastructure notes
