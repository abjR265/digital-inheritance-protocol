import { Shield, Users, Clock, ArrowRight, Check, Lock, Zap, Globe, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import StorytellingAnimation from "@/components/StorytellingAnimation";

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

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">Secure</span>
              <br />
              <span className="text-primary">Digital Inheritance</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              Automatically transfer your crypto assets to loved ones - safely, legally, and on-chain.
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
            <div className="flex flex-wrap gap-4 mb-8">
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

            {/* Storytelling Animation */}
            <StorytellingAnimation />
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
            <Card className="p-12 crypto-card border border-primary/20 hover:border-primary/30 transition-all duration-500">
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
