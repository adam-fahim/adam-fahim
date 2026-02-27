import { MessageSquare } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2.5 font-bold">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <MessageSquare className="h-3.5 w-3.5" />
          </div>
          Feedbase
        </div>
        <p className="text-sm text-muted-foreground">
          Open-source feedback board built with the $20/mo startup stack.
        </p>
        <Separator className="my-2 max-w-xs" />
        <p className="text-xs text-muted-foreground/60">
          Next.js &middot; Clerk &middot; Supabase &middot; Stripe &middot; Resend &middot; PostHog &middot; Sentry &middot; Upstash &middot; Pinecone
        </p>
      </div>
    </footer>
  );
}
