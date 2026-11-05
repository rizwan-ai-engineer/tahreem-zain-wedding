# Tahreem Mukhtar & Zain | Wedding Website

A five-page, animated wedding website for GitHub Pages. All text and links are editable in the HTML files. No build tools, server, or subscriptions are required.

## Pages
- `index.html`: Home, wedding summary, countdown, RSVP call to action
- `story.html`: Our Story
- `events.html`: Rasm-e-Hina and Barat details
- `family.html`: Family names
- `rsvp.html`: WhatsApp RSVP (opens WhatsApp with a prepared message)

## Confirmed details
- Rasm-e-Hina: Thursday, **12 November 2026**, **Shakoori House**. Time **not supplied**.
- Barat: Friday, **13 November 2026**, **12:00 PM–4:00 PM**, **Grand Marquee**.
- RSVP WhatsApp: **+92 304 2844248**.
- Note: Event addresses are not provided, so no potentially wrong map links have been added.
- The Home countdown uses 12 November 2026, midnight Pakistan time as a placeholder until the Rasm-e-Hina start time is supplied.
- `gallery.html` has been removed, with the navigation updated across all five pages.

## Publish for free using GitHub Pages
1. Create a public GitHub repository (for example, `tahreem-zain-wedding`).
2. Upload the **contents of this folder** to the repository root, retaining `assets/`.
3. Go to **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**, `main`, `/(root)` and Save.
5. Your link will look like `https://YOUR-USERNAME.github.io/tahreem-zain-wedding/`.

## Customize
- Colors, fonts and animations are in `style.css`.
- WhatsApp RSVP, countdown and navigation are in `script.js`.
- The floral background is `assets/enchanted-garden.webp`.
- Names, dates, venues and family names are in the HTML pages.
- Keep asset paths relative to work on GitHub project sites.
- The display fonts use Google Fonts, with local fallbacks if unavailable.
- CSS respects `prefers-reduced-motion` for accessibility.
- The WhatsApp RSVP message only sends after the guest confirms it in WhatsApp. No responses are saved on the website itself.
