# Global Access Partners

A responsive React website for Global Access Partners, showcasing its market-entry, compliance, retail, and marketing support for beauty, fragrance, and personal care brands.

## Requirements

- Node.js (current LTS recommended)
- npm

## Getting started

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Vite prints the local URL after the server starts.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Run the TypeScript project build and create a production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project structure

```text
src/
  components/
    BrandsReady/        Brand-focused call to action
    ConnectedExpertise/ Expertise and partnership section
    ContactSection/     Contact form
    Footer/             Site footer
    FourPillars/        Services cards
    Hero/               Main hero section
    Navbar/             Responsive site navigation
    NewsletterSection/  Newsletter sign-up section
    RouteSection/       Market-entry introduction
  App.tsx               Page composition and shared modal
  index.css             Global styles and theme
public/                 Images, icons, and other static assets
```
## Forms

The contact form currently validates and saves its latest submission in the visitor's browser storage. The newsletter form displays a local confirmation state. Neither form is connected to a server or email-marketing service; connect the forms to the appropriate service before relying on them to receive submissions.
