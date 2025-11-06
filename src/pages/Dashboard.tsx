import { useState } from "react";
import { Shield, Wallet, Users, Clock, Plus, PlayCircle, CheckCircle2, TrendingUp, Activity, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Dashboard = () => {
  const [protectionScore] = useState(66);

  const wallets = [
    { id: 1, address: "0x742d...4a9B", chain: "Ethereum", testnet: true, connected: true, balance: "2.45 ETH" },
  ];

  const rules = [
    { id: 1, type: "inactivity", duration: "6 months", status: "active", lastCheck: "2024-11-01" },
  ];

  const beneficiaries = [
    { id: 1, name: "Alice Doe", email: "alice@example.com", kyc: "pending", percentage: 100 },
  ];

  const nextCheckIn = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000);

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Animated background - subtle */}
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient opacity-30 pointer-events-none" />
      <div className="fixed inset-0 bg-background/95 pointer-events-none" />
      
      {/* Subtle floating orbs */}
      <div className="fixed top-10 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float [animation-delay:5s] pointer-events-none" />

      {/* Header */}
      <header className="border-b border-border/20 backdrop-blur-xl bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="h-8 w-8 text-primary" />
              <div className="absolute inset-0 bg-primary/10 blur-lg group-hover:bg-primary/20 transition-all duration-300" />
            </div>
            <span className="text-xl font-bold text-foreground">
              DIP Dashboard
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Badge className="px-3 py-1 bg-success/10 border-success/30 text-success">
              <Activity className="h-3 w-3 mr-1 animate-pulse-slow" />
              Online
            </Badge>
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="font-mono hover-glow">
              0x742d...4a9B
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Protection Score - Hero Card */}
        <Card className="p-8 md:p-12 mb-8 glass-card border border-primary/20 relative overflow-hidden group hover-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-accent/3 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <Shield className="h-12 w-12 text-primary" />
                    <div className="absolute inset-0 bg-primary/10 blur-lg animate-pulse-slow" />
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                      {protectionScore}% Protected
                    </h2>
                    <p className="text-muted-foreground mt-1">Your legacy protection score</p>
                  </div>
                </div>
                <Progress value={protectionScore} className="h-4 mb-4" />
                <p className="text-muted-foreground">
                  Complete the remaining steps to reach 100% protection
                </p>
              </div>
              <Button variant="hero" size="lg" className="group">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Complete Setup
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Value", value: "$12,450", icon: TrendingUp, trend: "+12.5%", color: "success" },
            { label: "Wallets", value: "1", icon: Wallet, trend: "Active", color: "primary" },
            { label: "Beneficiaries", value: "1", icon: Users, trend: "Verified", color: "accent" },
            { label: "Next Check", value: "90d", icon: Clock, trend: "Scheduled", color: "info" },
          ].map((stat, i) => (
            <Card key={i} className="p-6 glass-card hover-lift hover-border cursor-pointer group">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="h-5 w-5 text-primary" />
                <Badge variant="outline" className="text-xs">{stat.trend}</Badge>
              </div>
              <div className="text-3xl font-bold mb-1 text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Alert Banner */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-info/5 via-accent/5 to-info/5 border-info/20 hover-glow hover-border">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-info/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-info" />
              </div>
              <div>
                <p className="font-semibold text-lg">Next activity check in 90 days</p>
                <p className="text-sm text-muted-foreground">
                  Due {nextCheckIn.toLocaleDateString()} • {nextCheckIn.toLocaleTimeString()}
                </p>
              </div>
            </div>
            <Button variant="outline" className="hover-glow">
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Confirm I'm Alive
            </Button>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Wallets */}
          <Card className="p-6 glass-card hover-lift">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Wallet className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Connected Wallets</h3>
              </div>
              <Button size="sm" variant="outline" className="hover-glow group">
                <Plus className="h-4 w-4 mr-1 group-hover:rotate-90 transition-transform duration-300" />
                Add
              </Button>
            </div>

            <div className="space-y-4">
              {wallets.map((wallet) => (
                <div
                  key={wallet.id}
                  className="p-5 rounded-xl border border-border bg-card/50 hover:bg-card transition-all duration-300 hover-lift hover-border cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Globe className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <code className="font-mono font-semibold text-lg">{wallet.address}</code>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-sm text-muted-foreground">{wallet.chain}</p>
                          {wallet.testnet && (
                            <Badge variant="outline" className="text-xs">Testnet</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    {wallet.connected && (
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-success" />
                        <span className="text-xs text-success">Connected</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <span className="text-sm text-muted-foreground">Balance</span>
                    <span className="font-semibold text-lg">{wallet.balance}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Rules */}
          <Card className="p-6 glass-card hover-lift">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Transfer Rules</h3>
              </div>
              <Button size="sm" variant="outline" className="hover-glow group">
                <Plus className="h-4 w-4 mr-1 group-hover:rotate-90 transition-transform duration-300" />
                Add
              </Button>
            </div>

            <div className="space-y-4">
              {rules.map((rule) => (
                <div
                  key={rule.id}
                  className="p-5 rounded-xl border border-border bg-card/50 hover:bg-card transition-all duration-300 hover-lift cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant={rule.status === "active" ? "default" : "secondary"}
                    >
                      <Activity className="h-3 w-3 mr-1" />
                      {rule.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Last check: {new Date(rule.lastCheck).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="h-5 w-5 text-accent" />
                    <p className="font-semibold text-lg capitalize">{rule.type} Trigger</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Transfer if inactive for <span className="text-foreground font-semibold">{rule.duration}</span>
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Beneficiaries */}
          <Card className="p-6 lg:col-span-2 glass-card hover-lift">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-success to-primary flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Beneficiaries</h3>
              </div>
              <Button size="sm" variant="outline" className="hover-glow group">
                <Plus className="h-4 w-4 mr-1 group-hover:rotate-90 transition-transform duration-300" />
                Add Beneficiary
              </Button>
            </div>

            <div className="space-y-4">
              {beneficiaries.map((ben) => (
                <div
                  key={ben.id}
                  className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-all duration-300 hover-lift hover-border cursor-pointer group"
                >
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-md group-hover:shadow-lg transition-all duration-300">
                        {ben.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-lg">{ben.name}</p>
                        <p className="text-sm text-muted-foreground">{ben.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground mb-1">Allocation</p>
                        <p className="text-2xl font-bold text-foreground">
                          {ben.percentage}%
                        </p>
                      </div>
                      <Badge
                        variant={ben.kyc === "verified" ? "default" : "secondary"}
                        className="capitalize px-3 py-1"
                      >
                        {ben.kyc === "pending" && <Clock className="h-3 w-3 mr-1" />}
                        {ben.kyc}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Test Mode */}
        <Card className="p-10 mt-8 glass-card border border-primary/20 hover:border-accent/30 transition-all duration-500 relative overflow-hidden group hover-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <PlayCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-semibold">Test Mode</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Run a complete simulation to verify your inheritance flow end-to-end on testnet.
                  <span className="text-foreground font-semibold"> No real assets will be transferred.</span>
                </p>
              </div>
              <Button variant="hero" size="lg" className="group text-lg px-10 py-6 h-auto">
                <PlayCircle className="mr-3 h-6 w-6 group-hover:scale-105 transition-transform duration-300" />
                Run Test Transfer
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
