import { useState } from "react";
import { Shield, Wallet, Users, Clock, Plus, PlayCircle, CheckCircle2, TrendingUp, Activity, Settings, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TestTransferModal } from "@/components/TestTransferModal";
import { toast } from "sonner";

const Dashboard = () => {
  const [protectionScore, setProtectionScore] = useState(66);
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);

  const handleCompleteSetup = () => {
    toast.success("Setup completion guide opened!");
    setProtectionScore(100);
  };

  const handleConfirmAlive = () => {
    toast.success("Activity confirmed! Next check-in scheduled for 90 days from now.");
  };

  const handleAddWallet = () => {
    toast.info("Add wallet modal would open here");
  };

  const handleAddRule = () => {
    toast.info("Create rule modal would open here");
  };

  const handleAddBeneficiary = () => {
    toast.info("Add beneficiary form would open here");
  };

  const handleNavigation = (label: string) => {
    toast.info(`Navigating to ${label}...`);
  };

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
    <div className="min-h-screen flex bg-background">
      {/* Institutional background */}
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient opacity-40 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      {/* Sidebar */}
      <aside className="w-64 border-r border-border/50 backdrop-blur-xl bg-background/80 flex-shrink-0 sticky top-0 h-screen z-40 hidden lg:flex flex-col">
        <div className="p-6 border-b border-border/50">
          <Link to="/" className="flex items-center gap-2 group">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">DIP</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {[
            { icon: Home, label: "Dashboard", active: true },
            { icon: Users, label: "Beneficiaries" },
            { icon: Clock, label: "Rules" },
            { icon: Activity, label: "Check-Ins" },
            { icon: Settings, label: "Settings" },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => handleNavigation(item.label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                item.active
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border/50">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto relative z-10">
        {/* Header */}
        <header className="border-b border-border/50 backdrop-blur-xl bg-background/80 sticky top-0 z-30">
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Manage your digital inheritance plan</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="px-3 py-1 bg-success/10 border-success/30 text-success">
                <div className="status-dot active mr-2" />
                Active
              </Badge>
              <Button variant="ghost" size="sm" className="font-mono text-xs">
                0x742d...4a9B
              </Button>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Protection Score Banner */}
          <Card className="p-8 crypto-card hover-glow">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="h-10 w-10 text-primary" />
                  <div>
                    <h2 className="text-4xl font-bold text-foreground mb-1">
                      {protectionScore}% Protected
                    </h2>
                    <p className="text-sm text-muted-foreground">Your legacy protection score</p>
                  </div>
                </div>
                <Progress value={protectionScore} className="h-3 mb-3" />
                <p className="text-sm text-muted-foreground">
                  Complete the remaining steps to reach 100% protection
                </p>
              </div>
              <Button variant="hero" size="lg" onClick={handleCompleteSetup}>
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Complete Setup
              </Button>
            </div>
          </Card>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "Total Value", value: "$12,450", icon: TrendingUp, change: "+12.5%" },
              { label: "Wallets", value: "1", icon: Wallet, change: "Active" },
              { label: "Beneficiaries", value: "1", icon: Users, change: "Verified" },
              { label: "Next Check", value: "90d", icon: Clock, change: "Scheduled" },
            ].map((stat, i) => (
              <Card key={i} className="p-5 crypto-card hover-lift cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <stat.icon className="h-5 w-5 text-primary" />
                  <Badge variant="outline" className="text-xs">{stat.change}</Badge>
                </div>
                <div className="text-3xl font-bold mb-1 text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Check-In Banner */}
          <Card className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-foreground">Next activity check in 90 days</p>
                  <p className="text-sm text-muted-foreground">
                    Due {nextCheckIn.toLocaleDateString()} • {nextCheckIn.toLocaleTimeString()}
                  </p>
                </div>
              </div>
              <Button variant="outline" className="hover-glow" onClick={handleConfirmAlive}>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Confirm I'm Alive
              </Button>
            </div>
          </Card>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Wallets */}
            <Card className="p-6 crypto-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Wallet className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Connected Wallets</h3>
                </div>
                <Button size="sm" variant="outline" className="hover-glow" onClick={handleAddWallet}>
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>

              <div className="space-y-4">
                {wallets.map((wallet) => (
                  <Card key={wallet.id} className="p-5 crypto-card hover-lift cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <code className="font-mono font-semibold text-lg">{wallet.address}</code>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-sm text-muted-foreground">{wallet.chain}</p>
                          {wallet.testnet && (
                            <Badge variant="outline" className="text-xs">Testnet</Badge>
                          )}
                        </div>
                      </div>
                      {wallet.connected && (
                        <div className="status-dot active" />
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-border/50">
                      <span className="text-sm text-muted-foreground">Balance</span>
                      <span className="font-semibold">{wallet.balance}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Rules */}
            <Card className="p-6 crypto-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Transfer Rules</h3>
                </div>
                <Button size="sm" variant="outline" className="hover-glow" onClick={handleAddRule}>
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>

              <div className="space-y-4">
                {rules.map((rule) => (
                  <Card key={rule.id} className="p-5 crypto-card hover-lift cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-success/10 border-success/30 text-success">
                        <div className="status-dot active mr-2" />
                        {rule.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        Last check: {new Date(rule.lastCheck).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <Activity className="h-5 w-5 text-primary" />
                      <p className="font-semibold text-lg capitalize">{rule.type} Trigger</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Transfer if inactive for <span className="text-foreground font-semibold">{rule.duration}</span>
                    </p>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Beneficiaries */}
            <Card className="p-6 lg:col-span-2 crypto-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Beneficiaries</h3>
                </div>
                <Button size="sm" variant="outline" className="hover-glow" onClick={handleAddBeneficiary}>
                  <Plus className="h-4 w-4 mr-1" />
                  Add Beneficiary
                </Button>
              </div>

              <div className="space-y-4">
                {beneficiaries.map((ben) => (
                  <Card key={ben.id} className="p-6 crypto-card hover-lift cursor-pointer">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl">
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
                          <p className="text-2xl font-bold text-foreground">{ben.percentage}%</p>
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
                  </Card>
                ))}
              </div>
            </Card>
          </div>

          {/* Test Mode */}
          <Card className="p-10 crypto-card hover-glow border-2 border-primary/20">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <PlayCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-semibold">Test Mode</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Run a complete simulation to verify your inheritance flow end-to-end on testnet.
                  <span className="text-foreground font-semibold"> No real assets will be transferred.</span>
                </p>
              </div>
              <Button variant="hero" size="lg" className="text-lg px-10 py-6 h-auto" onClick={() => setIsTestModalOpen(true)}>
                <PlayCircle className="mr-3 h-6 w-6" />
                Run Test Transfer
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Test Transfer Modal */}
      <TestTransferModal open={isTestModalOpen} onOpenChange={setIsTestModalOpen} />
    </div>
  );
};

export default Dashboard;
