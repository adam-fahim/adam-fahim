import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const stack = [
  { name: "Next.js", desc: "React framework", cost: "Free" },
  { name: "Clerk", desc: "Authentication", cost: "Free" },
  { name: "Supabase", desc: "Database", cost: "Free" },
  { name: "Stripe", desc: "Payments", cost: "2.9%/txn" },
  { name: "Resend", desc: "Emails", cost: "Free" },
  { name: "PostHog", desc: "Analytics", cost: "Free" },
  { name: "Sentry", desc: "Error tracking", cost: "Free" },
  { name: "Upstash", desc: "Redis", cost: "Free" },
  { name: "Pinecone", desc: "Vector DB", cost: "Free" },
  { name: "Vercel", desc: "Deployment", cost: "Free" },
  { name: "GitHub", desc: "Version control", cost: "Free" },
  { name: "Cloudflare", desc: "DNS", cost: "Free" },
];

export function TechStack() {
  return (
    <section id="stack" className="border-t border-border px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The <span className="gradient-text">$20/mo</span> startup stack
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Everything you need to build, launch, and scale — almost entirely for free.
          </p>
        </div>

        <Card className="mt-12 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead className="text-right">Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stack.map((item) => (
                <TableRow key={item.name}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-muted-foreground">{item.desc}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant={item.cost === "Free" ? "secondary" : "outline"} className={
                      item.cost === "Free" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/15" : ""
                    }>
                      {item.cost}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  );
}
