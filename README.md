# Tahreem Mukhtar & Zain | One-page scrolling wedding invitation

All invitation sections now appear one after another in **index.html**, so guests can simply scroll down. The navigation jumps to the corresponding section. The old `story.html`, `events.html`, `family.html` and `rsvp.html` redirect to their sections for previously shared links.

## Sections
Home → Our Story → Wedding Details → Countdown → Our Families → WhatsApp RSVP.

## Wedding details
- **Rasm-e-Hina:** 12 November 2026, Shakoori House (start time not yet supplied).
- **Barat:** 13 November 2026, **12 PM–4 PM**, Grand Marquee.
- **WhatsApp RSVP:** +92 304 2844248.
- All ten supplied family names are included.
- No Gallery section.
- Countdown targets 12 November 2026, 00:00 Pakistan time as a placeholder until the Rasm-e-Hina start time is confirmed.

## Deploy this update to your existing GitHub Pages site

1. Extract the ZIP.
2. Copy all its files and the `assets` folder **into your existing VS Code folder** `tahreem-zain-Wedding` and choose to replace existing files. Do not overwrite or delete the `.git` folder.
3. Run these commands in the existing VS Code terminal:

```powershell
git add .
git commit -m "Make wedding invitation one continuous scrolling page"
git push origin main
```

4. Visit https://rizwan-ai-engineer.github.io/tahreem-zain-wedding/ once GitHub Pages deploys the update. A hard reload (Ctrl+Shift+R) may be required.

No npm, backend or paid hosting required. WhatsApp opens a prefilled message; guests send it themselves. Decorative animations respect reduced-motion preferences.
