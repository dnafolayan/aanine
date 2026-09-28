# Repository Guidelines

## Project Structure

Aanine is a single-page React site built with TypeScript, Vite, and Tailwind CSS 4. Application composition lives in `src/App.tsx`; page sections and their content are in `src/components/PageSections.tsx`; the header and footer have separate component files. Shared styles and responsive rules are in `src/index.css`. Reusable browser behavior belongs in `src/hooks/`. Static files such as `robots.txt` belong in `public/`. `scripts/prerender.mjs` inserts server-rendered content into the production HTML for crawlability. There is currently no test directory or test suite.

## Development and Build Commands

- `npm install` installs the dependencies recorded in `package-lock.json`.
- `npm run dev` starts the local Vite development server.
- `npm run build` runs TypeScript project checks, builds the client and server bundles, and prerenders the page into `dist/`.
- `npm run preview` serves the production build locally; run `npm run build` first.

## Coding Style

Use TypeScript and React function components. Name components and types in PascalCase, hooks with a `use` prefix, and local variables/functions in camelCase. Keep page-specific content near its section component and shared design tokens in `src/index.css`. Follow the surrounding file’s formatting: TSX files currently use four-space indentation, while CSS uses two spaces. No formatter or linter is configured; avoid adding one without an agreed need. Use semantic HTML, labeled form controls, visible keyboard focus, and respect `prefers-reduced-motion` when changing interactions.

## Testing

No automated test framework or test script is configured. For a production-readiness check, run `npm run build`; this includes TypeScript checks and the prerender step. If adding tests, place them alongside the feature or in a clearly named `src/**/__tests__/` directory and document the chosen runner and command.

## Commits and Pull Requests

The repository has no Git commits yet, so no existing commit convention can be inferred. Use short imperative subjects (for example, `Improve mobile navigation`). Pull requests should explain user-visible changes, list build or manual checks performed, include screenshots for visual changes, and note any new configuration or dependencies.

## Configuration and Secrets

Copy `.env.example` into `.env.local` for local configuration. Set `VITE_WEB3FORMS_ACCESS_KEY` in local and deployment environments as needed. This Vite key is included in the client build by design; do not put private server credentials in `VITE_` variables. Keep local environment files out of Git and never commit private credentials or user data.
