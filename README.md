# 🧑‍💻 Neel Patel — Frontend Developer Portfolio

> A modern, responsive portfolio website showcasing UI/UX design and frontend development work — built with React 18, TypeScript, and Tailwind CSS.

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.9-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://neelpatel-frontend-developer.vercel.app/)

**Live Site:** [neelpatel-frontend-developer.vercel.app](https://neelpatel-frontend-developer.vercel.app/)

---

## 1. Project Title

**Neel Patel — Frontend Developer Portfolio**

A personal portfolio website presenting dual expertise as a UI/UX Designer and Frontend Developer, featuring selected projects, interactive demos, and multiple communication channels.

---

## 2. Description

This portfolio is a fully responsive, production-grade single-page application built with React 18, TypeScript, and Tailwind CSS. It showcases real frontend projects, web templates, and UI/UX design work — all wrapped in a polished interface with smooth Framer Motion animations, dark/light theme support, and accessible Radix UI components.

Designed to serve both recruiters and fellow developers — clean enough to impress, detailed enough to be useful.

---

## 3. Features

- 🎭 **Dual Role Showcase** — Presents both UI/UX design and frontend development work in a single site.
- ⚡ **Interactive Dopamine Menu** — A built-in interactive application demo embedded in the portfolio.
- 🗂️ **Selected Projects & Web Templates** — Curated project cards with links and tech details.
- 🌗 **Dark / Light Theme** — Full theme toggle support with smooth transitions.
- 🎞️ **Framer Motion Animations** — Smooth page transitions, scroll reveals, and hover effects.
- 📱 **Fully Responsive** — Optimized layout across mobile, tablet, and desktop.
- ♿ **Accessible UI** — Built on Radix UI primitives for ARIA compliance and keyboard support.
- 📬 **Multiple Contact Channels** — Easy ways to reach out directly from the site.

---

## 4. Technologies

| Category       | Technology                                                  |
|----------------|-------------------------------------------------------------|
| Framework      | [React 18.3.1](https://react.dev/) with TypeScript          |
| Language       | [TypeScript](https://www.typescriptlang.org/) 5.x           |
| Build Tool     | [Vite 4.4.9](https://vitejs.dev/) with SWC plugin           |
| Styling        | [Tailwind CSS 3.4](https://tailwindcss.com/) (custom config)|
| Animations     | [Framer Motion 11](https://www.framer.com/motion/)          |
| UI Components  | [Radix UI](https://www.radix-ui.com/) primitives            |
| Icons          | [Lucide React 0.263](https://lucide.dev/)                   |
| Deployment     | [Vercel](https://vercel.com/)                               |

### Key Dependencies

```json
{
  "react": "^18.3.1",
  "framer-motion": "^11.11.17",
  "tailwindcss": "^3.4.17",
  "@radix-ui/react-*": "Latest",
  "lucide-react": "^0.263.1",
  "vite": "^4.4.9"
}
```

---

## 5. Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v16.0.0** or higher
- npm or yarn

Verify your versions:

```bash
node -v
npm -v
```

---

## 6. Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/neelpatel6262/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. *(Optional)* **Preview the production build**

   ```bash
   npm run preview
   ```

---

## 7. Usage

- Start the dev server with `npm run dev` — opens at `http://localhost:5173`.
- Browse the portfolio sections: intro, selected projects, web templates, and contact.
- Toggle between dark and light themes using the theme switcher.
- Interact with the Dopamine Menu demo embedded on the site.
- Use the contact section to reach out via the available channels.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production (output: dist/)
npm run preview  # Preview production build locally
```

### Customization

1. Update personal information inside `src/components/`.
2. Modify theme colors and font config in `tailwind.config.js`.
3. Replace project content in the relevant component files.
4. Update contact details in the Contact component.

---

## 8. Keyboard Shortcuts

This is a portfolio/marketing site and does not include custom keyboard shortcuts. All Radix UI components support full keyboard navigation out of the box (tab, enter, escape, arrow keys).

---

## 9. Project Structure

```text
portfolio/
├── public/                     # Static assets (favicon, OG images)
├── src/
│   ├── components/
│   │   ├── figma/              # Figma-exported or Figma-related components
│   │   └── ui/                 # Reusable Radix-based UI components
│   ├── guidelines/             # Project-level design guidelines
│   ├── styles/                 # Global CSS and Tailwind entry
│   └── App.tsx                 # Root component and layout
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite + SWC configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Scripts and dependencies
```

---

## 10. Development Process

- **Design Reference:** Defined the dual-role visual identity (designer + developer) and planned sections around a clean, content-first layout.
- **Project Setup:** Bootstrapped with Vite + React + TypeScript + SWC for the fastest possible dev experience and type-safe codebase.
- **Component Architecture:** Built reusable UI primitives on top of Radix UI, styled with Tailwind utility classes and a custom config.
- **Animations:** Integrated Framer Motion for scroll-reveal effects, page transitions, and micro-interactions without sacrificing performance.
- **Theme System:** Implemented dark/light mode with Tailwind's `dark:` variant and a global theme toggle.
- **Responsive Design:** Mobile-first layout using Tailwind's responsive breakpoints across all sections.
- **Deployment:** Connected GitHub repo to Vercel for automatic production deployments on every push to `main`.

---

## 11. What I Learned

- Building a fully type-safe React application with **TypeScript** from the ground up.
- Using **Framer Motion** effectively — scroll-triggered animations, layout transitions, and stagger effects.
- Composing accessible, unstyled components with **Radix UI** and styling them with Tailwind without fighting the library.
- Configuring **Vite with the SWC plugin** for faster builds compared to Babel-based setups.
- Setting up a **custom Tailwind design system** — extending colors, fonts, and spacing tokens.
- Structuring a component library (`/ui`) that stays decoupled from page-specific logic.
- Thinking about portfolio UX from a **recruiter and peer developer** perspective simultaneously.

---

## 12. Overall Growth

| Aspect            | Before                              | After                                         |
|-------------------|-------------------------------------|-----------------------------------------------|
| TypeScript        | Basic types only                    | Confident with interfaces, generics, and props |
| Animation         | CSS transitions only                | Framer Motion scroll, layout, and stagger      |
| Component Design  | Self-styled from scratch            | Radix UI primitives + Tailwind design system   |
| Build Tooling     | CRA / basic Vite                    | Vite + SWC with optimized config              |
| Portfolio Quality | Simple static HTML page             | Production-grade React SPA on Vercel          |
| Design-Dev Bridge | Separate workflows                  | Figma → code conversion integrated            |

---

## 13. Future Enhancements

- [ ] 📝 **Blog / Writing section** — MDX-powered posts directly in the portfolio.
- [ ] 🔍 **Project filter / search** — Filter projects by category or tech stack.
- [ ] 🌐 **i18n support** — Multi-language version for broader reach.
- [ ] 📊 **Analytics** — Vercel Analytics or Umami for visitor insights.
- [ ] 🖼️ **Case studies** — Deep-dive pages for selected projects with process breakdowns.
- [ ] 🎨 **Theme customizer** — Let visitors pick an accent color.
- [ ] 📱 **PWA support** — Installable portfolio with offline caching.
- [ ] 🧪 **Tests** — Unit and accessibility tests with Vitest and Axe.

---

## 14. Known Issues / Limitations

- No blog or case study pages yet — project descriptions are summary-level only.
- No analytics integrated — visitor data is not currently tracked.
- Content is hardcoded in components — no CMS or external data source.
- No PWA or offline support.

---

## 15. Contributing

This is a personal portfolio — but you're welcome to fork it as a template for your own!

1. **Fork** the repository.
2. **Create** a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit** and push your changes:

   ```bash
   git commit -m "Add: your feature description"
   git push origin feature/your-feature-name
   ```

4. **Open a Pull Request** describing what you changed.

---

## 16. License

This project is open source under the [MIT License](https://opensource.org/licenses/MIT) — free to use as a portfolio template for personal or commercial purposes.

---

## 17. Contact

- **Name:** Neel Patel
- **Email:** patelneel392003@gmail.com
- **Portfolio:** [neelpatel-frontend-developer.vercel.app](https://neelpatel-frontend-developer.vercel.app/)
- **GitHub:** [@neelpatel6262](https://github.com/neelpatel6262)
- **LinkedIn:** [linkedin.com/in/uxui-designer-devloper](https://www.linkedin.com/in/uxui-designer-devloper/)

---

## 18. Acknowledgments

- [React](https://react.dev/) — UI library powering the component architecture.
- [Vite](https://vitejs.dev/) — Lightning-fast build tool with SWC support.
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling framework.
- [Framer Motion](https://www.framer.com/motion/) — Production-ready animation library for React.
- [Radix UI](https://www.radix-ui.com/) — Accessible, unstyled UI primitives.
- [Lucide React](https://lucide.dev/) — Clean, consistent icon set.
- [Vercel](https://vercel.com/) — Seamless deployment with automatic CI/CD.

---

## 19. Footer

| Field          | Info                             |
|----------------|----------------------------------|
| Project Status | Active / Live                    |
| Version        | 1.0.0                            |
| Deployment     | Vercel (auto-deploy from `main`) |

---

## 20. Checklist

- [x] React 18 + TypeScript + Vite + SWC setup
- [x] Tailwind CSS with custom design system config
- [x] Framer Motion scroll and transition animations
- [x] Radix UI accessible component primitives
- [x] Dark / light theme toggle
- [x] Dual role showcase (UI/UX + Frontend Dev)
- [x] Interactive Dopamine Menu demo
- [x] Selected projects and web templates section
- [x] Fully responsive layout (mobile, tablet, desktop)
- [x] Multiple contact channels
- [x] Deployed to Vercel with CI/CD
- [ ] Blog / case study pages
- [ ] Project filter / search
- [ ] Analytics integration
- [ ] PWA support
- [ ] Unit and accessibility tests
