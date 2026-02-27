import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PLANS } from "@/lib/stripe";

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Start free. Upgrade when you need more power.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {Object.entries(PLANS).map(([key, plan]) => {
            const isPro = key === "pro";
            return (
              <Card
                key={key}
                className={isPro ? "border-primary shadow-lg shadow-primary/10 relative" : ""}
              >
                <CardHeader>
                  {isPro && (
                    <Badge className="absolute -top-3 left-6 shadow-sm">Most Popular</Badge>
                  )}
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-2">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-6" />
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={isPro ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href="/sign-up">
                      {isPro ? "Start Pro Trial" : "Get Started"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
