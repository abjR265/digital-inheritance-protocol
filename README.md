# Digital Inheritance Protocol (DIP) 🛡️

Secure, compliant, and automatic transfer of your digital legacy.

## Overview

DIP is a web3 platform that automates the transfer of crypto assets to beneficiaries after verified trigger events (prolonged inactivity or legal verification). Built with trust-first design principles inspired by Coinbase and Notion.

## Current Features (MVP Phase 1)

✅ **Landing Page** - Compelling hero section with features and how-it-works
✅ **Owner Dashboard** - View protection status, manage wallets, rules, and beneficiaries
✅ **Beautiful Design System** - Coinbase × Notion aesthetic with glass morphism
✅ **Mock Data Layer** - Simulated state for rapid prototyping

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Design System
- **UI Components**: shadcn/ui (customized)
- **Routing**: React Router v6
- **State**: React Query + Local State

## Design System

- **Colors**: Deep blue/teal primary (`hsl(200 95% 35%)`), soft gradients
- **Typography**: Inter font family
- **Components**: Glass cards, hero buttons, custom badges
- **Animations**: Float, glow, smooth transitions

## Next Steps (Phase 2+)

- [ ] Connect wallet integration (wagmi/RainbowKit)
- [ ] Backend API (Node.js + Fastify + PostgreSQL)
- [ ] Smart contracts (Solidity on Polygon testnet)
- [ ] KYC flow (Persona mock)
- [ ] Notification system (Twilio/SendGrid)
- [ ] Test simulation execution
- [ ] Beneficiary portal
- [ ] Receipt/PDF generation

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:8080`

## Project Structure

```
src/
├── components/ui/     # shadcn components (customized)
├── pages/
│   ├── Index.tsx      # Landing page
│   ├── Dashboard.tsx  # Owner dashboard
│   └── NotFound.tsx   # 404 page
├── index.css          # Design system tokens
└── App.tsx            # Routes
```

## Design Philosophy

- **Trust-first**: Every UI element conveys security and reliability
- **Clarity over cleverness**: Plain English, no unnecessary crypto jargon
- **Progressive disclosure**: Show complexity only when needed
- **Testnet-ready**: Built for safe experimentation

## License

MIT

---

Built with ❤️ for the future of digital inheritance
