# HOSANA GROUP ENGINEERING — site web corporate

Site vitrine bilingue (FR / EN) pour HOSANA GROUP ENGINEERING : ingénierie
maritime, dragage, travaux sous-marins, bathymétrie, construction navale, BTP et
services industriels — République du Congo & Afrique centrale.

## Stack

| Couche | Choix |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Langage | TypeScript |
| UI | Tailwind CSS v4 (design system dans `src/app/globals.css`) |
| i18n | next-intl (FR par défaut sans préfixe, `/en/…` avec slugs SEO dédiés) |
| Icônes | lucide-react |

## Démarrage

```bash
npm install
cp .env.example .env.local
npm run dev          # http://localhost:3000
```

Autres scripts : `npm run build`, `npm start`, `npm run lint`.

## Structure

```
src/
  app/[locale]/           Pages (accueil, à-propos, expertises[/slug],
                          équipements, secteurs, réalisations, documentation,
                          actualités, contact, devis)
  app/sitemap.ts          Sitemap FR/EN + hreflang
  app/robots.ts | manifest.ts
  i18n/                   routing (locales + pathnames localisés), navigation, request
  proxy.ts                middleware next-intl (Next 16 = « proxy »)
  content/                Couche de données typée (source : affiches) —
                          expertises, équipements, secteurs, partenaires, valeurs
  lib/site.ts             Constantes entreprise (nom, contacts, réseaux, NIU)
  components/             ui/ · layout/ · cards/ · blocks/ · forms/
messages/                 fr.json · en.json (chaînes d'interface)
reference/                Cahier des charges, proposition, logo, affiches (sources)
```

## Contenu = données, pas HTML

Tout le contenu métier vit dans `src/content/*` et `src/lib/site.ts`, en objets
`{ fr, en }` typés. Objectif : migration directe vers un CMS headless ou Supabase
sans toucher aux composants (cf. proposition §10–11).

## Nom retenu

**HOSANA GROUP ENGINEERING** — graphie du logo, confirmée par le client.
Les plaquettes commerciales portent « HOSANNA » (2 N) : à corriger sur les
futurs supports.

## ⚠️ À valider avec le client avant mise en ligne

Repris des affiches, **non confirmé** :

- **Nom de domaine** à réserver (`hosanagroupengineering.com`).
- **Téléphones** : plusieurs variantes sur les supports — un seul jeu retenu
  dans `src/lib/site.ts`.
- **E-mail professionnel** (`contact@…`) au lieu du Gmail actuel.
- **Chiffres clés** (« 30 collaborateurs », « 16+ domaines »…) — `src/lib/site.ts`.
- **Caractéristiques des équipements** : marquées « à confirmer » dans
  `src/content/equipements.ts` — aucun chiffre ne doit être inventé.
- **Logos clients / partenaires** : `authorized: false` dans
  `src/content/partenaires.ts` → masqués tant que l'autorisation écrite n'est pas
  obtenue. « Bolloré Transport & Logistics » : marque cédée à MSC, à retirer.
- **Photos réelles** de chantiers / équipements / réalisations (emplacements
  prévus dans les composants et `public/media/`). Ne pas présenter d'images
  d'illustration comme des réalisations.
- **Traductions EN** : à faire relire par un traducteur technique.

## Reste à faire (phase développement)

- Back-office / CMS (contenus, médias, rôles) — cf. proposition §11.
- Traitement serveur des formulaires **contact** et **devis** : validation
  (Zod), anti-spam (Cloudflare Turnstile), upload sécurisé des pièces jointes,
  accusé de réception e-mail, référence automatique, tableau de suivi.
- Études de cas / réalisations, documentation téléchargeable, actualités.
- Google Business Profile, analytics + suivi des conversions.
- Politique de confidentialité, mentions légales, conformité loi congolaise
  n° 29-2019 sur les données personnelles.
- Provisionnement des comptes cloud **au nom du client** (domaine, hébergeur,
  base de données, e-mail, dépôt Git).
