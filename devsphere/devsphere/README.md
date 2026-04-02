# Devsphere — Developer Community Platform

A modern dark-themed Next.js website for the Devsphere developer community.

## Pages
- `/` — Home / Landing page
- `/projects` — Projects with search & filter
- `/events` — Events (upcoming + past) with filter
- `/community` — Community Builds (monthly open-source projects)
- `/promote-event` — Promote Event submission form

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS-in-JS (inline styles + global CSS)
- **Fonts**: Syne (display) + DM Sans (body) via Google Fonts

---

## 🚀 Deploy to Vercel (Recommended)

### Step 1 — Push to GitHub
1. Go to [github.com](https://github.com) → New Repository → name it `devsphere`
2. Upload all these project files (drag & drop the folder)
3. Click **Commit changes**

### Step 2 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**
3. Select your `devsphere` repository
4. Click **Deploy** — Vercel auto-detects Next.js

Your site will be live at `https://devsphere.vercel.app` in ~1 minute!

---

## 💻 Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open in browser
# http://localhost:3000
```

---

## 📝 How to Add/Edit Data

All data is in one file: `lib/data.ts`

### Add a new project:
```ts
// In lib/data.ts → PROJECTS array, add:
{
  icon: "🚀",
  title: "Your Project Name",
  desc: "Short description of the project.",
  tags: ["React", "Node.js"],
  category: "Web",          // AI/ML | Web | Mobile | DevTools | Open Source
  stars: 100,
  contributors: 3,
  status: "open",           // open | active
  github: "https://github.com/your-repo",
},
```

### Add a new event:
```ts
// In lib/data.ts → EVENTS array, add:
{
  month: "Jun", day: "15",
  title: "Your Event Name",
  org: "Your College / Org",
  type: "Hackathon",        // Hackathon | Workshop | Competition | Webinar
  location: "Chennai",
  mode: "Hybrid",           // Online | In-person | Hybrid
  prize: "₹1,00,000",       // null if no prize
  spots: "200 spots",
  upcoming: true,           // true = upcoming, false = past
},
```

### Add a community build:
```ts
// In lib/data.ts → COMMUNITY_BUILDS array, add:
{
  month: "May 2026",
  icon: "🌟",
  title: "Project Name",
  desc: "Full description of the build.",
  tags: ["React", "Firebase"],
  contributors: 10,
  colleges: 4,
  stars: 500,
  featured: false,
  demo: "https://demo-link.com",
  github: "https://github.com/your-repo",
},
```
> **Note:** The first item in COMMUNITY_BUILDS is shown as the featured "Build of the Month".

---

## 📁 Project Structure

```
devsphere/
├── app/
│   ├── globals.css          ← Theme variables, fonts, animations
│   ├── layout.tsx           ← Root layout with Navbar + Footer
│   ├── page.tsx             ← Home page
│   ├── projects/page.tsx    ← Projects page
│   ├── events/page.tsx      ← Events page
│   ├── community/page.tsx   ← Community Builds page
│   └── promote-event/page.tsx ← Promote Event form
├── components/
│   ├── Navbar.tsx           ← Top navigation
│   └── Footer.tsx           ← Footer
├── lib/
│   └── data.ts              ← All projects, events & community build data
├── package.json
├── next.config.js
└── tsconfig.json
```
