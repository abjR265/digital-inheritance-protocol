# Digital Inheritance Protocol 

Secure, compliant, and automatic transfer of your digital legacy.

## Overview

Matteo is a premium web3 platform that automates the transfer of crypto assets to beneficiaries after verified trigger events (prolonged inactivity or legal verification). Built with institutional-grade design inspired by Cryptio, this platform ensures your digital assets are transferred safely and automatically to your loved ones when the time comes.

**Key Value Propositions:**
- **Secure & On-Chain**: All rules and transfers are secured by smart contracts on Polygon
- **Automated**: No manual intervention needed - smart contracts execute automatically
- **Family-First**: Simple beneficiary management with KYC verification
- **Test-Ready**: Full testnet environment for safe experimentation
- **Institutional Grade**: Enterprise-level security and compliance

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

**Landing Page** - Cryptio-style hero with animated vault visual
**Dashboard** - Sidebar navigation, protection score, wallet/rule/beneficiary cards
**Test Transfer Modal** - Animated simulation with transaction details
**Dark Mode** - Default dark theme with forest green accents

## Tech Stack

### Frontend
- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.x (fast HMR, optimized builds)
- **Styling**: Tailwind CSS 3.x with custom design tokens
- **UI Components**: Radix UI primitives + shadcn/ui (heavily customized)
- **Icons**: Lucide React
- **Routing**: React Router v6.30
- **Animations**: Tailwind CSS Animate + Framer Motion patterns

### State Management & Data
- **Async State**: TanStack Query (React Query) v5
- **Forms**: React Hook Form + Zod validation
- **Local State**: React useState/useReducer
- **Theme**: next-themes for dark/light mode

### Backend (Planned)
- **Database**: PostgreSQL (Supabase)
- **Authentication**: Row Level Security (RLS) + JWT
- **File Storage**: Supabase Storage for documents
- **Edge Functions**: Serverless TypeScript functions
- **Blockchain**: Polygon (Mumbai testnet for MVP)

### Smart Contracts (Planned)
- **Language**: Solidity
- **Framework**: Hardhat
- **Chain**: Polygon PoS (low fees, eco-friendly)
- **Wallet Integration**: wagmi + RainbowKit

### DevOps & Tools
- **Package Manager**: npm/bun
- **Linting**: ESLint + TypeScript ESLint
- **Version Control**: Git + GitHub
- **Deployment**: Vercel (frontend) + Supabase (backend)
- **Monitoring**: Sentry (planned)

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

## Roadmap

### Phase 2: Wallet Integration & Onboarding
- [ ] Web3 wallet connection (wagmi/RainbowKit)
- [ ] Multi-step onboarding wizard
- [ ] Wallet asset detection and display
- [ ] Portfolio value tracking

### Phase 3: Backend & Smart Contracts
- [ ] PostgreSQL database setup
- [ ] User authentication & authorization
- [ ] Smart contract development (Polygon)
- [ ] Contract deployment & testing on Mumbai testnet
- [ ] Transaction monitoring & indexing

### Phase 4: Beneficiary Management
- [ ] Beneficiary portal with magic links
- [ ] KYC/identity verification integration
- [ ] Email/SMS notification system
- [ ] Document upload & storage
- [ ] PDF receipt generation

### Phase 5: Alive Check System
- [ ] Scheduled check-in reminders
- [ ] Multi-channel notifications (email/SMS/push)
- [ ] Escalation workflow for missed check-ins
- [ ] Manual proof-of-life submission

### Phase 6: Advanced Features
- [ ] Multi-sig executor support
- [ ] Partial asset distribution rules
- [ ] Time-locked vaults
- [ ] Legal document integration
- [ ] Audit logs & compliance reporting

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

Built with love for the future of digital inheritance
