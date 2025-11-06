import { Shield, Users, Clock, ArrowRight, Check, Sparkles, Lock, Zap, TrendingUp, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Animated background mesh */}
      <div className="fixed inset-0 mesh-gradient opacity-50 pointer-events-none" />
      <div className="fixed inset-0 bg-background/80 pointer-events-none" />
      
      {/* Floating orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float [animation-delay:2s] pointer-events-none" />
      <div className="fixed top-1/2 left-1/3 w-64 h-64 bg-primary-glow/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      {/* Header */}
      <header className="border-b border-border/30 backdrop-blur-xl bg-background/60 sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="h-8 w-8 text-primary animate-glow" />
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              DIP Protocol
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">
              How It Works
            </a>
            <a href="#security" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">
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

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 hover:bg-primary/20 border-primary/30 animate-bounce-slow">
              <Sparkles className="h-4 w-4 mr-2 animate-spin-slow" />
              <span className="font-medium">Next-Gen Digital Inheritance</span>
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient inline-block">
                Secure Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-gradient inline-block [animation-delay:1s]">
                Digital Legacy
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Automate crypto asset transfers with smart contracts. 
              <span className="text-foreground font-semibold"> Set it once, rest assured forever.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/dashboard">
                <Button variant="hero" size="lg" className="group relative overflow-hidden animate-glow">
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="group border-2 hover-glow">
                <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                View Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              {[
                { value: "$2.4M", label: "Protected Assets", icon: Lock },
                { value: "1,247", label: "Active Users", icon: Users },
                { value: "99.9%", label: "Uptime", icon: TrendingUp },
              ].map((stat, i) => (
                <div key={i} className="group cursor-pointer hover-lift">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary group-hover:animate-bounce-slow" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { text: "On-chain security", icon: Shield },
                { text: "Legal compliance", icon: Check },
                { text: "Testnet ready", icon: Zap },
                { text: "Multi-chain", icon: Globe },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 hover-glow cursor-pointer group">
                  <item.icon className="h-4 w-4 text-success group-hover:animate-pulse" />
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 border-accent/30">
              <Sparkles className="h-3 w-3 mr-1" />
              Features
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Built for the Future
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade security meets user-friendly design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Smart Contract Security",
                desc: "Time-locked smart contracts with multi-signature verification. Your assets stay protected until verified conditions are met.",
                color: "primary",
              },
              {
                icon: Clock,
                title: "Automated Triggers",
                desc: "Set inactivity periods or legal verification requirements. Periodic alive checks keep your plan active.",
                color: "accent",
              },
              {
                icon: Users,
                title: "Multi-Beneficiary Support",
                desc: "Add unlimited beneficiaries with custom percentages. KYC verification ensures the right people receive your legacy.",
                color: "success",
              },
              {
                icon: Zap,
                title: "Instant Execution",
                desc: "Once conditions are met, transfers execute automatically on-chain. No delays, no intermediaries.",
                color: "primary",
              },
              {
                icon: Lock,
                title: "Non-Custodial",
                desc: "You always maintain full control. We never hold your private keys or have access to your funds.",
                color: "accent",
              },
              {
                icon: Globe,
                title: "Multi-Chain Support",
                desc: "Works on Ethereum, Polygon, and more. Protect assets across multiple blockchain networks.",
                color: "success",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="p-8 glass-card hover-lift cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-primary group-hover:animate-bounce-slow" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 border-primary/30">
              <Zap className="h-3 w-3 mr-1 animate-pulse" />
              Process
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Simple Setup
            </h2>
            <p className="text-xl text-muted-foreground">Four steps to complete protection</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { 
                step: "01", 
                title: "Connect Wallets", 
                desc: "Link your Ethereum or Polygon wallets with one click. Support for MetaMask, WalletConnect, and more.",
                icon: Wallet,
              },
              { 
                step: "02", 
                title: "Set Rules", 
                desc: "Choose inactivity duration (3/6/12 months) or require legal document verification. Customize to your needs.",
                icon: Clock,
              },
              { 
                step: "03", 
                title: "Add Beneficiaries", 
                desc: "Designate recipients with optional KYC verification. Set custom percentages or specific assets per beneficiary.",
                icon: Users,
              },
              { 
                step: "04", 
                title: "Stay Active", 
                desc: "Respond to periodic alive checks via email or SMS. Keep your plan active with one click.",
                icon: Check,
              },
            ].map((item, i) => (
              <div 
                key={i} 
                className="group flex gap-6 items-start p-6 rounded-2xl hover:bg-secondary/50 transition-all duration-300 hover-lift cursor-pointer"
              >
                <div className="flex-shrink-0 h-20 w-20 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center text-primary-foreground font-bold text-2xl animate-gradient shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  {item.step}
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="h-6 w-6 text-primary group-hover:animate-bounce-slow" />
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <ChevronRight className="h-6 w-6 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="relative py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 glass-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-glow">
                    <Lock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <Badge className="bg-success/10 border-success/30 text-success">
                    <Check className="h-3 w-3 mr-1" />
                    Audited
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold mb-4">Military-Grade Security</h3>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Our smart contracts are audited by top security firms. Multi-signature requirements, 
                  time-locks, and revocation mechanisms ensure your assets are always protected. 
                  We never have access to your private keys or funds.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Smart contract audited",
                    "Multi-sig verification",
                    "Time-lock protection",
                    "Revocation anytime",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-foreground">
                      <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 animate-gradient" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Sparkles className="h-12 w-12 mx-auto mb-6 text-primary animate-spin-slow" />
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            Start Protecting Today
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands securing their digital legacy. Free plan available.
          </p>
          <Link to="/dashboard">
            <Button variant="hero" size="lg" className="group text-lg px-12 py-8 h-auto animate-glow">
              <span className="relative z-10 flex items-center">
                Launch App Now
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 backdrop-blur-xl bg-background/60 py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary animate-pulse-slow" />
              <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Inheritance Protocol
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 DIP. Built with trust and transparency.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

// Missing Wallet import
import { Wallet } from "lucide-react";
