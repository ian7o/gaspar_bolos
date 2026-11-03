# Gaspar Bolos

Marketing site for a Portuguese cake shop — a just-for-fun project made to practice the stack used here (React + TypeScript + Vite + React Router). Client-only app: static pages and images, no API, auth or database.

## What is this?

`gaspar_bolos` is a small multi-page website with a fixed header, hero banner, product panels and contact details. All visible copy is Portuguese.

- Known limits: the "Our history" link has no route and opens a blank page; layout is desktop-only, with no media queries.
- No environment variables or config files to fill in.

## Prerequisites

- **Node.js 18+** (`node --version`) — required by Vite 6
- **npm 9+** (bundled with Node 18+)
- A modern browser (Chrome / Firefox / Edge / Safari)

## How to install

```bash
git clone <REPO_URL> gaspar_bolos
cd gaspar_bolos/bolos
npm install
```

`npm install` is required — `node_modules/` is not committed.

## How to run locally

```bash
cd gaspar_bolos/bolos
npm run dev
```

Open <http://localhost:5173> (Vite prints the URL). If the port is taken:

```bash
npm run dev -- --port 3000
```

To check a production build locally:

```bash
npm run build     # type-check + bundle -> dist/
npm run preview   # serves dist/ at http://localhost:4173
```

There is **no Dockerfile** in this repo, so run the app with the npm commands above.

## Pages

| Route | Page |
|---|---|
| `/` and `/home` | Home — header, banner, three info panels, featured product |
| `/about-us` | "Quem somos nós?" copy with a Yes/No question |
| `/contact` | Opening hours, phone, e-mail, address |
| `/quiz` | One-joke page showing the cake photo |

Navigation is via the fixed header links. There are no API endpoints.

### The cake

![Chocolate cake with strawberries](bolos/public/bolo.jpeg)

The quiz page shows this photo (`bolos/public/bolo.jpeg`).

## Architecture

Stack: React + TypeScript, Vite, React Router, CSS Modules.

```text
bolos/    Vite app (pages, components, assets)
```

`bolos/` builds to a static `dist/` and routes are client-side.
