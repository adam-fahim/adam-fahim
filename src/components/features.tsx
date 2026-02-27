import {
  Shield,
  Database,
  CreditCard,
  Mail,
  BarChart3,
  AlertTriangle,
  Zap,
  Search,
  Globe,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    name: "Clerk",
    role: "Authentication",
    description: "Secure sign-up, sign-in, and user management with social logins and MFA.",
  },
  {
    icon: Database,
    name: "Supabase",
    role: "Database",
    description: "PostgreSQL database with real-time subscriptions and row-level security.",
  },
  {
    icon: CreditCard,
    name: "Stripe",
    role: "Payments",
    description: "Subscription billing with checkout sessions, webhooks, and customer portal.",
  },
  {
    icon: Mail,
    name: "Resend",
    role: "Emails",
    description: "Transactional emails for notifications, onboarding, and feedback alerts.",
  },
  {
    icon: BarChart3,
    name: "PostHog",
    role: "Analytics",
    description: "Product analytics with event tracking, funnels, and feature flags.",
  },
  {
    icon: AlertTriangle,
    name: "Sentry",
    role: "Error Tracking",
    description: "Real-time error monitoring with stack traces and performance insights.",
  },
  {
    icon: Zap,
    name: "Upstash",
    role: "Redis",
    description: "Serverless Redis for rate limiting, caching, and session management.",
  },
  {
    icon: Search,
    name: "Pinecone",
    role: "Vector DB",
    description: "AI-powered semantic search across all your feedback and content.",
  },
  {
    icon: Globe,
    name: "Vercel",
    role: "Deployment",
    description: "Zero-config deployments with edge functions, previews, and global CDN.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Powered by the <span className="gradient-text">best free tools</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Every integration runs on a generous free tier. No credit card required to get started.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.name}
              className="group transition-colors hover:border-primary/30"
            >
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{feature.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">{feature.role}</p>
                  </div>
                </div>
                <CardDescription className="leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
