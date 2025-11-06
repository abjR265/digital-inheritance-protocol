import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, ArrowRight, Download, ExternalLink } from "lucide-react";

interface TestTransferModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type TransferStage = "initializing" | "checking" | "transferring" | "complete";

export const TestTransferModal = ({ open, onOpenChange }: TestTransferModalProps) => {
  const [stage, setStage] = useState<TransferStage>("initializing");
  const [progress, setProgress] = useState(0);
  const [txHash] = useState(`0x${Math.random().toString(16).slice(2, 66)}`);

  useEffect(() => {
    if (!open) {
      setStage("initializing");
      setProgress(0);
      return;
    }

    // Simulate transfer stages
    const timer1 = setTimeout(() => {
      setStage("checking");
      setProgress(25);
    }, 1000);

    const timer2 = setTimeout(() => {
      setStage("transferring");
      setProgress(60);
    }, 3000);

    const timer3 = setTimeout(() => {
      setStage("complete");
      setProgress(100);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [open]);

  const stages = {
    initializing: {
      title: "Initializing Test Transfer",
      description: "Preparing testnet environment...",
      icon: Clock,
    },
    checking: {
      title: "Verifying Conditions",
      description: "Checking inactivity trigger and beneficiary status...",
      icon: Clock,
    },
    transferring: {
      title: "Executing Transfer",
      description: "Broadcasting transaction to Polygon testnet...",
      icon: ArrowRight,
    },
    complete: {
      title: "Transfer Complete",
      description: "Test simulation successful!",
      icon: CheckCircle2,
    },
  };

  const currentStage = stages[stage];
  const StageIcon = currentStage.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-background border-primary/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <StageIcon className="h-5 w-5 text-primary-foreground" />
            </div>
            Test Mode Simulation
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Current Stage */}
          <Card className="p-6 bg-background/50 border-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <StageIcon className={`h-6 w-6 text-primary ${stage !== "complete" ? "animate-pulse-slow" : ""}`} />
              <h3 className="font-semibold text-lg">{currentStage.title}</h3>
            </div>
            <p className="text-muted-foreground mb-4">{currentStage.description}</p>
            <Progress value={progress} className="h-3" />
          </Card>

          {/* Transfer Details (shown when transferring or complete) */}
          {(stage === "transferring" || stage === "complete") && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h4 className="font-semibold text-sm text-muted-foreground">Transfer Details</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 border border-primary/10">
                  <span className="text-sm text-muted-foreground">Network</span>
                  <Badge variant="outline">Polygon Testnet</Badge>
                </div>

                <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 border border-primary/10">
                  <span className="text-sm text-muted-foreground">Trigger Type</span>
                  <Badge>Inactivity (6 months)</Badge>
                </div>

                <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 border border-primary/10">
                  <span className="text-sm text-muted-foreground">Beneficiaries</span>
                  <span className="font-semibold">1</span>
                </div>

                <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 border border-primary/10">
                  <span className="text-sm text-muted-foreground">Assets Transferred</span>
                  <span className="font-semibold">2.45 ETH</span>
                </div>
              </div>
            </div>
          )}

          {/* Transaction Hash (shown when complete) */}
          {stage === "complete" && (
            <Card className="p-4 bg-success/10 border-success/30 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-success mb-1">Transaction Confirmed</p>
                  <p className="text-xs text-muted-foreground mb-2">Your test transfer has been successfully executed on testnet</p>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-muted-foreground">Tx Hash:</span>
                    <code className="font-mono text-xs bg-background px-2 py-1 rounded truncate flex-1">
                      {txHash.slice(0, 20)}...{txHash.slice(-8)}
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0"
                      onClick={() => window.open(`https://mumbai.polygonscan.com/tx/${txHash}`, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            {stage === "complete" ? (
              <>
                <Button variant="outline" className="flex-1 hover-glow">
                  <Download className="mr-2 h-4 w-4" />
                  Download Receipt
                </Button>
                <Button variant="default" className="flex-1" onClick={() => onOpenChange(false)}>
                  Close
                </Button>
              </>
            ) : (
              <Button variant="outline" className="w-full" onClick={() => onOpenChange(false)}>
                Cancel Simulation
              </Button>
            )}
          </div>

          {/* Test Mode Notice */}
          <div className="text-center text-xs text-muted-foreground pt-2 border-t border-border">
            <p>🔒 This is a simulated test transfer on Polygon Mumbai testnet</p>
            <p>No real assets are being transferred</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
