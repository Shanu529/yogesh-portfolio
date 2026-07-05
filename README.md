# Yogesh Gariya — Portfolio Website

A modern, dark-themed portfolio website for an aspiring Data Analyst & Power BI
Developer. Built with plain HTML, CSS, and JavaScript — no frameworks, no build
step. Just open `index.html` in a browser.

## 📁 Project Structure

```
yogesh-portfolio/
├── index.html              # Main page — all sections live here
├── css/
│   └── style.css           # All styles (design tokens at the top of the file)
├── js/
│   ├── projects-data.js    # ⭐ Edit THIS file to add/update projects
│   └── script.js           # Handles nav menu, scroll reveal, project cards
└── assets/
    ├── resume.pdf          # Replace with your real resume
    └── projects/           # Project screenshots / images
        ├── telecom-churn.svg
        ├── hr-analytics.svg
        ├── bank-loan.svg
        └── patient-risk.svg
```

## ✏️ How to Edit Things

### Change colors, fonts, spacing
Open `css/style.css` and look at the **`:root`** section at the top
(under "1. DESIGN TOKENS"). Every color and font in the site is controlled
from there — change a value once and it updates everywhere.

### Add / update a project
Open `js/projects-data.js`. Each project is a JavaScript object like this:

```js
{
  title: "My New Dashboard",
  description: "What it does and why it matters.",
  image: "assets/projects/my-screenshot.png",
  video: "", // or a YouTube/Loom embed URL
  github: "https://github.com/yogicode519/my-repo",
  linkedin: "https://linkedin.com/in/yogesh-gariya",
  docs: "https://github.com/yogicode519/my-repo#readme",
  tech: ["Power BI", "DAX", "SQL"],
  status: "Completed",
}
```

Copy one of the existing objects, paste it inside the `projectsData` array,
and update the fields. The card is generated automatically — no HTML editing
needed.

To use your **own dashboard screenshots**, drop image files (PNG/JPG) into
`assets/projects/` and update the `image` path. The four `.svg` files included
are placeholder dashboard mockups — swap them out for real Power BI screenshots
whenever you're ready.

### Update the hero, about, skills, resume, or contact text
All of that content lives directly in `index.html`, grouped into clearly
labeled `<section>` blocks with comments. Each section is self-contained, so
you can edit text without affecting other parts of the page.

### Replace the resume
Swap `assets/resume.pdf` with your real resume, keeping the same filename —
the "Download Resume" button will continue to work automatically.

### Make the contact form actually send emails
The form in the Contact section is front-end only right now (it just shows a
"Message Sent" confirmation). To make it functional:
1. Sign up for a free form service like [Formspree](https://formspree.io) or
   [EmailJS](https://www.emailjs.com).
2. Follow their setup instructions to get an endpoint or API key.
3. Update the `<form>` tag and `script.js` submit handler accordingly.

## 🚀 Running Locally

Just open `index.html` in any modern browser — no installation required.

For the best experience (so relative paths and fonts load correctly), you can
also serve it with a simple local server:

```bash
# Python 3
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## 🌐 Deploying

This site is static, so it can be deployed for free on:
- **GitHub Pages** — push this folder to a repo and enable Pages in settings.
- **Netlify** or **Vercel** — drag and drop the folder, or connect your GitHub repo.

## 🎨 Design Notes

- **Theme:** Dark UI inspired by analytics dashboards, with cyan (`#22d3ee`)
  and purple (`#a78bfa`) accents.
- **Fonts:** Space Grotesk (headings), Inter (body text), JetBrains Mono
  (labels, tags, and data — for that "dashboard" feel).
- **Project cards** are styled like dashboard widgets (window header + dots),
  tying the visual language back to Power BI dashboard design.
- Animations are minimal and intentional: a subtle scroll-reveal and gentle
  hover lifts — nothing flashy.
