# Contacts

This app uses React Router 7 Framework Mode, the successor to Remix 2, with React 18 and Vite 6.
The security update replaces the Remix classic compiler and removes unused dependencies,
including Wrangler, tar, undici, and ws. Use Node.js 22.13+ (or 20.19+ / 24+) to match the tooling requirements.

## Development

```sh
nvm use # or select a supported Node version manually
npm ci
npm run dev
```

Routes are defined in `app/routes.ts`. Vite configuration lives in `vite.config.ts`.

## Validation

```sh
npm run typecheck
npm run build
npm audit
```

## Production

```sh
npm run build
npm start
```

Deploy both `build/client/` and `build/server/` to a Node.js host, along with
`package.json`, `package-lock.json`, and production dependencies (`npm ci --omit=dev`).
The server entry point is `build/server/index.js`.
