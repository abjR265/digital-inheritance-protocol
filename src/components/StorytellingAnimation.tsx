import { useEffect, useState } from "react";
import { Lock, Activity, ArrowRight, Users, Shield, Check } from "lucide-react";

const StorytellingAnimation = () => {
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scenes = [
    {
      id: 0,
      title: "Lock Your Assets",
      subtitle: "Secure your assets on-chain",
      icon: Lock,
    },
    {
      id: 1,
      title: "Monitor Life Signals",
      subtitle: "DIP monitors user activity",
      icon: Activity,
    },
    {
      id: 2,
      title: "Trigger Smart Transfer",
      subtitle: "Assets transfer automatically",
      icon: ArrowRight,
    },
    {
      id: 3,
      title: "Peace of Mind",
      subtitle: "Safe. Legal. Automated. On-Chain.",
      icon: Users,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-12">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8 px-4">
        {scenes.map((scene, idx) => (
          <div key={idx} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  idx <= activeScene
                    ? "bg-primary text-primary-foreground scale-110"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                <scene.icon className="h-5 w-5" />
              </div>
              <div className="text-xs mt-2 text-muted-foreground max-w-[80px] text-center hidden sm:block">
                {scene.title}
              </div>
            </div>
            {idx < scenes.length - 1 && (
              <div className="flex-1 h-1 mx-2 bg-secondary relative overflow-hidden rounded-full">
                <div
                  className={`absolute inset-0 bg-primary transition-all duration-1000 ${
                    idx < activeScene ? "w-full" : idx === activeScene ? "w-1/2" : "w-0"
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Animation Area */}
      <div className="relative h-[400px] rounded-3xl glass-card border border-primary/20 overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 mesh-gradient opacity-10" />

        {/* Animated blockchain nodes in background */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <radialGradient id="nodeGlow">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
          </defs>
          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              cx={`${20 + (i % 4) * 25}%`}
              cy={`${25 + Math.floor(i / 4) * 30}%`}
              r="2"
              fill="hsl(var(--primary))"
              opacity="0.4"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s`, animationDuration: '3s' }}
            />
          ))}
        </svg>

        {/* Scene 0: Lock Your Assets */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
            activeScene === 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          <div className="relative">
            {/* Wallet */}
            <div className={`absolute -left-32 top-8 transition-all duration-1000 ${activeScene === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="w-20 h-20 rounded-2xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                <Shield className="h-10 w-10 text-primary" />
              </div>
            </div>

            {/* Vault */}
            <div className="w-32 h-32 rounded-3xl bg-primary/20 border-4 border-primary flex items-center justify-center backdrop-blur-sm relative">
              <Lock className="h-16 w-16 text-primary animate-pulse" />
              <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-2xl animate-pulse" />
            </div>

            {/* Arrow */}
            <div className={`absolute -left-6 top-12 transition-all duration-700 delay-300 ${activeScene === 0 ? 'opacity-100' : 'opacity-0'}`}>
              <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
            </div>
          </div>
          <h3 className="text-3xl font-bold mt-8 text-foreground">Lock Your Assets</h3>
          <p className="text-muted-foreground mt-2 text-lg">Secure your assets on-chain</p>
        </div>

        {/* Scene 1: Monitor Life Signals */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
            activeScene === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          <div className="relative">
            {/* Pulse circles */}
            <div className="w-32 h-32 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center relative">
              <Activity className="h-16 w-16 text-primary" />
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '2s' }} />
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }} />
            </div>
          </div>
          <h3 className="text-3xl font-bold mt-8 text-foreground">Monitor Life Signals</h3>
          <p className="text-muted-foreground mt-2 text-lg">DIP monitors user activity through verified signals</p>
        </div>

        {/* Scene 2: Trigger Smart Transfer */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
            activeScene === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          <div className="relative flex items-center gap-8">
            {/* Unlocking vault */}
            <div className="w-24 h-24 rounded-2xl bg-primary/20 border-4 border-primary/50 flex items-center justify-center backdrop-blur-sm relative">
              <Lock className="h-12 w-12 text-primary/50" />
            </div>

            {/* Flowing tokens */}
            <div className="relative">
              <svg width="120" height="60" viewBox="0 0 120 60">
                <defs>
                  <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 30 Q 40 10, 80 30 T 120 30"
                  stroke="url(#flowGrad)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8 4"
                  className="animate-flow-dash"
                />
                {[0, 1, 2].map((i) => (
                  <circle key={i} r="4" fill="hsl(var(--primary))">
                    <animateMotion dur="2s" begin={`${i * 0.6}s`} repeatCount="indefinite">
                      <mpath href="#flowPath2" />
                    </animateMotion>
                  </circle>
                ))}
                <path id="flowPath2" d="M 0 30 Q 40 10, 80 30 T 120 30" fill="none" />
              </svg>
            </div>

            {/* Beneficiary wallet */}
            <div className="w-24 h-24 rounded-2xl bg-primary/20 border-4 border-primary flex items-center justify-center backdrop-blur-sm relative">
              <Users className="h-12 w-12 text-primary" />
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl animate-pulse" />
            </div>
          </div>
          <h3 className="text-3xl font-bold mt-8 text-foreground">Trigger Smart Transfer</h3>
          <p className="text-muted-foreground mt-2 text-lg">Assets transfer automatically to beneficiaries</p>
        </div>

        {/* Scene 3: Peace of Mind */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
            activeScene === 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          <div className="relative flex items-center gap-4">
            {/* Connected family */}
            <div className="flex -space-x-4">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center backdrop-blur-sm"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <Users className="h-10 w-10 text-primary" />
                </div>
              ))}
            </div>
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <Check className="h-10 w-10 text-primary-foreground" />
            </div>
          </div>
          <h3 className="text-3xl font-bold mt-8 text-foreground">Peace of Mind, On-Chain</h3>
          <p className="text-muted-foreground mt-2 text-lg">Safe. Legal. Automated. 100% On-Chain.</p>
        </div>
      </div>

      {/* Scene indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {scenes.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveScene(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === activeScene ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Go to scene ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StorytellingAnimation;
