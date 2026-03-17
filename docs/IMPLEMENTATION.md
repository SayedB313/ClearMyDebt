# MyClearDebt — Implementation Tracker

**Started:** 2026-03-16
**Status:** In Progress

---

## Phase 0: Foundation (Current Session)

- [x] Create repo + scaffold Next.js project
- [x] Brand identity (colors, fonts, layout, compliance footer)
- [x] Prisma schema (8 models)
- [x] Route structure (17 page stubs)
- [x] SEO/AEO/GEO foundation (sitemap, robots, llms.txt, schema helpers)
- [x] Dockerfile + CLAUDE.md + .env.example
- [x] GitHub repo (SayedB313/ClearMyDebt)
- [ ] Create `debtrelief_db` on OP3 PostgreSQL
- [ ] Deploy to Coolify (container + Traefik)
- [ ] GSC OAuth setup (credentials stored, script ready)
- [ ] Domain registration (mycleardebt.com) — **BLOCKED: not registered yet**
- [ ] Cloudflare DNS (A record → 46.225.73.26) — **BLOCKED: domain needed**
- [ ] GSC verification (DNS TXT) — **BLOCKED: domain needed**

## Phase 1: MVP (Week 1-2 per GAMEPLAN)

### Content — 10 Blog Posts + 1 Pillar Guide
- [ ] Blog 1: Consumer Proposal vs Bankruptcy in Canada — The Complete Comparison (2026)
- [ ] Blog 2: How Much Does a Consumer Proposal Cost? Real Numbers Explained
- [ ] Blog 3: What Happens When You File for Bankruptcy in Ontario
- [ ] Blog 4: How to Choose a Licensed Insolvency Trustee (5 Things to Check)
- [ ] Blog 5: Warning: How to Spot a Debt Relief Scam in Canada
- [ ] Blog 6: Average Canadian Household Debt by Province — 2026 Data
- [ ] Blog 7: Can You Keep Your House in a Consumer Proposal?
- [ ] Blog 8: How Consumer Proposals Affect Your Credit Score (Timeline)
- [ ] Blog 9: Debt Consolidation vs Consumer Proposal — When Each Makes Sense
- [ ] Blog 10: How Long Does Bankruptcy Last in Canada? Complete Timeline
- [ ] Pillar Guide 1: The Complete Guide to Consumer Proposals in Canada (3,000+ words)

### Programmatic Pages — 280 Ontario City×Service Pages
- [ ] Seed Ontario cities data (40 cities)
- [ ] Seed 7 service types
- [ ] Generate city×service page content (Gemini)
- [ ] Build dynamic city×service page template with schema markup
- [ ] Build city hub page template
- [ ] Build province hub page template

### Provider Data
- [ ] Scrape OSB LIT directory (~1,000 providers)
- [ ] Parse and normalize provider data
- [ ] Seed providers into database
- [ ] Build provider profile page template with license verification badges

### Core Pages
- [ ] Homepage (full design, not stub)
- [ ] Options comparison page (interactive table)
- [ ] Scam Alert page (full content)
- [ ] How We Work page (revenue model transparency)
- [ ] About page (full content)
- [ ] Quiz tool (interactive questionnaire)
- [ ] Consumer proposal calculator
- [ ] Bankruptcy cost calculator

### Technical
- [ ] Internal linking mesh (city↔service↔blog↔guide)
- [ ] Breadcrumb navigation with schema
- [ ] Dynamic sitemap pulling from database
- [ ] Google Analytics 4 setup
- [ ] Open Graph images

## Phase 2: Canada National (Week 3-4)

- [ ] Expand to 150 Canadian cities
- [ ] 10 more blog posts (total 20)
- [ ] Pillar guides #2-3
- [ ] BC + Alberta + Quebec city pages
- [ ] Provider outreach emails sent (~1,000 LITs)

## Phase 3: US Expansion Planning (Week 5-8)

- [ ] Add top 500 US cities
- [ ] hreflang en-US implementation
- [ ] US-specific content (bankruptcy chapters, state laws)
- [ ] 15 more blog posts (total 35)
- [ ] First Quarterly Debt Report

## Phase 4: Monetization (Week 8-12)

- [ ] Stripe provider subscriptions (Verified $49/mo, Premium $149/mo)
- [ ] Provider dashboard (claim profile, update info, view analytics)
- [ ] Provider outreach email campaigns
- [ ] Lead tracking system

---

## Credentials & Config

### GSC OAuth (Desktop Client)
- **Client ID:** `242406125825-mrassm1v5h11uioisnv29p9hj5nle3q4.apps.googleusercontent.com`
- **Project ID:** `buoyant-yew-448301-s3`
- **Status:** Credentials ready, domain registration needed before verification

### Database
- **Name:** `debtrelief_db`
- **User:** `coolify_apps`
- **Host:** `10.0.1.1:5432` (Docker gateway to host PostgreSQL)

### Coolify
- **Domain:** mycleardebt.com (pending registration)
- **Port:** 3000
- **GitHub:** SayedB313/ClearMyDebt
