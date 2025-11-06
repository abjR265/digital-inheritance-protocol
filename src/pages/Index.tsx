import { Shield, Users, Clock, ArrowRight, Check, Lock, Zap, Globe, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden relative bg-background">
      {/* Institutional web mesh background */}
      <div className="fixed inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient opacity-60 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      {/* Subtle floating nodes */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl animate-float [animation-delay:5s] pointer-events-none" />

      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-xl bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="h-8 w-8 text-primary" />
              <div className="absolute inset-0 bg-primary/10 blur-lg group-hover:bg-primary/20 transition-all duration-300" />
            </div>
            <span className="text-xl font-bold text-foreground">DIP</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#trust" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Trust Layer
            </a>
            <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Security
            </a>
            <ThemeToggle />
            <Link to="/dashboard">
              <Button variant="outline" size="sm" className="hover-glow">
                Launch App
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section - Cryptio Style */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 hover:bg-primary/15 border-primary/30 inline-flex">
              <Shield className="h-4 w-4 mr-2" />
              <span className="font-medium">Secure Digital Inheritance Protocol</span>
            </Badge>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-foreground">Secure</span>
                <br />
                <span className="text-primary">Digital Inheritance</span>
              </h1>

              {/* Compact Flow Animation beside title */}
              <div className="relative w-full max-w-sm lg:w-64 h-40 lg:flex-shrink-0">
                <div className="absolute inset-0 rounded-2xl glass-card border border-primary/30 overflow-hidden p-4">
                  <svg className="w-full h-full" viewBox="0 0 280 120">
                    {/* Animated flow line */}
                    <defs>
                      <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(0, 168, 89, 0.2)" />
                        <stop offset="50%" stopColor="rgba(0, 168, 89, 0.8)" />
                        <stop offset="100%" stopColor="rgba(0, 168, 89, 0.2)" />
                      </linearGradient>
                      <linearGradient id="arrowGradient">
                        <stop offset="0%" stopColor="rgba(0, 168, 89, 0.4)" />
                        <stop offset="100%" stopColor="rgba(0, 168, 89, 1)" />
                      </linearGradient>
                    </defs>

                    {/* Main flow path */}
                    <path
                      d="M 30 60 L 90 60 L 90 35 L 140 35 L 140 60 L 190 60 L 190 85 L 250 85"
                      stroke="url(#flowGradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8 4"
                      className="animate-flow-dash"
                    />

                    {/* Animated particles */}
                    <circle r="3" fill="hsl(var(--primary))" className="animate-flow-particle-1">
                      <animateMotion dur="4s" repeatCount="indefinite">
                        <mpath href="#flowPath" />
                      </animateMotion>
                    </circle>
                    <circle r="2.5" fill="hsl(var(--primary))" opacity="0.7" className="animate-flow-particle-2">
                      <animateMotion dur="4s" begin="1.3s" repeatCount="indefinite">
                        <mpath href="#flowPath" />
                      </animateMotion>
                    </circle>
                    <circle r="2" fill="hsl(var(--primary))" opacity="0.5" className="animate-flow-particle-3">
                      <animateMotion dur="4s" begin="2.6s" repeatCount="indefinite">
                        <mpath href="#flowPath" />
                      </animateMotion>
                    </circle>

                    <path id="flowPath" d="M 30 60 L 90 60 L 90 35 L 140 35 L 140 60 L 190 60 L 190 85 L 250 85" fill="none" />

                    {/* Step 1: Lock Assets */}
                    <g transform="translate(15, 45)">
                      <circle cx="15" cy="15" r="14" fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                      <rect x="9" y="11" width="12" height="10" rx="1" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                      <circle cx="15" cy="8" r="3" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                      <text x="15" y="38" fontSize="9" fill="hsl(var(--primary))" textAnchor="middle" fontWeight="600">Lock</text>
                    </g>

                    {/* Step 2: Monitor */}
                    <g transform="translate(125, 20)">
                      <circle cx="15" cy="15" r="14" fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                      <circle cx="15" cy="15" r="9" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                      <line x1="15" y1="15" x2="15" y2="9" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                      <line x1="15" y1="15" x2="19" y2="15" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                      <text x="15" y="38" fontSize="9" fill="hsl(var(--primary))" textAnchor="middle" fontWeight="600">Monitor</text>
                      <circle cx="15" cy="15" r="12" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" className="animate-ping" style={{ animationDuration: '2s' }} />
                    </g>

                    {/* Step 3: Transfer */}
                    <g transform="translate(235, 70)">
                      <circle cx="15" cy="15" r="14" fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                      <circle cx="11" cy="12" r="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                      <circle cx="19" cy="12" r="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                      <path d="M 8 20 Q 15 24 22 20" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                      <text x="15" y="38" fontSize="9" fill="hsl(var(--primary))" textAnchor="middle" fontWeight="600">Transfer</text>
                    </g>

                    {/* Arrow indicators */}
                    <g opacity="0.6">
                      <path d="M 85 60 L 90 60 L 87 57" fill="url(#arrowGradient)" className="animate-pulse" />
                      <path d="M 135 40 L 140 35 L 140 40" fill="url(#arrowGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <path d="M 185 62 L 190 60 L 187 65" fill="url(#arrowGradient)" className="animate-pulse" style={{ animationDelay: '1s' }} />
                      <path d="M 185 83 L 190 85 L 187 80" fill="url(#arrowGradient)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              Automatically transfer your crypto assets to loved ones — safely, legally, and on-chain.
              <span className="text-foreground font-semibold block mt-2">
                You stay in control even when you can't be there.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/dashboard">
                <Button variant="hero" size="lg" className="group">
                  <span className="flex items-center">
                    Protect My Assets
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="hover-glow">
                Learn More
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4">
              {[
                { text: "On-chain security", icon: Shield },
                { text: "Legal compliance", icon: Check },
                { text: "Audited contracts", icon: Lock },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="status-dot active" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative py-20 bg-secondary/30">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple setup, automatic execution</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                num: "01",
                title: "Connect Wallet",
                desc: "Link your Ethereum or Polygon wallets with one click. MetaMask, WalletConnect, and Coinbase Wallet supported.",
                icon: Globe,
              },
              {
                num: "02",
                title: "Add Beneficiaries",
                desc: "Designate recipients with custom percentages. Set inactivity triggers or require legal verification.",
                icon: Users,
              },
              {
                num: "03",
                title: "Automate Transfers",
                desc: "Your plan activates automatically based on conditions you set. Beneficiaries receive assets on-chain.",
                icon: Zap,
              },
            ].map((step, i) => (
              <Card key={i} className="p-8 crypto-card hover-lift cursor-pointer group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    {step.num}
                  </div>
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Layer */}
      <section id="trust" className="relative py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 glass-card border border-primary/20 hover:border-primary/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="h-10 w-10 text-primary" />
                <h3 className="text-3xl font-bold">Trust Layer</h3>
              </div>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We'll check in every few months to make sure your legacy stays protected. When the time comes, your
                loved ones receive what's theirs — automatically.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Shield, text: "End-to-end encryption" },
                  { icon: Check, text: "Legal verification support" },
                  { icon: Lock, text: "Smart contract audited" },
                  { icon: Sparkles, text: "Immutable audit reports" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Ready to Protect Your Legacy?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Start with a free plan and upgrade as you grow. No credit card required.
          </p>
          <Link to="/dashboard">
            <Button variant="hero" size="lg" className="text-lg px-12 py-8 h-auto">
              <span className="flex items-center">
                Get Started Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </span>
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 backdrop-blur-xl bg-background/80 py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-semibold text-foreground">Digital Inheritance Protocol</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 DIP. Built with trust and transparency.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
