# Zibon Madbor — Cyberpunk Portfolio Website

A **production-ready, cyberpunk-themed portfolio** for a Full Stack MERN Developer & Cyber Security Expert, built with React + Vite + Tailwind CSS + Framer Motion.


---

## ✨ Features

| Feature | Details |
|---|---|
| **Matrix Rain** | Canvas-based falling katakana/number animation |
| **Glitch Text** | CSS glitch effect on the hero name |
| **Typing Animation** | Terminal typewriter cycling through roles |
| **Neon Progress Bars** | Animated skill bars (green / cyan / purple) |
| **Glassmorphism Cards** | Blurred, semi-transparent card panels |
| **Cyber Grid Background** | Animated CSS grid overlay |
| **Scanning Line** | Moving scan-line overlay effect |
| **Radar Animation** | Rotating radar sweep in About section |
| **Cursor Glow Trail** | Neon green cursor with lagging ring |
| **Smooth Scroll Nav** | Fixed navbar with active section detection |
| **Fully Responsive** | Mobile, tablet, desktop layouts |
| **SEO Optimized** | Meta tags, semantic HTML, descriptive titles |

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── MatrixRain.tsx        # Canvas matrix rain background
│   ├── GlitchText.tsx        # CSS glitch name animation
│   ├── TypingAnimation.tsx   # Terminal typewriter effect
│   ├── CursorGlow.tsx        # Neon cursor glow trail
│   ├── CyberNavBar.tsx       # Fixed sticky navigation
│   ├── HeroSection.tsx       # Hero with glitch name + CTA
│   ├── AboutSection.tsx      # Terminal bio + radar graphic
│   ├── SkillsSection.tsx     # Neon progress bar skill cards
│   ├── ProjectsSection.tsx   # Cyber dashboard project cards
│   ├── ServicesSection.tsx   # Service offering neon cards
│   ├── TimelineSection.tsx   # Education & experience timeline
│   ├── ContactSection.tsx    # Terminal contact form + socials
│   └── FooterSection.tsx     # Cyber-themed footer
├── pages/
│   └── Index.tsx             # Main page assembling all sections
├── index.css                 # Design system (all CSS tokens)
└── main.tsx                  # React entry point

tailwind.config.ts            # Extended with cyber color tokens
index.html                    # SEO meta tags + Google Fonts
```

---

## 🎨 Design System

### Color Palette

| Token | HSL | Hex |
|---|---|---|
| `--neon-green` (primary) | `152 100% 50%` | `#00FF9C` |
| `--neon-cyan` (secondary) | `191 100% 50%` | `#00D9FF` |
| `--neon-purple` (accent) | `258 90% 66%` | `#8B5CF6` |
| `--background` | `222 91% 5%` | `#020617` |
| `--foreground` | `220 13% 91%` | `#E5E7EB` |

### Typography
- **Headings:** [Orbitron](https://fonts.google.com/specimen/Orbitron) → `font-orbitron`
- **Code/Terminal:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) → `font-mono`
- **Body:** [Inter](https://fonts.google.com/specimen/Inter) → `font-inter`

---

## 🚀 Setup & Run Locally

### Prerequisites
- Node.js 18+ or Bun

**Add SPA redirect** — create `public/_redirects`:
```
/*    /index.html   200
```

---

## ⚙️ Environment Setup

No environment variables are required for the base portfolio.

If you add a contact form backend, create `.env`:
```env
VITE_EMAIL_ENDPOINT=https://your-api.com/contact
```

---

## 📋 Customization Checklist

- [ ] Update your name in `HeroSection.tsx` and `CyberNavBar.tsx`
- [ ] Update the bio text in `AboutSection.tsx`
- [ ] Adjust skill percentages in `SkillsSection.tsx`
- [ ] Add your real projects in `ProjectsSection.tsx`
- [ ] Update GitHub / LinkedIn / WhatsApp links in `ContactSection.tsx` and `FooterSection.tsx`
- [ ] Replace placeholder email with your real email address
- [ ] Add your CV PDF at `public/resume.pdf`
- [ ] Update `<meta>` tags in `index.html` with your real name and description

---

## 🛡️ Security Notes

- Contact form validates required fields client-side
- All external links use `rel="noopener noreferrer"` to prevent tab-napping
- No API keys or secrets committed to the repository

---

## 📦 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| React Router 6 | Client-side routing |

---

## 📄 License

MIT © Zibon Madbor 2024

*Built with ❤️ and cyber security in mind.*
