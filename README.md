# Pipeline Visual Prototype (Next.js + TypeScript)

This is a minimal, production-friendly **Next.js App Router** project that renders the _Pipeline Visual Prototype_ for an income statement processing pipeline (Ingestion → Assisted Extraction → Canonical IR → Normalised → Validation → CSV).

The UI is built in **React + TypeScript**, with lightweight in-project UI components and `lucide-react` icons. It is ready to be deployed on **Vercel**.

---

## 1. Project structure (key files)

- `package.json` – dependencies and scripts
- `next.config.mjs` – Next.js config (App Router enabled)
- `tsconfig.json` – TypeScript configuration with `@/*` path alias
- `vercel.json` – optional Vercel build config (Next.js)
- `app/layout.tsx` – root layout
- `app/page.tsx` – home route that renders the pipeline prototype
- `Pipeline.tsx` – main pipeline visual prototype component (converted from `Pipeline.txt`)
- `components/ui/*` – small reusable UI primitives (card, button, tabs, etc.)

Browse to `/` to see the pipeline visualisation.

---

## 2. Local development

### Prerequisites

- Node.js **18+** (recommended LTS)
- npm or yarn (examples use npm)

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

You should see **“Pipeline Visual Prototype”** with tabs for:

- Pipeline Prototype
- IR Schema (Template)
- Extraction Output Schema
- Rule Packs (Templates)

The main prototype tab lets you step through each stage and inspect the corresponding JSON/CSV.

---

## 3. Build & run in production mode

```bash
npm run build
npm start
```

This runs a production build and starts Next.js on port `3000` by default.

---

## 4. Deploying to Vercel

This project is configured to work seamlessly with **Vercel**.

### Option A – Via Vercel Dashboard (recommended)

1. Push this project to a Git repository (GitHub/GitLab/Bitbucket).
2. Go to Vercel Dashboard and **Import Project**.
3. Select **Next.js** (should be auto-detected).
4. Use the default build & output settings:
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Output Directory: `.next`
5. Deploy.

### Option B – Via Vercel CLI

Install Vercel CLI:

```bash
npm install -g vercel
```

Then from the project root:

```bash
vercel
```

Follow the prompts to create a project and deploy. Subsequent deploys can be done with:

```bash
vercel --prod
```

---

## 5. Notes & customization

- The pipeline logic is **purely front-end / mock data** – no backend calls.
- The UI components in `components/ui` are intentionally lightweight; you can replace them with a full design system (e.g. shadcn/ui) later.
- If you don’t need `vercel.json`, you can remove it; Vercel will still auto-detect Next.js.

If you want additional routes (e.g. `/pipeline`), you can move the current `HomePage` content from `app/page.tsx` into `app/pipeline/page.tsx` and create a new homepage that links to it.


