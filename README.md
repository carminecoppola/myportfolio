# Carmine Coppola Portfolio

Portfolio personale sviluppato con Next.js, TypeScript e Tailwind CSS.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Struttura

- `src/data/profile.ts`: contenuti del portfolio (profilo, progetti, pubblicazioni, skill)
- `src/components/*`: componenti UI
- `src/app/*`: layout, pagina principale, stili globali
- `public/`: asset statici (CV, immagine profilo, PDF pubblicazioni)

## Avvio locale

```bash
npm install
npm run dev
```

Apri `http://localhost:3000`.

## Build produzione

```bash
npm run build -- --webpack
npm start
```

## Deploy su Vercel

```bash
npx vercel
```

Per produzione:

```bash
npx vercel --prod
```

## Note contenuti

- I paper sono serviti localmente da `public/publication/`.
- Il CV è in `public/CV_Coppola_Carmine.pdf`.
