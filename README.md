# JobHuntly

A job board UI built with [Next.js](https://nextjs.org) App Router, React, TypeScript, and Tailwind CSS. The screens follow the [Jobhuntly Job Board UI Kit](https://www.figma.com/community/file/1159498580274796865/free-jobhuntly-job-board-portal-web-and-mobile-ui-kit) (Epilogue, violet `#4640DE`).

This is a front-end prototype: copy and listings are static, and there is no real authentication or API.

## What’s included

- **Landing** (`/`) — search hero, categories, featured and latest jobs
- **Browse companies** (`/companies`) — company search, recommended cards, category grid
- **Auth** (`/login`, `/signup`, `/forgot-password`) — UI-only forms; Google buttons are inert
- **Company dashboard** (`/dashboard`) — recruiter shell with sidebar and these pages:
  - Overview statistics
  - Messages, company profile, applicants, job listing, post a job, schedule, settings, help

Login and Sign Up submit to `/dashboard`. Job and company detail links that are not built yet stay as `#`.

## Stack

- Next.js 16 (App Router) and React 19
- TypeScript
- Tailwind CSS v4
- `next/font` for Epilogue

Source lives under `src/`. Static kit assets are in `public/landing/`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```
