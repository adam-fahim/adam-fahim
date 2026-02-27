"use client";

import { SignUp } from "@clerk/nextjs";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignUpPage() {
  const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!hasClerk) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Sign Up</CardTitle>
            <CardDescription>
              Configure your{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-primary">
                NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
              </code>{" "}
              in <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-primary">.env.local</code>{" "}
              to enable authentication.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <SignUp />
    </div>
  );
}
