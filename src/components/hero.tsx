import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-primary/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Badge variant="secondary" className="animate-fade-in-up mb-8 gap-2 px-4 py-1.5 text-sm font-medium">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Built with the $20/mo startup stack
        </Badge>

        <h1 className="animate-fade-in-up-delay-1 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          Collect feedback.
          <br />
          <span className="gradient-text">Ship better products.</span>
        </h1>

        <p className="animate-fade-in-up-delay-2 mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed">
          The open-source feedback board for modern teams. Powered by 
          AI search, real-time analytics, and the best free-tier tools.
        </p>

        <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" className="gap-2 shadow-lg shadow-primary/20" asChild>
            <Link href="/sign-up">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#features">See Features</Link>
          </Button>
        </div>

        <div className="animate-fade-in-up-delay-3 mt-20 grid grid-cols-3 gap-8 border-t border-border pt-8">
          {[
            ["$0", "Monthly cost"],
            ["9+", "Integrations"],
            ["100%", "Open source"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-2xl font-bold sm:text-3xl">{value}</div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
