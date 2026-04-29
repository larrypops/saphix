# SAPHIX SERVICE - Next.js

Site vitrine SAPHIX SERVICE migré vers **Next.js App Router** avec une direction visuelle centrée sur le Cameroun.

## Stack

- Next.js (App Router)
- React 19
- Tailwind CSS v4
- TypeScript

## Lancer en local

1. Installer les dépendances:
   ```bash
   npm install
   ```
2. Lancer le serveur de développement:
   ```bash
   npm run dev
   ```
3. Ouvrir [http://localhost:3000](http://localhost:3000)

## Build de production

```bash
npm run build
npm run start
```

## Déploiement Vercel

- Framework preset: **Next.js**
- Root directory: `/`
- Build command: `npm run build`
- Output: automatique (Next.js)
- En cas d'ancien cache Vercel: relancer un déploiement avec cache vidé.

## Structure utile

- `src/app/layout.tsx`: layout global + métadonnées + favicon
- `src/app/page.tsx`: page principale
- `src/data/site-content.json`: contenu éditable (services, destinations, contact)
- `public/images`: logo + visuels générés (contexte camerounais)

