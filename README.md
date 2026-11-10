# ForgeInsight — Official Website

A modern, responsive, and design-focused web experience for ForgeInsight, showcasing AI-powered solutions, intelligent automation, and technology-driven digital services.

This repository contains the frontend implementation of the ForgeInsight website, including its user interface, reusable components, styling, layouts, and interactive elements.

---

## 1. Project Overview

**Project Name:** ForgeInsight Website  
**Project Type:** Corporate Website / Digital Product  
**Development Area:** Frontend Development & UI/UX Engineering  
**Status:** In Development  
**Repository:** ForgeInsight Website

### About ForgeInsight

ForgeInsight is a technology-focused initiative building AI-powered solutions that automate manual workflows, improve operational efficiency, unlock actionable insights, and accelerate business growth.

The website is designed to establish a strong digital identity, communicate the company's capabilities, showcase its solutions, and provide visitors with an intuitive experience.

### Project Objectives

- Establish a consistent digital brand identity.
- Present company services and technical capabilities.
- Deliver a clean, intuitive, and responsive user interface.
- Maintain reusable and scalable frontend components.
- Create a foundation for backend and API integration.
- Ensure consistency across desktop, tablet, and mobile layouts.

---

## 2. Technology Stack

| Technology | Purpose |
|---|---|
| React | Component-based UI development |
| TypeScript | Type safety and maintainable code |
| Vite | Frontend development and build tooling |
| CSS | Styling and visual implementation |
| PNPM | Package and dependency management |
| Git | Version control |
| GitHub | Source code management and collaboration |

Additional libraries and dependencies will be documented as the implementation evolves.

---

## 3. Project Structure

```text
ForgeInsight-Website/
│
├── .figma/
│
├── public/
│
├── src/
│   ├── components/
│   ├── hooks/
│   ├── imports/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── .gitignore
├── .gitattributes
├── .mise.toml
│
├── AGENTS.md
├── CLAUDE.md
├── README.md
│
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── vite.config.ts
```

### Directory Description

| Directory / File | Description |
|---|---|
| `src/components/` | Reusable UI components and interface elements |
| `src/hooks/` | Custom React hooks |
| `src/imports/` | Imported design resources and implementation files |
| `src/App.tsx` | Main application component |
| `src/index.css` | Global styles and shared styling rules |
| `src/main.tsx` | Application entry point |
| `public/` | Static assets served directly by Vite |
| `.figma/` | Project-related Figma resources, if applicable |
| `package.json` | Project dependencies and available scripts |
| `pnpm-lock.yaml` | Dependency lockfile |
| `vite.config.ts` | Vite configuration |
| `tsconfig.json` | TypeScript configuration |

---

## 4. UI/UX Design Standards

The frontend follows a consistent design and implementation approach.

### Design Principles

- Minimal and purposeful visual design.
- Consistent spacing and alignment.
- Clear visual hierarchy.
- Strong typography and readability.
- Consistent component behavior.
- Accessible interface elements.
- Responsive layouts.
- Consistent interaction patterns.

### Design Consistency

All new components and interface sections should maintain consistency with the existing website design.

Contributors should avoid introducing unrelated visual styles, inconsistent typography, unnecessary animations, or conflicting color systems.

### Responsive Design

The website should support:

- Desktop screens.
- Laptop screens.
- Tablets.
- Mobile devices.

Responsive implementations should preserve content hierarchy, readability, navigation usability, and layout consistency.

### Accessibility

UI implementations should consider:

- Semantic HTML elements.
- Appropriate heading hierarchy.
- Keyboard navigation.
- Visible focus states.
- Sufficient color contrast.
- Descriptive labels for interactive elements.
- Alternative text for meaningful images.

---

## 5. Component Architecture

The project uses React's component-based architecture.

Reusable components should be preferred over duplicated UI implementations.

### Component Development Guidelines

1. Keep components modular and maintainable.
2. Use meaningful component and file names.
3. Maintain consistent TypeScript conventions.
4. Separate reusable components from page-specific implementations.
5. Avoid unnecessary duplication.
6. Keep styling consistent across components.
7. Ensure components work across supported screen sizes.

### Naming Conventions

- Components: `PascalCase`
- Hooks: `camelCase`, beginning with `use`
- Variables: `camelCase`
- CSS classes: Consistent descriptive naming
- Constants: `UPPER_SNAKE_CASE` where appropriate

Example:

```text
components/
├── Navbar.tsx
├── Footer.tsx
├── HeroSection.tsx
└── ServiceCard.tsx
```

---

## 6. Installation and Local Development

### Prerequisites

Ensure the following tools are installed:

- Node.js
- PNPM
- Git
- Visual Studio Code (recommended)

### Clone the Repository

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd ForgeInsight-Website
```

### Install Dependencies

```bash
pnpm install
```

### Start Development Server

```bash
pnpm dev
```

The local development server will display its address in the terminal, typically:

```text
http://localhost:5173
```

### Production Build

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

---

## 7. Git Workflow and Collaboration

This repository uses Git for version control and GitHub for collaborative development.

### Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Stable production-ready code |
| `frontend` | Frontend and UI implementation |
| `backend` | Backend development and integration |
| `integration` | Combined frontend and backend implementation |

The branch strategy should be coordinated with the repository maintainers.

### Commit Message Convention

Use descriptive commit messages.

Examples:

```bash
git commit -m "feat: implement responsive navigation"
git commit -m "fix: resolve mobile layout issue"
git commit -m "style: refine hero section typography"
git commit -m "refactor: modularize service components"
git commit -m "docs: update project documentation"
```

### Contribution Workflow

1. Pull the latest changes.
2. Create or switch to the appropriate working branch.
3. Implement the assigned changes.
4. Test the implementation locally.
5. Commit changes with descriptive messages.
6. Push the branch to GitHub.
7. Create a Pull Request.
8. Review and resolve requested changes.
9. Merge after approval.

---

## 8. UI Implementation Guidelines

Before submitting any frontend changes, verify the following:

### Visual Quality

- Layout matches the approved design direction.
- Typography is consistent.
- Spacing and alignment are accurate.
- Colors follow the established design system.
- Images and assets are properly optimized.

### Functionality

- Navigation links work correctly.
- Buttons perform their intended actions.
- Interactive elements respond appropriately.
- Forms have appropriate validation.
- No broken links or missing assets.

### Responsiveness

- Desktop layout is functional.
- Tablet layout is functional.
- Mobile layout is functional.
- No unintended horizontal overflow.
- Content remains readable at different viewport sizes.

### Code Quality

- No unnecessary duplicated components.
- No unused imports or variables.
- TypeScript errors are resolved.
- No unexpected console errors.
- Build completes successfully.

---

## 9. Backend Integration

The frontend is designed to support integration with the backend services.

Potential integration areas include:

- Contact form submissions.
- Service enquiry handling.
- API-driven content.
- Dynamic project or portfolio information.
- Authentication, if required.
- Third-party service integrations.

### Integration Guidelines

- Keep API communication separate from presentation components where practical.
- Use environment variables for configuration.
- Never expose private API keys or credentials.
- Handle loading, success, and error states.
- Validate user inputs.
- Coordinate API contracts between frontend and backend contributors.

Environment variables should be documented using a `.env.example` file where required.

Never commit actual `.env` files containing credentials.

---

## 10. Build and Deployment

The project uses Vite for production builds.

Generate the production-ready files using:

```bash
pnpm build
```

The generated output is available in:

```text
dist/
```

The production build can be deployed using a compatible hosting platform.

Deployment configuration, production environment variables, and domain settings should be maintained separately from the frontend source code.

---

## 11. Repository Maintenance

To maintain the quality of this repository:

- Keep dependencies updated responsibly.
- Preserve the PNPM lockfile.
- Avoid committing generated build files.
- Exclude `node_modules/`.
- Never commit API keys or credentials.
- Keep documentation updated.
- Remove unused code and assets when appropriate.
- Review changes before merging into the main branch.

---

## 12. Project Status

**Current Phase:** Frontend Development

| Area | Status |
|---|---|
| Frontend architecture | In Development |
| UI implementation | In Development |
| Responsive optimization | To Be Verified |
| Component refinement | In Development |
| Backend integration | Pending |
| Production deployment | Pending |

Project status should be updated as development progresses.

---

## 13. License and Usage

This repository is maintained for the development of the official ForgeInsight website.

Unless otherwise specified, the source code, design assets, branding elements, and associated materials are intended for authorized project contributors.

No external redistribution or commercial reuse is permitted without appropriate authorization from the project owners.

---

**ForgeInsight**  
AI-Powered Solutions. Intelligent Automation. Digital Innovation.