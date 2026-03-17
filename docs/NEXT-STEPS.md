# MyClearDebt — Next Steps

**Last updated:** 2026-03-17
**Current state:** Foundation deployed, content pages live, domain not registered

---

## What's Done (Phase 0 — Foundation)

- [x] Next.js 16 project scaffolded (App Router, TypeScript, Tailwind CSS 4)
- [x] Brand identity implemented (teal/amber/cream palette, Inter font)
- [x] Prisma 7 schema (8 models: Provider, City, ProvinceState, Service, CityService, Review, Lead, BlogPost)
- [x] Database created (`debtrelief_db` on OP3 PostgreSQL 16, schema pushed)
- [x] 18 route files (5 content pages + 13 stubs/dynamic routes)
- [x] SEO/AEO/GEO foundation (sitemap.ts, robots.ts, llms.txt, JSON-LD helpers, metadata helpers with hreflang)
- [x] Compliance footer (disclaimer, OSB/CFPB/FTC links, "How we make money")
- [x] Coolify deployment working (app UUID: `agw808s000osk0o008w88w88`, auto-deploys on push)
- [x] GitHub repo (SayedB313/ClearMyDebt, main branch)
- [x] GSC OAuth credentials stored on OP3 (`~/.openclaw/workspace-index/gsc/client_secret.json`)
- [x] Dockerfile with NODE_ENV fix for Tailwind CSS 4 devDependencies

### Content Pages Complete
| Page | Route | Status |
|------|-------|--------|
| Homepage | `/` | Full design — hero, 6 option cards, how-it-works, FAQ with schema |
| Options Comparison | `/options` | 6-column table, card grid, FAQ with schema |
| Scam Alert | `/scam-alert` | 7 red flags, 5 protection steps, official resources, FAQ |
| How We Work | `/how-we-work` | Revenue model ($0/Free/$49/$149 tiers), 4 trust promises |
| About | `/about` | Mission, problem/solution, 6 operating principles |

### Stubs (route exists, placeholder content)
Quiz, Calculators (3), Blog index, Blog posts, Guides, Debt Report, For Providers, Provider profiles, Province/State hubs, City hubs, City×Service pages

---

## Immediate Blockers

### 1. Domain Registration — mycleardebt.com
**Priority:** Critical — blocks everything public-facing
**Action:** Register `mycleardebt.com` (check availability, GoDaddy/Namecheap/Cloudflare Registrar)
**Once done:**
- Add A record in Cloudflare → `46.225.73.26` (proxied)
- Add www CNAME → `mycleardebt.com`
- Update Coolify FQDN to `https://mycleardebt.com,https://www.mycleardebt.com`
- SSL/TLS: Full (Strict) in Cloudflare
- Verify in GSC via DNS TXT record

### 2. Coolify FQDN Update
**Current:** `http://agw808s000osk0o008w88w88.46.225.73.26.sslip.io` (temporary)
**Target:** `https://mycleardebt.com,https://www.mycleardebt.com`
**API:** `PATCH /api/v1/applications/agw808s000osk0o008w88w88` with `fqdn` field

---

## Phase 1: MVP Content (Target: Week 1-2 after domain)

### A. Interactive Tools (Client Components)
These drive engagement and differentiate from static content sites.

1. **Quiz Tool** (`/quiz`) — "What debt relief option is right for me?"
   - 5-7 questions: debt amount, income, assets, province, debt types
   - Results page recommending 1-2 options with links to deep-dives
   - No data collection on first version (add lead capture later)

2. **Consumer Proposal Calculator** (`/calculator/consumer-proposal`)
   - Inputs: total unsecured debt, monthly income, monthly expenses, assets
   - Output: estimated proposal payment, duration, % of debt repaid
   - Compare to: minimum payments, bankruptcy cost

3. **Bankruptcy Cost Calculator** (`/calculator/bankruptcy-cost`)
   - Inputs: monthly income, household size, province
   - Output: surplus income calculation, base cost, estimated duration
   - Based on OSB surplus income thresholds

4. **Debt Payoff Calculator** (`/calculator/debt-payoff`)
   - Inputs: debts (balance, rate, min payment), extra monthly payment
   - Output: payoff timeline (avalanche vs snowball), total interest saved

### B. Blog Posts (10 initial — target keywords from GAMEPLAN)
All blog posts need:
- Answer-first opening (50-word direct answer)
- FAQ section with FAQPage schema
- Article schema with author
- Internal links to options pages + quiz
- "Last updated" timestamp

| # | Title | Target Keyword | Priority |
|---|-------|---------------|----------|
| 1 | Consumer Proposal vs Bankruptcy — Complete Comparison (2026) | consumer proposal vs bankruptcy | High |
| 2 | How Much Does a Consumer Proposal Cost? Real Numbers | consumer proposal cost | High |
| 3 | What Happens When You File for Bankruptcy in Ontario | bankruptcy ontario | High |
| 4 | How to Choose a Licensed Insolvency Trustee | how to choose LIT | High |
| 5 | Average Canadian Household Debt by Province — 2026 | canadian household debt | Medium |
| 6 | Can You Keep Your House in a Consumer Proposal? | keep house consumer proposal | High |
| 7 | How Consumer Proposals Affect Your Credit Score | consumer proposal credit score | High |
| 8 | Debt Consolidation vs Consumer Proposal | debt consolidation vs consumer proposal | Medium |
| 9 | How Long Does Bankruptcy Last in Canada? | how long does bankruptcy last | Medium |
| 10 | What Debts Can Be Included in a Consumer Proposal? | debts included consumer proposal | Medium |

### C. Pillar Guide
- **The Complete Guide to Consumer Proposals in Canada** (`/guides/consumer-proposals-canada`)
- 3,000+ words, covers: what it is, eligibility, process, costs, timeline, credit impact, alternatives
- Interlinks to all related blog posts
- HowTo + FAQPage + Article schema

### D. Option Deep-Dive Pages (6 pages, route exists)
Each `/options/[slug]` page needs full content:
- Consumer Proposal, Bankruptcy, Debt Consolidation, Credit Counseling, Debt Settlement, Debt Management Plan
- Structure: Direct answer → Overview → Eligibility → Process → Costs → Timeline → Credit Impact → Pros/Cons → FAQ
- Interlink to quiz, calculator, related blog posts

### E. Technical — Phase 1
- [ ] Google Analytics 4 (add `NEXT_PUBLIC_GA_MEASUREMENT_ID` env var)
- [ ] Open Graph images (og:image for social sharing)
- [ ] Breadcrumb component with BreadcrumbList schema
- [ ] Internal linking mesh (automated "Related articles" on blog posts)
- [ ] Dynamic sitemap pulling blog posts from database
- [ ] Error pages (404, 500) with brand styling

---

## Phase 2: Ontario Programmatic Pages (Target: Week 3-4)

### A. Data Seeding
1. **40 Ontario cities** — Toronto, Ottawa, Mississauga, Brampton, Hamilton, London, Markham, Vaughan, Kitchener, Windsor, Richmond Hill, Oakville, Burlington, Sudbury, Oshawa, Barrie, St. Catharines, Cambridge, Kingston, Guelph, Thunder Bay, Waterloo, Chatham-Kent, Brantford, Ajax, Whitby, Clarington, Pickering, Milton, Newmarket, Halton Hills, Norfolk, Cornwall, Belleville, Sarnia, Sault Ste. Marie, Welland, North Bay, Peterborough, Kawartha Lakes
2. **7 service types** — Consumer Proposals, Bankruptcy, Debt Consolidation, Credit Counseling, Debt Settlement, Debt Management Plans, Licensed Insolvency Trustees
3. **280 city×service combinations** — programmatic page generation

### B. Provider Data
- Scrape OSB LIT directory (ic.gc.ca/bsf-osb) — ~1,000 Licensed Insolvency Trustees
- Parse: name, firm, license number, city, province, phone, website
- Seed into `providers` table with `type: LIT`, `verified: true`
- Build provider profile page template with:
  - License verification badge linking to OSB register
  - Map (optional, no Mapbox dependency — consider static map or text address)
  - Contact form (lead capture)

### C. Page Templates
- **Province hub** (`/ontario`) — overview, city list, statistics, provider count
- **City hub** (`/ontario/toronto`) — local debt statistics, provider list, service options
- **City×Service** (`/ontario/toronto/consumer-proposals`) — localized content, nearby providers, FAQ
- All with LocalBusiness + BreadcrumbList schema

### D. More Blog Posts (10 more, total 20)
Focus on province-specific and seasonal keywords.

---

## Phase 3: Canada National + US Planning (Target: Week 5-8)

- Expand to 150 Canadian cities across BC, Alberta, Quebec, Manitoba, Saskatchewan, Nova Scotia, New Brunswick
- hreflang en-US implementation
- US-specific content (Chapter 7/13 bankruptcy, state exemptions)
- Top 500 US cities
- First Quarterly Canadian Debt Report (linkable asset for backlinks)
- 15 more blog posts (total 35)

---

## Phase 4: Monetization (Target: Week 8-12)

- Stripe integration (provider subscriptions: Verified $49/mo, Premium $149/mo)
- Provider dashboard (claim profile, update info, respond to reviews)
- Lead tracking system (consultation request → provider notification)
- Provider outreach email campaigns (~1,000 LITs)
- Review system (verified filer reviews)

---

## Infrastructure Notes

### Coolify Deployment
- **App UUID:** `agw808s000osk0o008w88w88`
- **Temp URL:** `http://agw808s000osk0o008w88w88.46.225.73.26.sslip.io`
- **GitHub:** `SayedB313/ClearMyDebt` (main branch, auto-deploy on push)
- **Docker:** `node:22-alpine` multi-stage, standalone output
- **Key fix:** `NODE_ENV=development` during `npm ci` to include Tailwind CSS 4 devDependencies

### Database
- **Name:** `debtrelief_db` on OP3 PostgreSQL 16
- **User:** `coolify_apps` (password: `coolify_apps_op3_2026`)
- **Docker access:** `10.0.1.1:5432`
- **Local dev:** SSH tunnel `ssh -N -L 15432:127.0.0.1:5432 openclaw@100.76.178.67`

### GSC
- **OAuth Client ID:** `242406125825-mrassm1v5h11uioisnv29p9hj5nle3q4.apps.googleusercontent.com`
- **Credentials:** `~/.openclaw/workspace-index/gsc/client_secret.json` on OP3
- **Status:** Ready, needs domain registration for verification

### Environment Variables (Coolify)
Currently set: `DATABASE_URL`, `NODE_ENV`, `PORT`, `AUTH_TRUST_HOST`, `NEXTAUTH_SECRET`
Needed later: `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `RESEND_API_KEY`, `NEXTAUTH_URL` (update after domain)
