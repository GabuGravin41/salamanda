# SALAMANDA (v0.1)
### African Real Economy Asset Intelligence & Corporate Autopsy Terminal

> *"Inspired by BlackRock’s Aladdin, re-engineered for the Kenyan and African frontier."*

---

## 1. What is Salamanda?

Salamanda is a structured intelligence repository and living autopsy registry for the real economy of Kenya (and Africa). 

African capital allocators, HNWIs, diaspora investors, and institutions routinely struggle with extreme **information asymmetry and data opacity**:
* Capital either piles into passive government paper or speculative plot subdivisions because the real economy is perceived as an unnavigable black box.
* When landmark industrial enterprises fail (e.g. **Mobius Motors**, **Mumias Sugar**, **Nakumatt**, **Imperial Bank**, **ARM Cement**), the post-mortems are buried across fragmented court filings, Gazette notices, auction ads, and fading memory.
* High-potential underutilized assets (dormant sugar mills, textile lines, stranded paper mills) sit idle because no one has mapped the structural hindrances to capital revival.

**Salamanda solves this by logging:**
1. **Physical & Corporate Assets:** Active bellwethers, distressed industrial mills, and defunct ventures.
2. **Failure Autopsies:** Root-cause forensic classifications (Governance/Fraud, Debt Overleverage, Fiscal/Tax Policy, Demand Shocks, Political Interference).
3. **Spatial & Land Benchmarks:** Longitudinal land price evolution per acre across commercial, satellite, and Special Economic Zone (SEZ) corridors.
4. **100% Mandatory Public Source Citations:** Every claim, number, and event carries a clickable link to official public records (Kenya Gazette, Kenya Law eKLR, CBK bulletins, CMA filings). No unverified rumors or liability.

---

## 2. Zero-Cost Budget Architecture ($0.00 / month)

Built to run indefinitely on global free tiers until commercial scale:

| Component | Provider & Tier | Cost |
| :--- | :--- | :--- |
| **Web UI & APIs** | **Vercel** (Hobby Tier) | **$0.00** |
| **Database** | **Neon Serverless Postgres** (Free Tier: 0.5 GB + Connection Pooling) | **$0.00** |
| **Monorepo Build** | **Turborepo** + **pnpm workspaces** | **$0.00** |
| **Total Monthly Cost** | | **$0.00** |

---

## 3. Monorepo Structure

```text
salamander/
├── apps/
│   └── web/                   # Next.js 15 App Router Terminal UI & Serverless Endpoints
│       ├── src/app/
│       │   ├── page.tsx       # Macro Dashboard & Interactive Asset Explorer
│       │   ├── assets/        # Comprehensive Directory & [slug] Dossiers
│       │   ├── autopsies/     # Forensic Failure Post-Mortem Terminal
│       │   ├── land/          # Land Price / Acre Indices & Infrastructure Drivers
│       │   ├── infrastructure/# Sovereign Treasury Debt & PPP Concessions
│       │   ├── sources/       # Mandatory Public Sourcing Audit Trail
│       │   └── api/           # Vercel Serverless Endpoints (/api/assets, /api/stats)
│       └── src/components/    # Sleek dark-mode financial terminal UI components
├── packages/
│   ├── database/              # Neon Serverless Postgres client + Drizzle ORM + Resilient Seed Data
│   └── shared-types/          # Domain models, failure taxonomy enums, and citation interfaces
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

---

## 4. Getting Started Locally

### Prerequisites
* Node.js `v20+` or `v22+`
* `pnpm` (install via `npm i -g pnpm`)

### Installation & Run
```bash
# 1. Clone repository
git clone https://github.com/GabuGravin41/salamanda.git
cd salamander

# 2. Install dependencies across all workspaces
pnpm install

# 3. Build workspace packages
pnpm build

# 4. Start Next.js development server
pnpm --filter @salamanda/web dev
```

Open [http://localhost:3000](http://localhost:3000) to access the terminal.

---

## 5. Deploying to Vercel for Free

1. Push this repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com), click **Add New Project** and import `salamanda`.
3. Set **Root Directory** to `apps/web`.
4. (Optional) In **Environment Variables**, add:
   * `DATABASE_URL` = your Neon PostgreSQL connection string (e.g. `postgresql://user:pass@ep-xyz.neon.tech/salamanda?sslmode=require`)
   * *Note:* If `DATABASE_URL` is omitted, Salamanda automatically runs on its curated verified seed dataset with 0% downtime.
5. Click **Deploy**. Your terminal will be live at `https://salamanda.vercel.app` in under 90 seconds.

---

## 6. Sourcing & Forensic Taxonomy Guidelines

Every entry on Salamanda follows strict attribution tiers:
* `GAZETTE_OFFICIAL`: Published in the Kenya Gazette (Winding-up, receivership, statutory auctions).
* `COURT_RULING`: Kenya Law Reports (eKLR) judgements and insolvency causes.
* `REGULATORY_DISCLOSURE`: Central Bank of Kenya (CBK) or Capital Markets Authority (CMA) circulars.
* `PUBLIC_AUCTION_NOTICE`: Official statutory auctioneer notices in national press.
* `FINANCIAL_PRESS_PRIMARY`: Investigative reports from Business Daily, Daily Nation, or Reuters.
