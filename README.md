# Career Launch Platform

Career Launch is a public video and sponsor-booth platform for Ontario students, families, and educators. The December 1–5, 2025 event has ended, but its 27 career sessions and booth resources remain available on demand.

## Current experience

- Browse the complete schedule, session pages, trailers, booths, and resources without an account.
- Select **Watch Session** from a session list, trailer, booth, or detail page to open the Vimeo player directly.
- No registration form is shown and no viewer profile, school, class, or grade details are collected.
- Google Analytics records aggregate product usage such as session clicks, playback starts, progress, completions, trailer interactions, and booth engagement.
- Navigation from a booth to its related session preserves a session-only “Back to Booth” context.

## Technology

- Next.js 15 App Router and React 18
- TypeScript
- Tailwind CSS
- Vimeo Player SDK
- Google Analytics 4
- Jest and Testing Library
- Vercel hosting

Session and booth content is stored in `data/sample-sessions.ts` and `data/sample-booths.ts`. There is no active application database integration.

## Development

```bash
npm install
npm run dev
npm run type-check
npm test
npm run build
```

The development server is available at [http://localhost:3000](http://localhost:3000).

## Key routes

- `/` — homepage
- `/sessions` — conference and alphabetical session views
- `/sessions/[slug]` — session details, trailer, and full Vimeo player
- `/booths` — sponsor expo hall
- `/booths/[slug]` — booth details and related session links
- `/stats` — historical event reporting

## Direct playback flow

Cross-page Watch actions store the requested session slug in `sessionStorage` under `play_full_session`, then navigate to the session detail page. The detail player consumes and clears an exact slug match after hydration, constructs the Vimeo URL with `autoplay=1`, and loads the iframe. If autoplay is blocked by browser policy, the Vimeo controls remain available.

The Vimeo SDK emits GA events only after actual playback begins and at the existing progress/completion milestones. It does not collect the former educator/student registration fields.

## Brand and accessibility

- Official myBlueprint palette: Navy `#22224C`, Blue `#0092FF`, Light Blue `#C6E7FF`, Off-White `#F6F6FF`
- Museo Sans with Open Sans fallback
- Mobile-first layouts and visible keyboard focus
- Semantic headings, accessible labels, and 44px minimum touch targets
- Reduced-motion preferences should be respected

## Documentation

`CLAUDE.md` contains the current repository working guide. Files under `Specs/` and `design-documentation/` describe the original event build and may include historical registration requirements. `MODAL_IMPLEMENTATION_SUMMARY.md` and `TESTING_GUIDE.md` are explicitly marked as historical.
