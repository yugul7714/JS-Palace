# JS Palace — Wedding & Events Venue Website

A fast, responsive, single‑page website for the JS Palace venue. Built with HTML/CSS/JS and ready to deploy on GitHub Pages.

## Preview locally

1. Open `index.html` in your browser.
2. Replace placeholder images in `assets/img/` and text as needed.

## Replace the Google Form

1. Create your Google Form with fields: Name, Phone, Email, Event Date, Guest Count, Message.
2. In Google Forms: More (⋮) → Get pre-filled link (optional), then Send → Embed `<>` → Copy the embed URL.
3. Edit `index.html` and replace the `src` in the Inquiry section iframe:

```html
<iframe src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" ...></iframe>
```

Tip: Keep the form short; make Phone and Date required.

## Update contact details

- Find the `Location` section in `index.html` and update:
  - Phone/WhatsApp links
  - Email address
  - Address text
  - Google Maps embed `src` with your exact location (Google Maps → Share → Embed).

## Images

- Place your photos in `assets/img/` and update gallery file names in `index.html`.
- Use WebP or compressed JPG. Aim for ≤ 250–300 KB each. Suggested names: `hero.jpg`, `photo1.jpg` … `photo6.jpg`.

## Customize colors & fonts

- Colors are defined in `styles.css` CSS variables at the top. Adjust `--brand`, `--text`, `--bg`.
- Fonts are Playfair Display (headings) and Inter (body). You can change via Google Fonts link in `index.html`.

## Deploy to GitHub Pages

1. Create a new public repository (recommended name: `js-palace`).
2. Push this folder to GitHub.
3. In the repo: Settings → Pages → Deploy from branch → `main` → `/ (root)` → Save.
4. Your site will be available at: `https://<username>.github.io/js-palace/`.

If you want the root domain `https://<username>.github.io/`, name your repo exactly `<username>.github.io` and move files to that repo.

### Custom domain (optional)

1. Buy a domain (e.g., `jspalace.in`).
2. In repo Settings → Pages → Custom domain: enter `www.jspalace.in` and Save.
3. Create DNS records at your domain provider:
   - CNAME for `www` → `<username>.github.io.`
   - A records for apex (optional) → GitHub Pages IPs: 185.199.108.153, .109.153, .110.153, .111.153
4. Commit a `CNAME` file at repo root containing only:

```
www.jspalace.in
```

5. Reopen Settings → Pages and enforce HTTPS.

## Analytics (optional)

- Add GA4: paste the tag into `index.html` before `</head>`.
- Track clicks on buttons by adding `data-` attributes and listening in `script.js`.

## License

You are free to use and modify this for JS Palace.
