# Solvyn AI — Company Deck

Public-facing company deck / landing page for **Solvyn AI 索紋科技有限公司**.

Built with Vite + React + TypeScript + Tailwind CSS, deployed to GitHub Pages.

**Live site:** https://noxus-lab.github.io/solvynai-company-deck/

## Local development

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
| --- | --- |
| `VITE_FORMSPREE_FORM_ID` | Formspree form ID (the hash after `/f/` in the endpoint URL) used by the contact form |

Note: any variable prefixed with `VITE_` is bundled into the client build and is therefore **public**. Do not put real secrets here — they belong on a backend.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and deploys it to GitHub Pages.

To enable on first setup:

1. In the repo on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. (Optional) If using a non-public Formspree form ID, add `VITE_FORMSPREE_FORM_ID` under **Settings → Secrets and variables → Actions**.

## Project structure

```
src/
  components/   UI components
  assets/       images used by components
public/         static files copied as-is to dist/
```

## License

Proprietary — © Solvyn AI 索紋科技有限公司
