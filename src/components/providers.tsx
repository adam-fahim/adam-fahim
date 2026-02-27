"use client";

import { useEffect } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { initPostHog } from "@/lib/posthog";

function PostHogInit() {
  useEffect(() => {
    initPostHog();
  }, []);
  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const hasClerkKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  const content = (
    <TooltipProvider>
      <PostHogInit />
      {children}
    </TooltipProvider>
  );

  if (!hasClerkKey) {
    return content;
  }

  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      {content}
    </ClerkProvider>
  );
}
