import { useState } from "react";
import { Shield, Wallet, Users, Clock, Plus, PlayCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [protectionScore] = useState(66); // Mock: (1 wallet + 1 rule + 1 beneficiary) / 3 * 100

  // Mock data
  const wallets = [
    { id: 1, address: "0x742d...4a9B", chain: "Ethereum", testnet: true, connected: true },
  ];

  const rules = [
    { id: 1, type: "inactivity", duration: "6 months", status: "active", lastCheck: "2024-11-01" },
  ];

  const beneficiaries = [
    { id: 1, name: "Alice Doe", email: "alice@example.com", kyc: "pending", percentage: 100 },
  ];

  const nextCheckIn = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000); // 90 days from now

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">DIP Dashboard</span>
          </Link>
          <Button variant="ghost" size="sm">
            0x742d...4a9B
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Protection Score Card */}
        <Card className="p-8 mb-8 glass-card">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Your Legacy is {protectionScore}% Protected</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Complete the setup to reach 100% protection
              </p>
              <Progress value={protectionScore} className="h-3" />
            </div>
            <Button variant="hero" className="group">
              Complete Setup
              <CheckCircle2 className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Card>

        {/* Next Check-in Banner */}
        <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-info/10 to-accent/10 border border-border/50">
          <div className="flex items-center gap-4">
            <Clock className="h-6 w-6 text-info" />
            <div className="flex-1">
              <p className="font-semibold">Next activity check</p>
              <p className="text-sm text-muted-foreground">
                Due {nextCheckIn.toLocaleDateString()} at {nextCheckIn.toLocaleTimeString()}
              </p>
            </div>
            <Button variant="outline">Confirm I'm Alive</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Wallets */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Connected Wallets</h3>
              </div>
              <Button size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>

            <div className="space-y-4">
              {wallets.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Wallet className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No wallets connected yet</p>
                  <p className="text-sm">Connect to start protecting assets</p>
                </div>
              ) : (
                wallets.map((wallet) => (
                  <div
                    key={wallet.id}
                    className="p-4 rounded-lg border border-border bg-card hover:bg-card-glass transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <code className="font-mono font-semibold">{wallet.address}</code>
                          {wallet.testnet && (
                            <Badge variant="outline" className="text-xs">Testnet</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{wallet.chain}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {wallet.connected && (
                          <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </Card>

          {/* Rules */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-semibold">Transfer Rules</h3>
              </div>
              <Button size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>

            <div className="space-y-4">
              {rules.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Clock className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No rules defined yet</p>
                  <p className="text-sm">Add your first rule to define when transfers happen</p>
                </div>
              ) : (
                rules.map((rule) => (
                  <div
                    key={rule.id}
                    className="p-4 rounded-lg border border-border bg-card hover:bg-card-glass transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={rule.status === "active" ? "default" : "secondary"}>
                        {rule.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        Last check: {new Date(rule.lastCheck).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="font-semibold capitalize mb-1">{rule.type} Trigger</p>
                    <p className="text-sm text-muted-foreground">
                      Transfer if inactive for {rule.duration}
                    </p>
                  </div>
                ))
              )}
            </div>
          </Card>

          {/* Beneficiaries */}
          <Card className="p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-success" />
                <h3 className="text-xl font-semibold">Beneficiaries</h3>
              </div>
              <Button size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-1" />
                Add Beneficiary
              </Button>
            </div>

            <div className="space-y-4">
              {beneficiaries.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No beneficiaries added yet</p>
                  <p className="text-sm">Add someone you trust. You can change this anytime.</p>
                </div>
              ) : (
                beneficiaries.map((ben) => (
                  <div
                    key={ben.id}
                    className="p-4 rounded-lg border border-border bg-card hover:bg-card-glass transition-colors"
                  >
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                            {ben.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold">{ben.name}</p>
                            <p className="text-sm text-muted-foreground">{ben.email}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Allocation</p>
                          <p className="font-semibold">{ben.percentage}%</p>
                        </div>
                        <Badge
                          variant={ben.kyc === "verified" ? "default" : "secondary"}
                          className="capitalize"
                        >
                          {ben.kyc}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </Card>
        </div>

        {/* Test Mode */}
        <Card className="p-8 mt-8 glass-card border-2 border-primary/20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <PlayCircle className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Test Mode</h3>
              </div>
              <p className="text-muted-foreground">
                Run a simulation to verify your inheritance flow end-to-end on testnet.
                No real assets will be transferred.
              </p>
            </div>
            <Button variant="hero" size="lg">
              Run Test Transfer
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
