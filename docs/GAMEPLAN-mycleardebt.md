# GAMEPLAN — MyClearDebt.com
**Last updated:** 2026-03-15 | **Agent:** Index 📇

---

## Concept
- **Domain:** mycleardebt.com
- **Tagline:** *"Know before you owe."*
- **Niche:** Debt settlement, consumer proposals, bankruptcy — connecting distressed consumers with licensed professionals
- **Market:** Canada + USA (Canada launches first, US follows 3 weeks later)
- **Model:** Education-first directory + provider matching (NOT lead selling initially)
- **Differentiator:** Transparent comparison, verified provider licensing, anti-scam positioning, massive long-form content library

---

## Page Scale (Phased — Earn the Right to Scale)

**Final target:** 15,250+ pages. But we DON'T dump them all at once.

| Region | Cities | Services | Programmatic Pages |
|--------|--------|----------|--------------------|
| 🇨🇦 Canada | 150 | 7 | **1,050** |
| 🇺🇸 USA | 2,000+ | 7 | **14,000+** |
| **Total programmatic** | **2,150+** | **7** | **15,050+** |
| **Blog / long-form** | — | — | **200+ articles** |
| **GRAND TOTAL** | | | **15,250+** |

### Scaling Rules (Non-Negotiable)
1. **Don't publish next batch until previous batch is >70% indexed in GSC**
2. **No page goes live without 800+ words of genuinely unique content**
3. **No page goes live with 0 providers listed** (noindex empty city pages)
4. **Every page must pass the "Would a human bookmark this?" test**

### Phased Rollout

| Stage | When | Pages Live | Gate to Next Stage |
|-------|------|-----------|-------------------|
| Phase 1 | Week 2 | **295** (280 ON programmatic + 15 blog) | >70% indexed in GSC |
| Phase 2 | Week 4 | **1,085** (all CA + 30 blog) | >70% indexed |
| Phase 3 | Week 8 | **4,585** (top 500 US + 50 blog) | >70% indexed |
| Phase 4 | Week 12 | **8,100** (top 1,000 US + 75 blog) | >70% indexed |
| Phase 5 | Week 16 | **15,150** (full scale + 100 blog) | Continuous monitoring |

**If indexing rate drops below 50% at any stage → STOP scaling and fix quality first.**

---

## Google Risk Mitigation Strategy

### Why 15K Pages Is Fine (When Done Right)
- Wikipedia: 60M+ pages. Lawyers.com: 80K+ profiles. GetAHomePro: 34K pages (indexing within 4 days)
- Google doesn't penalize page count — it penalizes THIN pages
- Key: every page must provide genuine, unique value — not template-swapped doorway pages

### 🔴 The 3 Risks We Avoid

**1. Thin Content / Doorway Pages**
- BAD: Same template with city name swapped ("Looking for debt relief in [city]?")
- GOOD: Unique data per city — real provider counts, local cost data, province-specific rules, economic context
- Gemini generates unique 800+ word content per page, not fill-in-the-blank templates
- Every page references real local data (providers, costs, regulations)

**2. Crawl Budget Exhaustion**
- New domains get limited crawl budget
- We earn budget gradually through phased rollout
- Phase 1 (295 pages) → Google crawls easily → builds trust → allocates more budget
- Only scale when Google demonstrates it's keeping up

**3. Index Bloat / Quality Dilution**
- If Google indexes 15K pages but most are thin → average quality drops → GOOD pages de-rank
- Prevention: minimum content threshold per page, noindex pages below quality bar
- Regular GSC audit: any page "Crawled - not indexed" gets reviewed and improved

### Technical Safeguards

**Sitemap Segmentation (not one giant file):**
```xml
sitemap-blog.xml              (blog posts — highest quality)
sitemap-guides.xml             (pillar guides)
sitemap-canada-on.xml          (Ontario city pages)
sitemap-canada-bc.xml          (BC city pages)
sitemap-canada-ab.xml          (Alberta city pages)
sitemap-canada-qc.xml          (Quebec city pages)
sitemap-canada-other.xml       (remaining provinces)
sitemap-us-ca.xml              (California city pages)
sitemap-us-tx.xml              (Texas city pages)
sitemap-us-fl.xml              (Florida city pages)
...                            (one per state with 50+ cities)
```
- Google crawls smaller sitemaps more efficiently
- We track indexing rate per segment in GSC
- If one segment underperforms → fix that segment before adding more

**Canonical URLs:**
- Every page has self-referencing canonical
- `<link rel="canonical" href="https://mycleardebt.com/ontario/toronto/consumer-proposal" />`
- Prevents duplicate signals across similar city × service pages

**Internal Linking Hierarchy:**
```
Homepage (authority hub)
  → /options/ pages (solution education)
  → Province/State hubs (geographic authority)
    → City hubs (distribute link equity)
      → City × Service pages (rank for long-tail)
        → Provider profiles (conversion pages)

Blog posts → link TO programmatic pages (pass authority)
Programmatic pages → link TO blog posts (pass topical relevance)
Pillar guides → link TO everything (spider web of authority)
```

**Noindex Strategy:**
- Noindex pages with <3 providers (too thin to be useful)
- Noindex parameter-based pagination/filters
- Noindex admin/API routes via robots.txt
- Un-noindex when providers are added (automatically via code)

**Proactive Indexing:**
- IndexNow for Bing (instant notification)
- Google Indexing API for priority pages
- GSC URL inspection for spot-checking

### GSC Monitoring Dashboard (check every session)

| Signal | ✅ Healthy | 🔴 Danger — Stop Scaling |
|--------|----------|--------------------------|
| Indexed / submitted ratio | >70% | <50% |
| "Crawled - not indexed" | <10% of pages | >30% of pages |
| "Duplicate without canonical" | 0 | Any |
| Manual actions | None | Any |
| Average position trend | Improving week-over-week | Flatlined at 50+ or declining |
| Click-through rate | Rising or stable | Falling with more pages |
| Core Web Vitals | All green | Any failing |

**Canary in the coal mine:** If "Crawled - not indexed" spikes above 20%, Google is telling us the content isn't good enough. Fix quality before publishing anything new.

### Page Quality Requirements (Every Page)

**Programmatic pages MUST have:**
- [ ] 800+ words of unique body content (not template-swapped)
- [ ] Real provider listings from DB (not empty/placeholder)
- [ ] Province/state-specific legal info (exemptions, rules, costs)
- [ ] Local economic context (population, average debt, filing rates where available)
- [ ] FAQ section with 5-8 unique questions (FAQPage schema)
- [ ] Internal links to related city pages, blog posts, and pillar guides
- [ ] Meta title and description unique to this exact page
- [ ] BreadcrumbList schema
- [ ] Self-referencing canonical

**Blog posts MUST have:**
- [ ] 2,000+ words minimum (most will be 2,500-4,000)
- [ ] Targets a specific long-tail keyword cluster
- [ ] Real data citations (CAIRP, OSB, FTC, CFPB, court filings)
- [ ] Comparison tables with structured data
- [ ] FAQ section with FAQPage schema (8-12 questions)
- [ ] Internal links to at least 3 programmatic pages + 2 other blog posts
- [ ] Article schema + BreadcrumbList
- [ ] Author byline (E-E-A-T signal)
- [ ] "Sources" section at bottom linking to official government sources

**The "Template Swap" Test:**
> Take any two city pages side by side. If >60% of the content is identical with only the city name changed → the content generation needs more work. Each page should read like it was written specifically for that city.

---

## Keyword Research System — Built Into The Build

### Phase 0: Automated Keyword Discovery (BEFORE writing any content)

We're building a `keyword-research.js` script (same pattern as GetAHomePro) that does:

**Step 1: Seed keyword scraping**
- Google Autocomplete API → "consumer proposal [a-z]", "bankruptcy [a-z]", "debt settlement [a-z]", "debt consolidation [a-z]"
- Google "People Also Ask" extraction → every PAA question = potential blog post
- Google "Related searches" scraping → bottom of SERP for every seed keyword
- AlsoAsked.com or AnswerThePublic data → question-tree mapping

**Step 2: Competitor keyword gap analysis**
- Scrape top 10 ranking pages for each target keyword
- Extract their H1s, H2s, meta titles → find topics they cover that we don't
- Identify thin content where we can create superior long-form pieces
- Key competitors to reverse-engineer:
  - 🇨🇦 MNPDebt.ca, BankruptcyCanada.com, Spergel.ca, HoyesMichalos.com, Sands-Trustee.com
  - 🇺🇸 NerdWallet.com, Debt.org, Debt.com, Bankrate.com, Investopedia.com
  - Legal: Justia.com, Avvo.com, FindLaw.com, Nolo.com

**Step 3: Keyword clustering + content mapping**
- Group keywords by topic cluster → map each cluster to a content piece
- Classify intent: informational / comparison / transactional / navigational
- Assign priority by: volume × intent value × competition difficulty
- Output: `keyword-clusters.json` — the master content roadmap

**Step 4: SERP analysis per keyword**
- For each target keyword, check:
  - What type of content ranks #1-10? (listicle, guide, tool, directory page?)
  - Is there a Featured Snippet? What format? (paragraph, list, table)
  - Are there PAA boxes? What questions?
  - AI Overview present? What does it cite?
  - Video carousel? Image pack?
- This determines content FORMAT for each article (not just topic)

### Keyword Research Script (`scripts/keyword-research.js`)
```
// Inputs: seed keywords array
// Process:
//   1. Hit Google Autocomplete for each seed × [a-z, 0-9, how, what, when, why, can, does, is]
//   2. Deduplicate and cluster by semantic similarity
//   3. For each cluster, scrape SERP: PAA questions, related searches, snippet type
//   4. Score: estimated volume × intent × (1/competition)
//   5. Output: keyword-clusters.json + content-calendar.json
//
// Run weekly to discover new keyword opportunities
```

---

## Master Keyword Map

### Tier 1: Head Terms (high volume, high competition — target with pillar guides + homepage)

| Keyword | Est. Volume | CPC | Intent | Content Type |
|---------|-------------|-----|--------|-------------|
| debt consolidation | 110,000 | $62.56 | Transactional | Pillar guide + comparison tool |
| bankruptcy | 135,000 | $21.21 | Informational | Pillar guide |
| debt relief | 33,100 | $47.21 | Transactional | Options hub page |
| debt consolidation loan | 135,000 | $45.41 | Transactional | Comparison guide |
| credit counseling | 8,100 | $39.50 | Transactional | Pillar guide |
| debt settlement | 4,400 | $35.42 | Transactional | Pillar guide |
| consumer proposal (CA) | ~33,000 | High | Transactional | Pillar guide |

### Tier 2: City + Service (medium volume, low-medium competition — programmatic pages)

| Pattern | Example | Est. Volume | Intent |
|---------|---------|-------------|--------|
| [service] in [city] | consumer proposal Toronto | 1,500 | Transactional |
| [service] [city] | bankruptcy lawyer Vancouver | 800 | Transactional |
| [service] near me | debt consolidation near me | 5,000+ | Transactional |
| [provider type] in [city] | insolvency trustee Calgary | 600 | Navigational |
| best [service] [city] | best debt relief companies Houston | 400 | Comparison |

### Tier 3: Long-Tail Questions (lower volume each, massive in aggregate — BLOG CONTENT)

This is where we dominate. Each of these becomes a **1,500-3,000+ word article**.

#### 🇨🇦 CANADA — Consumer Proposal Long-Tail Keywords

**Cost & Payment Questions:**
- how much does a consumer proposal cost
- consumer proposal monthly payment calculator
- can I afford a consumer proposal
- who pays for a consumer proposal
- consumer proposal fees Ontario
- are consumer proposal fees negotiable
- what percentage of debt do you pay in a consumer proposal
- consumer proposal payment schedule
- can I pay off my consumer proposal early
- what happens if I miss a consumer proposal payment
- consumer proposal vs debt consolidation loan cost comparison

**Eligibility & Process:**
- who qualifies for a consumer proposal in Canada
- can I file a consumer proposal with no income
- can I file a consumer proposal if I'm self-employed
- how long does a consumer proposal take
- consumer proposal process step by step
- what debts are included in a consumer proposal
- can CRA debt be included in a consumer proposal
- can student loans be included in a consumer proposal
- can payday loans be included in a consumer proposal
- how to find a licensed insolvency trustee near me
- what happens at a consumer proposal meeting of creditors
- can creditors reject my consumer proposal
- what percentage of creditors need to approve a consumer proposal

**Impact & Consequences:**
- how does a consumer proposal affect your credit score
- how long does a consumer proposal stay on your credit report
- can I get a mortgage after a consumer proposal
- can I get a car loan during a consumer proposal
- can I get a credit card during a consumer proposal
- does a consumer proposal affect my spouse
- does a consumer proposal affect my job
- can I keep my house in a consumer proposal
- can I keep my car in a consumer proposal
- will a consumer proposal stop wage garnishment
- will a consumer proposal stop collection calls
- consumer proposal vs bankruptcy credit impact comparison

**Comparison / Decision:**
- consumer proposal vs bankruptcy which is better
- consumer proposal vs debt management plan
- consumer proposal vs debt consolidation
- consumer proposal vs credit counseling
- is a consumer proposal worth it
- alternatives to consumer proposal in Canada
- consumer proposal pros and cons
- disadvantages of a consumer proposal
- should I file a consumer proposal or just pay minimum payments
- when is bankruptcy better than a consumer proposal

**Province-Specific:**
- consumer proposal Ontario rules
- consumer proposal BC process
- consumer proposal Alberta cost
- consumer proposal Quebec differences
- consumer proposal Manitoba
- consumer proposal Nova Scotia
- consumer proposal Saskatchewan

#### 🇨🇦 CANADA — Bankruptcy Long-Tail Keywords

**Cost & Process:**
- how much does it cost to file bankruptcy in Canada
- how to file for bankruptcy in Ontario
- bankruptcy process in Canada step by step
- how long does bankruptcy last in Canada
- what is surplus income in bankruptcy Canada
- first time bankruptcy Canada rules
- second bankruptcy in Canada consequences
- what happens to your bank account when you file bankruptcy Canada

**Assets & Protections:**
- can I keep my house if I file bankruptcy in Canada
- can I keep my car in bankruptcy Ontario
- can I keep my RRSP in bankruptcy
- bankruptcy exemptions by province Canada
- what assets can a trustee seize in bankruptcy
- does bankruptcy protect me from CRA

**After Bankruptcy:**
- how to rebuild credit after bankruptcy Canada
- how long does bankruptcy stay on credit report Canada
- can I get a mortgage after bankruptcy in Canada
- life after bankruptcy Canada stories
- how soon can I get a credit card after bankruptcy

#### 🇺🇸 USA — Bankruptcy Long-Tail Keywords

**Chapter 7 Specific:**
- chapter 7 bankruptcy requirements
- how to qualify for chapter 7 bankruptcy
- chapter 7 means test calculator
- what debts does chapter 7 discharge
- chapter 7 vs chapter 13 which should I file
- how much does chapter 7 bankruptcy cost
- can I keep my house in chapter 7
- can I keep my car in chapter 7 bankruptcy
- how long does chapter 7 take
- chapter 7 bankruptcy income limits by state
- can I file chapter 7 if I own a home
- chapter 7 bankruptcy and tax refunds

**Chapter 13 Specific:**
- chapter 13 repayment plan explained
- chapter 13 payment calculator
- how long is a chapter 13 plan
- chapter 13 vs debt consolidation
- can I convert chapter 13 to chapter 7
- chapter 13 hardship discharge
- chapter 13 trustee payment plan
- chapter 13 bankruptcy and mortgage
- chapter 13 plan modification

**General US Bankruptcy:**
- how to file bankruptcy without a lawyer
- free bankruptcy consultation near me
- bankruptcy filing fee waiver
- how to stop wage garnishment through bankruptcy
- does bankruptcy stop foreclosure
- does bankruptcy stop eviction
- bankruptcy and child support obligations
- bankruptcy and student loan discharge
- medical debt bankruptcy
- how many times can you file bankruptcy
- bankruptcy alternatives USA

#### 🇺🇸 USA — Debt Settlement Long-Tail Keywords

- how does debt settlement work
- debt settlement vs bankruptcy which is better
- how much does debt settlement cost
- does debt settlement hurt your credit
- how long does debt settlement take
- can I settle credit card debt for less than I owe
- debt settlement tax implications
- is debt settlement a scam
- how to negotiate debt settlement on your own
- best debt settlement companies reviews
- debt settlement vs debt management plan
- debt settlement and lawsuits
- can debt collectors sue after settlement
- FTC rules on debt settlement
- does settling a debt affect your credit score

#### Universal — Debt Help Long-Tail Keywords

**Emotional / Situational:**
- drowning in debt what are my options
- can't pay my bills what should I do
- I'm behind on all my payments help
- debt and mental health resources
- ashamed of debt where to get help
- my spouse doesn't know about my debt
- debt after divorce what are my options
- debt from gambling addiction help
- senior citizen debt relief options
- disability and debt what to do

**Specific Debt Types:**
- how to deal with credit card debt
- medical debt forgiveness programs
- student loan debt relief options 2026
- payday loan debt cycle how to escape
- tax debt relief programs IRS
- CRA tax debt payment plan
- business debt personal liability
- cosigner debt obligations
- debt after death who pays
- what happens to credit card debt when you die

**Calculators & Tools:**
- debt to income ratio calculator
- how long to pay off debt calculator
- debt avalanche vs debt snowball calculator
- consumer proposal payment calculator
- bankruptcy means test calculator
- debt consolidation loan calculator
- credit score after bankruptcy calculator

---

## Long-Form Content Strategy

### What "Long-Form" Means for MyClearDebt

Every blog post targets a **specific long-tail keyword cluster** and follows this structure:

**Minimum 2,000 words** (most will be 2,500-4,000)

**Article Template:**
```
H1: [Exact target keyword — natural phrasing]
Meta description: [150-160 chars, includes keyword, ends with CTA]

TL;DR / Key Takeaways (bulleted, 4-6 points) ← Featured Snippet bait

Table of Contents (linked H2s)

H2: What Is [Topic]?
  → Clear definition, schema-ready paragraph

H2: How [Topic] Works — Step by Step
  → Numbered steps with details
  → HowTo schema markup

H2: [Topic] Costs / Fees Breakdown
  → Table: cost ranges by type/province/state
  → Real numbers from CAIRP/OSB/court data

H2: Pros and Cons of [Topic]
  → Two-column table
  → Honest, not salesy

H2: [Topic] vs [Alternative] — Comparison
  → Side-by-side comparison table
  → "Which is right for you?" decision framework

H2: Who Qualifies / Eligibility Requirements
  → Criteria list with specifics (income thresholds, debt minimums)

H2: How [Topic] Affects Your Credit
  → Timeline graphic/table
  → Credit report notation type and duration

H2: Frequently Asked Questions
  → 8-12 FAQs in FAQ schema markup
  → Each answer targets a PAA keyword

H2: What to Do Next
  → CTA: "Find a verified [provider type] near you"
  → Link to comparison tool / quiz
  → Link to related articles

Sources section:
  → Links to CAIRP, OSB, FTC, CFPB, court data
  → This signals authority to both Google and AI models
```

### Content Production Pipeline

**Phase 1: Keyword research script** → generates `content-calendar.json`
**Phase 2: Gemini API** → generates first draft per keyword cluster
**Phase 3: Human review/edit** → fact-check, add real data, refine
**Phase 4: Schema injection** → FAQ, HowTo, Article, BreadcrumbList
**Phase 5: Internal linking** → connect to city pages, provider profiles, related articles
**Phase 6: Publish + submit to GSC** → monitor indexing + rankings

### Content Calendar — First 90 Days

#### Week 1-2: Launch Batch (15 articles)

**Comparison & Decision (5) — highest commercial intent:**
1. Consumer Proposal vs Bankruptcy in Canada — Complete 2026 Comparison (3,500 words)
2. Debt Consolidation vs Consumer Proposal — When Each Makes Sense (2,500 words)
3. Chapter 7 vs Chapter 13 Bankruptcy — Which Should You File? (3,000 words)
4. Debt Settlement vs Bankruptcy — Pros, Cons, and When to Choose Each (3,000 words)
5. All Your Debt Relief Options Compared — Canada & USA Guide (4,000 words)

**Cost & Calculator (5) — people search these right before taking action:**
6. How Much Does a Consumer Proposal Cost? Real Numbers by Province (3,000 words)
7. How Much Does Bankruptcy Cost in Canada? All Fees Explained (2,500 words)
8. Chapter 7 Bankruptcy Cost by State — Filing Fees, Lawyer Fees, Total (3,000 words)
9. How Much Does Debt Settlement Cost? Fees, Savings, Net Impact (2,500 words)
10. Consumer Proposal Payment Calculator — Estimate Your Monthly Payment (2,000 words + interactive tool)

**Process & How-To (5) — captures informational searchers:**
11. How to File a Consumer Proposal in Canada — Step-by-Step Guide (3,000 words)
12. How to File for Bankruptcy in Ontario — Complete Process (3,000 words)
13. How to Choose a Licensed Insolvency Trustee — 7 Things to Check (2,500 words)
14. What Happens at a Consumer Proposal Meeting of Creditors (2,000 words)
15. How to File Chapter 7 Bankruptcy Without a Lawyer (3,000 words)

#### Week 3-4: Impact & Consequences Batch (15 articles)

**Credit Impact (5):**
16. How Does a Consumer Proposal Affect Your Credit Score? Full Timeline (2,500 words)
17. How Long Does Bankruptcy Stay on Your Credit Report — Canada vs USA (2,500 words)
18. Can I Get a Mortgage After a Consumer Proposal? Timeline + Tips (2,500 words)
19. Does Debt Settlement Hurt Your Credit? What Really Happens (2,000 words)
20. How to Rebuild Credit After Bankruptcy — Step-by-Step Guide (3,000 words)

**Assets & Protections (5):**
21. Can I Keep My House in a Consumer Proposal? Province-by-Province Rules (3,000 words)
22. Can I Keep My Car in Bankruptcy? Canada & USA Rules (2,500 words)
23. Bankruptcy Exemptions by Province — What You Can Keep (3,000 words)
24. Chapter 7 Bankruptcy Exemptions by State — Complete Guide (4,000 words)
25. Will a Consumer Proposal Stop Wage Garnishment? (2,000 words)

**Specific Debt Types (5):**
26. Can CRA Tax Debt Be Included in a Consumer Proposal? (2,500 words)
27. Student Loan Debt and Bankruptcy in Canada — The 7-Year Rule Explained (2,500 words)
28. Medical Debt and Bankruptcy — How to Eliminate Medical Bills (2,500 words)
29. Payday Loan Debt — How to Break the Cycle and Get Real Help (3,000 words)
30. Credit Card Debt Relief — All Your Options Compared (3,000 words)

#### Week 5-8: Depth & Authority Batch (20 articles)

**City-Specific Guides (10) — one per major market:**
31. Debt Help in Toronto — All Your Options in One Place (3,000 words)
32. Consumer Proposal Services in Vancouver — Complete Guide (2,500 words)
33. Bankruptcy Trustees in Calgary — How to Choose (2,500 words)
34. Debt Relief in Montreal — Options for Quebec Residents (2,500 words)
35. Ottawa Debt Help — Consumer Proposals, Bankruptcy & More (2,500 words)
36. Debt Relief in New York City — Bankruptcy, Settlement & More (3,000 words)
37. Los Angeles Bankruptcy Attorney Guide (2,500 words)
38. Houston Debt Relief Options — Chapter 7, 13, Settlement (2,500 words)
39. Chicago Bankruptcy Guide — Filing, Costs, Best Lawyers (2,500 words)
40. Miami Debt Settlement and Bankruptcy Options (2,500 words)

**Emotional / Situational (5):**
41. Drowning in Debt? Here Are Your Actual Options (3,000 words)
42. Debt and Mental Health — Resources for Canadians and Americans (2,500 words)
43. My Spouse Doesn't Know About My Debt — What to Do (2,000 words)
44. Debt After Divorce — Who Pays What and Your Options (2,500 words)
45. Senior Citizen Debt Relief — Options for Retirees (2,500 words)

**Authority / Data (5):**
46. Canadian Debt Statistics 2026 — How Much Do Canadians Owe? (3,000 words)
47. American Household Debt Statistics 2026 — Complete Breakdown (3,000 words)
48. How to Spot a Debt Relief Scam — Red Flags from the FTC & CFPB (2,500 words)
49. What Is a Licensed Insolvency Trustee? Everything You Need to Know (2,000 words)
50. The Complete History of Bankruptcy Law in Canada and the US (3,000 words)

#### Week 9-12: Scale Batch (25+ articles)

**Province-Specific (10):**
51-60. Consumer Proposal in [Province] — Rules, Costs, and Process
   → Ontario, BC, Alberta, Quebec, Manitoba, Saskatchewan, Nova Scotia, New Brunswick, Newfoundland, PEI

**State-Specific (10):**
61-70. How to File Bankruptcy in [State] — Exemptions, Costs, Process
   → California, Texas, Florida, New York, Illinois, Pennsylvania, Ohio, Georgia, Michigan, North Carolina

**Advanced / Niche (5+):**
71. Self-Employed Bankruptcy in Canada — Special Rules and Considerations
72. Joint Consumer Proposal — Filing Together as a Couple
73. Second Bankruptcy in Canada — Rules, Timeline, Consequences
74. Bankruptcy and Small Business — Personal Liability Guide
75. What Happens to Your Debt When You Die — Canada & USA

### Ongoing Content (Month 4+)
- **4 articles per week** targeting new long-tail keywords from the research script
- **Quarterly Debt Report** (Canada + USA) using CAIRP/OSB/court data
- **Monthly "State of Debt" update** — short data post, becomes citeable
- **Target: 200+ articles by month 6**

---

## Pillar Guides (5 cornerstone pieces, 4,000-6,000 words each)

1. **The Complete Guide to Consumer Proposals in Canada (2026)**
   - Everything in one definitive resource
   - Links to all consumer proposal blog posts
   - Updated quarterly with new data
   - Target: rank #1 for "consumer proposal Canada"

2. **Filing for Bankruptcy in Canada — Everything You Need to Know**
   - Federal rules, provincial exemptions, step-by-step, costs
   - Links to all bankruptcy blog posts
   - Target: rank #1 for "bankruptcy Canada"

3. **Debt Consolidation in Canada & USA — Methods, Rates, Providers**
   - Loans, balance transfers, DMPs, home equity
   - Provider comparison with real rates
   - Target: rank for "debt consolidation" variations

4. **Understanding Credit Counseling — What It Is, What It Costs, Does It Work**
   - How it differs from settlement and proposals
   - Accredited agencies list
   - Target: rank for "credit counseling" + variations

5. **Canadian & American Debt Statistics (Updated Quarterly)**
   - Total household debt, average by province/state, insolvency trends
   - Charts, infographics, downloadable data
   - Target: become THE cited source for debt data
   - AEO gold — AI models cite data-heavy reference pages

---

## Interactive Tools (Content + Conversion)

### 1. Debt Options Quiz
- "What's the right debt solution for me?" — 8-10 questions
- Outputs personalized comparison of options
- Each result links to relevant pillar guide + local providers
- **SEO target:** "debt relief quiz", "what debt option is right for me"

### 2. Consumer Proposal Calculator
- Input: total debt, income, province
- Output: estimated monthly payment, total cost, savings vs paying in full
- **SEO target:** "consumer proposal calculator", "consumer proposal payment estimator"

### 3. Bankruptcy Cost Calculator
- Input: income, assets, province/state, first or second filing
- Output: estimated total cost, timeline, surplus income
- **SEO target:** "bankruptcy cost calculator Canada", "chapter 7 cost calculator"

### 4. Debt Payoff Calculator
- Input: balances, rates, minimum payments
- Output: payoff timeline, total interest, comparison of snowball vs avalanche
- **SEO target:** "how long to pay off debt calculator"

### 5. Debt-to-Income Ratio Calculator
- Input: monthly income, monthly debt payments
- Output: ratio, what it means, which options are available at that ratio
- **SEO target:** "debt to income ratio calculator"

---

## Schema Markup Strategy (every page)

| Page Type | Schema Types |
|-----------|-------------|
| Blog post | Article, FAQPage, BreadcrumbList, HowTo (when applicable) |
| City × service page | LocalBusiness (aggregated), FAQPage, BreadcrumbList |
| Provider profile | LocalBusiness, AggregateRating (when reviews exist) |
| Calculator/tool | WebApplication, FAQPage |
| Pillar guide | Article, FAQPage, HowTo, BreadcrumbList, ItemList |
| Comparison page | Article, FAQPage, Table (structured data) |
| State/province hub | ItemList, BreadcrumbList |

---

## AEO / GEO Strategy — Getting Cited by AI

### llms.txt (placed at site root)
```
# MyClearDebt.com
> Canada and USA's comprehensive debt relief directory. We help consumers compare
> debt settlement, consumer proposals, bankruptcy, debt consolidation, and credit
> counseling options with verified, licensed professionals.

## Key Resources
- /guides/consumer-proposal-canada — Complete guide to consumer proposals
- /guides/bankruptcy-canada — Complete guide to bankruptcy in Canada
- /guides/debt-consolidation — Methods, rates, and providers
- /debt-report/ — Quarterly Canadian & American debt statistics
- /scam-alert/ — How to spot debt relief scams

## Data Coverage
- 3,000+ verified providers across Canada and the USA
- 2,150+ cities covered
- Licensed Insolvency Trustees verified against OSB register
- Bankruptcy attorneys verified against state bar associations
- Updated quarterly with CAIRP, OSB, and court filing data
```

### What makes AI cite us:
1. **Unique data** — quarterly debt reports with numbers nobody else compiles
2. **Structured comparisons** — clean tables AI can extract (proposal vs bankruptcy vs settlement)
3. **Government source citations** — we cite OSB, CAIRP, FTC, CFPB in every article
4. **Definitive answers** — clear, quotable paragraphs that directly answer questions
5. **Schema markup** — FAQ schema feeds directly into AI training data
6. **Update frequency** — quarterly data refreshes signal freshness

---

## Build Phases (Gated by Indexing Performance)

### Phase 1: Foundation + Keyword Research (Week 1)
- [ ] Register mycleardebt.com (Cloudflare)
- [ ] Create repo `SayedB313/mycleardebt`
- [ ] Clone GetAHomePro's Next.js architecture
- [ ] Create `debtrelief_db` on OP3 Postgres
- [ ] Design & migrate DB schema
- [ ] **Build `keyword-research.js` script** — Google Autocomplete + PAA scraping
- [ ] **Run keyword research** → generate `keyword-clusters.json` + `content-calendar.json`
- [ ] Set up Coolify container + Traefik routing
- [ ] GA4 + GSC setup
- [ ] Set up segmented sitemaps (one per province, one for blog, one for guides)
- [ ] Configure canonical URLs, robots.txt, noindex rules for empty pages

### Phase 2: Canada MVP — PROVE QUALITY (Week 2) → 295 pages
**GATE: This is launch. Quality over speed.**
- [ ] Scrape OSB LIT directory → ~1,000 providers
- [ ] Scrape LSO → Ontario bankruptcy lawyers
- [ ] Build all core pages (homepage, search, quiz, calculators)
- [ ] Build city × service programmatic pages (Ontario = 40 cities × 7 = 280 pages)
- [ ] **QA check: every page has 800+ unique words, real provider data, local context**
- [ ] **Template swap test: compare 5 random city pairs — <40% content overlap**
- [ ] **Write/generate first 15 blog posts** (2,500-4,000 words each)
- [ ] **Write pillar guide #1** (Consumer Proposals — 5,000+ words)
- [ ] Add FAQ schema + Article schema to all content
- [ ] Deploy, submit sitemap-canada-on.xml + sitemap-blog.xml to GSC
- [ ] **LAUNCH 🇨🇦**
- [ ] ⏳ **WAIT: Monitor GSC daily for 1-2 weeks. Do NOT proceed until >70% indexed.**

### Phase 3: Canada National — SCALE WITH TRUST (Weeks 3-4) → 1,085 pages
**GATE: Phase 2 must show >70% indexing + no quality signals from GSC**
- [ ] Check GSC: "Crawled - not indexed" < 10%? Manual actions = 0? → PROCEED
- [ ] Expand to remaining provinces (110 cities × 7 = 770 more pages)
- [ ] Scrape remaining law societies + credit counselors
- [ ] **QA check: same quality bar as Phase 2 for every new page**
- [ ] **Write 15 more blog posts** (total: 30)
- [ ] **Write pillar guides #2-3**
- [ ] Build comparison tool + calculators
- [ ] Internal linking mesh across all pages
- [ ] Submit sitemap-canada-bc.xml, sitemap-canada-ab.xml, etc.
- [ ] **Run keyword research script again** — discover new opportunities
- [ ] ⏳ **WAIT: Monitor indexing rate before US launch**

### Phase 4: US Launch — EXPAND WITH DATA (Weeks 5-8) → 4,585 pages
**GATE: Phase 3 must show >70% indexing across ALL Canadian segments**
- [ ] Check GSC: All Canadian sitemaps >70% indexed? → PROCEED
- [ ] Scrape US bankruptcy attorney directories (state bars)
- [ ] Seed top 500 US cities × 7 services = 3,500 pages
- [ ] **QA check: US pages have state-specific exemptions, local data, not generic**
- [ ] **Template swap test: California page vs Texas page — genuinely different content**
- [ ] **Write 20 more blog posts** (total: 50) — US-focused content
- [ ] **Write pillar guides #4-5**
- [ ] State hub pages (50 states)
- [ ] Submit per-state sitemaps to GSC
- [ ] **First Quarterly Debt Report** — becomes linkable asset
- [ ] ⏳ **WAIT: Monitor US indexing rate before full scale**

### Phase 5: Scale — FILL THE MAP (Weeks 9-12) → 8,100 pages
**GATE: Phase 4 US pages >70% indexed. No "Crawled - not indexed" spike.**
- [ ] Expand to top 1,000 US cities (500 more × 7 = 3,500 more pages)
- [ ] **Write 25+ more blog posts** (total: 75+)
- [ ] Province-specific + state-specific deep dives
- [ ] Provider outreach campaign (emails to LITs + lawyers)
- [ ] Stripe subscriptions live
- [ ] Backlink campaign launch

### Phase 6: Full Coverage (Weeks 13-16) → 15,150 pages
**GATE: Phase 5 >70% indexed. Clicks growing. No quality penalties.**
- [ ] Expand to all 2,000+ US cities
- [ ] Only publish city pages where we have real provider data (noindex the rest)
- [ ] **Write 25+ more blog posts** (total: 100+)
- [ ] Full internal linking pass across all 15K+ pages

### Phase 7: Content Dominance (Month 5+)
- [ ] **4 new articles per week** (ongoing)
- [ ] Monthly data updates
- [ ] Quarterly debt reports
- [ ] **Target: 200+ articles by month 6, 400+ by month 12**
- [ ] Pay-per-lead model activation
- [ ] Review system
- [ ] Provider analytics dashboard
- [ ] **Continuous GSC monitoring: if indexing drops, stop and fix before adding**

---

## Revenue Model

### Phase 1 (Month 1-3): Free + Subscription
- Free tier: Basic provider listing
- Verified ($49/mo): Enhanced profile, priority placement
- Premium ($149/mo): Featured in city pages, blog mentions, lead alerts
- Elite ($299/mo): Exclusive placement, branded content, analytics dashboard

### Phase 2 (Month 4-6): Add Performance Revenue
- Consumer-initiated contact tracking ($25-75/lead)
- Quote request routing
- Pay-per-call via Twilio ($50-150/call)

### Phase 3 (Month 6+): Scale
- US expansion at full scale
- Affiliate partnerships (credit counseling, consolidation lenders)
- Content licensing (white-label for credit unions, banks)

---

## Tech Stack
- **Framework:** Next.js (App Router)
- **Database:** PostgreSQL on OP3 (`debtrelief_db`)
- **Auth:** NextAuth v4
- **Payments:** Stripe
- **Hosting:** Coolify on OP3
- **Analytics:** GA4
- **Search Console:** GSC
- **AI Content:** Gemini API
- **Keyword Research:** Custom `keyword-research.js`
- **Repo:** `SayedB313/mycleardebt`

---

## Success Metrics (Gated Scaling)

| Metric | 30 days (Phase 2) | 60 days (Phase 3) | 90 days (Phase 4) | 6 months (Phase 6-7) | 12 months |
|--------|-------------------|-------------------|-------------------|---------------------|-----------|
| Total pages | 295 | 1,085 | 4,585 | 15,150+ | 15,500+ |
| Blog posts | 15 | 30 | 50 | 150+ | 400+ |
| GSC indexed rate | >70% | >70% | >70% | >70% | >80% |
| "Crawled not indexed" | <10% | <10% | <10% | <5% | <5% |
| Providers in DB | 1,000 | 3,000 | 5,000 | 10,000+ | 15,000+ |
| Claimed profiles | 0 | 10 | 50 | 200 | 500 |
| GSC Impressions | 500 | 5,000 | 50,000 | 500,000 | 2,000,000+ |
| GSC Clicks | 20 | 200 | 2,000 | 20,000 | 100,000+ |
| MRR | $0 | $0 | $500 | $3,000 | $10,000+ |
| Domain Authority | 0 | 5 | 10 | 20 | 35+ |
| Articles top 10 | 0 | 5 | 20 | 100+ | 300+ |
| Manual actions | 0 | 0 | 0 | 0 | 0 |

---

## Competitive Moat: Why Long-Form Wins

Most debt relief sites have:
- Thin listicles ("Top 5 Debt Relief Companies")
- Short FAQ pages (200-500 words)
- Generic advice without real data

We will have:
- **200+ articles at 2,500-4,000 words each** with real CAIRP/OSB/court data
- **Province-by-province and state-by-state specifics** (not "in most states...")
- **Interactive calculators** that keep people on-site
- **Quarterly data reports** that get cited
- **15,000+ programmatic pages** covering every city × service combination
- **FAQ schema on everything** — feeding AI Overviews and Featured Snippets

This is the same playbook as GetAHomePro but with **higher-value keywords ($35-62 CPC)** and **higher-value leads ($75-300 each)**.

---

## My Monitoring Loop (once launched)
Every session:
1. **Pull GSC** — clicks, impressions, position changes
2. **Check indexing health** — indexed vs submitted ratio per sitemap segment
3. **"Crawled - not indexed" audit** — if >10%, investigate which pages and why
4. **Scaling gate check** — are we >70% indexed? If yes → safe to publish next batch. If no → HOLD.
5. **Template swap test** (weekly) — randomly compare 3 city page pairs for content uniqueness
6. Check content pipeline — what's published, what's queued
7. Monitor provider claim conversions
8. Check which long-tail keywords are gaining traction → double down
9. Report to B with specifics + indexing health status

### Emergency Brakes
If any of these happen → **STOP all new page publishing immediately:**
- Manual action in GSC
- "Crawled - not indexed" exceeds 30%
- Impressions drop >50% week-over-week without external cause
- Core Web Vitals failing on programmatic pages
- Any sign of "Helpful Content" demotion

**Fix the root cause first, then resume scaling.**
