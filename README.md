# Matteo - Digital Inheritance Protocol 🛡️

Secure, compliant, and automatic transfer of your digital legacy.

## Overview

Matteo is a premium web3 platform that automates the transfer of crypto assets to beneficiaries after verified trigger events (prolonged inactivity or legal verification). Built with institutional-grade design inspired by Cryptio.

## Design System

### Theme - Cryptio-Inspired Dark Green
- **Primary**: Forest Green (#00A859)
- **Background**: Deep Black (#0A0A0A)
- **Surface**: Graphite Grey (#1A1A1A)
- **Text**: White/Silver (#FFFFFF / #CCCCCC)
- **Typography**: Manrope Bold + Inter Regular

### Visual Identity
- Professional, secure, and confident
- Minimal linework with glass-morphism
- Web-mesh grid overlay with subtle green nodes
- Institutional-grade polish

## Current Features (MVP Phase 1)

✅ **Landing Page** - Cryptio-style hero with animated vault visual
✅ **Dashboard** - Sidebar navigation, protection score, wallet/rule/beneficiary cards
✅ **Test Transfer Modal** - Animated simulation with transaction details
✅ **Dark Mode** - Default dark theme with forest green accents

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Cryptio-inspired tokens
- **UI Components**: shadcn/ui (heavily customized)
- **Routing**: React Router v6
- **State**: React Query + Local State

## Design Tokens

```css
--primary: 151 100% 33%        /* Forest Green */
--background: 0 0% 4%           /* Deep Black */
--card: 0 0% 5%                 /* Graphite */
--border: 0 0% 15%              /* Subtle Border */
```

## Component Styles

- **crypto-card**: Dark card with green left accent border
- **glass-card**: Translucent with backdrop blur
- **hover-lift**: Subtle elevation on hover
- **hover-glow**: Green border glow on hover
- **status-dot**: Animated status indicators

## Next Steps (Phase 2+)

- [ ] Wallet connection (wagmi/RainbowKit)
- [ ] Onboarding wizard flow
- [ ] Lovable Cloud backend + PostgreSQL
- [ ] Smart contracts (Polygon testnet)
- [ ] Beneficiary portal with magic links
- [ ] KYC mock integration
- [ ] Alive check system with email/SMS
- [ ] Executor upload flow
- [ ] PDF receipt generation

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:8080`

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn components (customized)
│   ├── ThemeToggle.tsx
│   └── TestTransferModal.tsx
├── pages/
│   ├── Index.tsx        # Landing (Cryptio-style)
│   ├── Dashboard.tsx    # Owner dashboard with sidebar
│   └── NotFound.tsx
├── index.css            # Matteo design system tokens
└── App.tsx              # Routes
```

## Design Philosophy

- **Trust-first**: Every element conveys security and professionalism
- **Institutional grade**: Inspired by Cryptio's premium aesthetic
- **Clarity**: Plain English, minimal crypto jargon
- **Progressive disclosure**: Show complexity only when needed
- **Testnet-ready**: Safe experimentation environment

## Brand Voice

"You stay in control — even when you can't be there."
"We'll check in every few months to make sure your legacy stays protected."
"When the time comes, your loved ones receive what's theirs — automatically."

## License

MIT

---

Built with ❤️ for the future of digital inheritance
