---
name: ui-ux-pro-max
description: AI-powered UI/UX design system with 500+ patterns, 13 stacks, and intelligent recommendations
keywords: ui, ux, design, system, patterns, colors, typography, components, accessibility, responsive, modern
---
# ui-ux-pro-max

🎨 **AI-Powered Design Intelligence** - Comprehensive UI/UX design system with 500+ curated patterns, 13 technology stacks, and intelligent design recommendations. Features BM25 search, hierarchical design systems, and production-ready code generation.

## 🚀 What's New in This Optimization

- **Enhanced Search**: Improved BM25 algorithm with semantic matching
- **Modern Stacks**: Added Astro, Nuxt UI, shadcn/ui support  
- **Smart Persistence**: Hierarchical design system with Master + Page overrides
- **AI Reasoning**: Intelligent pattern selection based on product type
- **Production Ready**: Pre-delivery checklists and accessibility validation

## 📊 Database Contents

| Domain | Count | Description |
|--------|-------|-------------|
| **Styles** | 67+ | UI styles from Minimalism to 3D Hyperrealism |
| **Colors** | 96+ | Product-specific color palettes with hex codes |
| **Typography** | 56+ | Google Fonts pairings with CSS imports |
| **UX Guidelines** | 98+ | Accessibility, interaction, and usability rules |
| **Charts** | 25+ | Data visualization recommendations |
| **Landing Patterns** | 40+ | Conversion-optimized page structures |
| **Tech Stacks** | 13 | Framework-specific best practices |
| **Icons** | 200+ | Curated icon libraries and usage patterns |

## 🛠 Prerequisites

**Python 3.8+ Required** - Check installation:

```bash
python3 --version || python --version
```

**Install Python if needed:**

| OS | Command |
|----|---------|
| **macOS** | `brew install python3` |
| **Ubuntu/Debian** | `sudo apt update && sudo apt install python3` |
| **Windows** | `winget install Python.Python.3.12` |
| **Arch Linux** | `sudo pacman -S python` |

---

## 🎯 Quick Start Workflow

When user requests UI/UX work, follow this **3-step workflow**:

### Step 1: 🔍 Analyze Requirements (5 seconds)

Extract key information from user request:
- **Product type**: SaaS, e-commerce, portfolio, dashboard, landing page, etc.
- **Style keywords**: minimal, playful, professional, elegant, dark mode, etc.
- **Industry**: healthcare, fintech, gaming, education, etc.
- **Stack**: React, Vue, Next.js, or default to `html-tailwind`

### Step 2: 🎨 Generate Design System (REQUIRED)

**Always start with `--design-system`** to get AI-powered recommendations:

```bash
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system [-p "Project Name"]
```

**What this does:**
1. 🔍 Searches 5 domains in parallel (product, style, color, landing, typography)
2. 🧠 Applies AI reasoning rules from `ui-reasoning.csv` to select best matches
3. 📋 Returns complete design system: pattern, style, colors, typography, effects
4. ⚠️ Includes anti-patterns to avoid

**Example:**
```bash
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness service elegant" --design-system -p "Serenity Spa"
```

### Step 3: 🚀 Implement with Stack Guidelines

Get implementation-specific best practices:

```bash
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack html-tailwind
```

**Available stacks:** `html-tailwind`, `react`, `nextjs`, `vue`, `svelte`, `astro`, `nuxt-ui`, `shadcn`, `swiftui`, `react-native`, `flutter`, `jetpack-compose`

## 💾 Smart Persistence (Master + Overrides Pattern)

Save design systems for reuse across sessions with hierarchical overrides:

```bash
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name"
```

**Creates:**
- `design-system/<project>/MASTER.md` — Global Source of Truth
- `design-system/<project>/pages/` — Folder for page-specific overrides

**With page-specific override:**
```bash
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name" --page "dashboard"
```

**Also creates:**
- `design-system/<project>/pages/dashboard.md` — Page-specific deviations from Master

**🔄 Hierarchical Logic:**
1. When building a specific page (e.g., "Checkout"), first check `design-system/<project>/pages/checkout.md`
2. If the page file exists, its rules **override** the Master file
3. If not, use `design-system/<project>/MASTER.md` exclusively

## 🔍 Advanced Search Options

After getting the design system, use domain searches for additional details:

```bash
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

| Need | Domain | Example Command |
|------|--------|-----------------|
| More style options | `style` | `--domain style "glassmorphism dark"` |
| Chart recommendations | `chart` | `--domain chart "real-time dashboard"` |
| UX best practices | `ux` | `--domain ux "animation accessibility"` |
| Alternative fonts | `typography` | `--domain typography "elegant luxury"` |
| Landing structure | `landing` | `--domain landing "hero social-proof"` |
| Icon libraries | `icons` | `--domain icons "heroicons lucide"` |

---

## 📚 Search Reference

### 🎯 Available Domains

| Domain | Use For | Example Keywords | Count |
|--------|---------|------------------|-------|
| `product` | Product type recommendations | SaaS, e-commerce, portfolio, healthcare, beauty, service | 20+ |
| `style` | UI styles, colors, effects | glassmorphism, minimalism, dark mode, brutalism | 67+ |
| `typography` | Font pairings, Google Fonts | elegant, playful, professional, modern | 56+ |
| `color` | Color palettes by product type | saas, ecommerce, healthcare, beauty, fintech, service | 96+ |
| `landing` | Page structure, CTA strategies | hero, hero-centric, testimonial, pricing, social-proof | 40+ |
| `chart` | Chart types, library recommendations | trend, comparison, timeline, funnel, pie | 25+ |
| `ux` | Best practices, anti-patterns | animation, accessibility, z-index, loading | 98+ |
| `icons` | Icon libraries, usage patterns | heroicons, lucide, simple-icons, feather | 200+ |
| `react` | React/Next.js performance | waterfall, bundle, suspense, memo, rerender, cache | 50+ |
| `web` | Web interface guidelines | aria, focus, keyboard, semantic, virtualize | 45+ |

### 🛠 Available Stacks

| Stack | Focus | Best For |
|-------|-------|----------|
| `html-tailwind` | Tailwind utilities, responsive, a11y | **DEFAULT** - Static sites, landing pages |
| `react` | State, hooks, performance, patterns | SPAs, complex interactions |
| `nextjs` | SSR, routing, images, API routes | Full-stack React apps |
| `vue` | Composition API, Pinia, Vue Router | Progressive enhancement |
| `svelte` | Runes, stores, SvelteKit | Performance-critical apps |
| `astro` | Islands, SSG, multi-framework | Content-heavy sites |
| `nuxtjs` | Vue SSR, auto-imports | Vue full-stack |
| `nuxt-ui` | Nuxt + Tailwind components | Rapid Vue prototyping |
| `shadcn` | shadcn/ui components, theming | Modern React design systems |
| `swiftui` | Views, State, Navigation | iOS/macOS native apps |
| `react-native` | Components, Navigation, Lists | Cross-platform mobile |
| `flutter` | Widgets, State, Layout | Cross-platform apps |
| `jetpack-compose` | Composables, Modifiers | Android native |

---

## 🎯 Example Workflow

**User request:** "Create a modern fintech dashboard with dark mode"

### Step 1: 🔍 Analyze Requirements (5 seconds)
- **Product type:** Fintech dashboard
- **Style keywords:** modern, dark mode, professional
- **Industry:** Financial technology
- **Stack:** react (for complex interactions)

### Step 2: 🎨 Generate Design System (REQUIRED)

```bash
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "fintech dashboard modern dark professional" --design-system -p "FinTech Pro"
```

**Output:** Complete design system with:
- Pattern: Conversion-Optimized layout
- Style: Glassmorphism + Dark Mode (OLED)
- Colors: Dark tech colors + vibrant accents
- Typography: Modern + confident fonts
- Effects: Real-time chart animations + alert pulse/glow
- Anti-patterns: Light backgrounds, no security indicators

### Step 3: 🔍 Supplement with Detailed Searches (as needed)

```bash
# Get chart recommendations for financial data
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "real-time financial charts" --domain chart

# Get UX guidelines for dashboard interactions
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "dashboard navigation accessibility" --domain ux

# Get React performance patterns for real-time data
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "real-time data streaming" --stack react
```

### Step 4: 🚀 Implement

**Then:** Synthesize design system + detailed searches and implement the dashboard with proper dark mode, real-time charts, and security indicators.

---

## 📤 Output Formats

The `--design-system` flag supports multiple output formats:

```bash
# ASCII box (default) - best for terminal display
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system

# Markdown - best for documentation
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system -f markdown

# JSON - for programmatic use
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system --json
```

## 🎯 Pro Tips for Better Results

| Tip | Example | Why |
|-----|---------|-----|
| **Be specific with keywords** | "healthcare SaaS dashboard" > "app" | Better pattern matching |
| **Search multiple times** | Different keywords reveal different insights | Comprehensive coverage |
| **Always check UX domain** | Search "animation", "z-index", "accessibility" | Avoid common issues |
| **Use stack flag** | Get implementation-specific best practices | Production-ready code |
| **Iterate and refine** | If first search doesn't match, try different keywords | Perfect fit |
| **Combine domains** | Style + Typography + Color = Complete system | Holistic design |

---

## ⚡ Professional UI Rules

These are frequently overlooked issues that make UI look unprofessional:

### 🎨 Icons & Visual Elements

| ✅ Do | ❌ Don't |
|-------|----------|
| Use SVG icons (Heroicons, Lucide, Simple Icons) | Use emojis like 🎨 🚀 ⚙️ as UI icons |
| Use color/opacity transitions on hover | Use scale transforms that shift layout |
| Research official SVG from Simple Icons | Guess or use incorrect logo paths |
| Use fixed viewBox (24x24) with w-6 h-6 | Mix different icon sizes randomly |

### 🖱 Interaction & Cursor

| ✅ Do | ❌ Don't |
|-------|----------|
| Add `cursor-pointer` to all clickable/hoverable cards | Leave default cursor on interactive elements |
| Provide visual feedback (color, shadow, border) | No indication element is interactive |
| Use `transition-colors duration-200` | Instant state changes or too slow (>500ms) |

### 🌓 Light/Dark Mode Contrast

| ✅ Do | ❌ Don't |
|-------|----------|
| Use `bg-white/80` or higher opacity | Use `bg-white/10` (too transparent) |
| Use `#0F172A` (slate-900) for text | Use `#94A3B8` (slate-400) for body text |
| Use `#475569` (slate-600) minimum | Use gray-400 or lighter |
| Use `border-gray-200` in light mode | Use `border-white/10` (invisible) |

### 📐 Layout & Spacing

| ✅ Do | ❌ Don't |
|-------|----------|
| Add `top-4 left-4 right-4` spacing | Stick navbar to `top-0 left-0 right-0` |
| Account for fixed navbar height | Let content hide behind fixed elements |
| Use same `max-w-6xl` or `max-w-7xl` | Mix different container widths |

---

## ✅ Pre-Delivery Checklist

Before delivering UI code, verify these items:

### 🎨 Visual Quality
- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] Brand logos are correct (verified from Simple Icons)
- [ ] Hover states don't cause layout shift
- [ ] Use theme colors directly (bg-primary) not var() wrapper

### 🖱 Interaction
- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states provide clear visual feedback
- [ ] Transitions are smooth (150-300ms)
- [ ] Focus states visible for keyboard navigation

### 🌓 Light/Dark Mode
- [ ] Light mode text has sufficient contrast (4.5:1 minimum)
- [ ] Glass/transparent elements visible in light mode
- [ ] Borders visible in both modes
- [ ] Test both modes before delivery

### 📐 Layout
- [ ] Floating elements have proper spacing from edges
- [ ] No content hidden behind fixed navbars
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile

### ♿ Accessibility
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Color is not the only indicator
- [ ] `prefers-reduced-motion` respected

## 🚀 Advanced Features

### 🔄 Auto-Detection
The search engine automatically detects the most relevant domain from your query:
- "glassmorphism dark" → `style` domain
- "real-time charts" → `chart` domain  
- "accessibility keyboard" → `ux` domain

### 🧠 AI Reasoning
Built-in reasoning engine that:
- Matches product types to optimal design patterns
- Suggests style priorities based on industry
- Recommends color moods and typography
- Identifies anti-patterns to avoid

### 📊 BM25 Search
Advanced search algorithm that:
- Tokenizes and indexes all content
- Ranks results by relevance score
- Handles typos and partial matches
- Returns contextually relevant results

---

## 🎯 Command Quick Reference

```bash
# Generate complete design system (REQUIRED FIRST STEP)
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "fintech dashboard" --design-system -p "MyProject"

# Save design system for reuse
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "fintech dashboard" --design-system --persist -p "MyProject"

# Create page-specific overrides
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "checkout flow" --design-system --persist -p "MyProject" --page "checkout"

# Search specific domains
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "glassmorphism" --domain style
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "accessibility" --domain ux
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "elegant fonts" --domain typography

# Get stack-specific guidelines
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "responsive layout" --stack html-tailwind
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "state management" --stack react
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "components" --stack shadcn

# Output formats
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "query" --design-system -f markdown
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "query" --design-system --json
```

---

*🎨 **ui-ux-pro-max** - Transforming design ideas into production-ready code with AI-powered intelligence.*
