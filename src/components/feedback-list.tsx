"use client";

import { ThumbsUp, Bug, Lightbulb, Wrench, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Feedback } from "@/lib/supabase";

const categoryConfig: Record<string, { icon: typeof Bug; className: string }> = {
  bug: { icon: Bug, className: "border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/15" },
  feature: { icon: Lightbulb, className: "border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/15" },
  improvement: { icon: Wrench, className: "border-amber-500/30 bg-amber-500/10 text-amber-400 hover:bg-amber-500/15" },
  other: { icon: HelpCircle, className: "border-zinc-500/30 bg-zinc-500/10 text-zinc-400 hover:bg-zinc-500/15" },
};

const statusConfig: Record<string, string> = {
  open: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/15",
  in_progress: "border-amber-500/30 bg-amber-500/10 text-amber-400 hover:bg-amber-500/15",
  closed: "border-zinc-500/30 bg-zinc-500/10 text-zinc-400 hover:bg-zinc-500/15",
};

export function FeedbackList({
  items,
  onVote,
}: {
  items: Feedback[];
  onVote: (id: string) => void;
}) {
  if (items.length === 0) {
    return (
      <Card className="py-16">
        <CardContent className="flex flex-col items-center text-center">
          <Lightbulb className="h-12 w-12 text-muted-foreground/30" />
          <h3 className="mt-4 text-lg font-medium">No feedback yet</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Be the first to submit feedback!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const cat = categoryConfig[item.category] || categoryConfig.other;
        const Icon = cat.icon;
        return (
          <Card key={item.id} className="transition-colors hover:border-primary/20">
            <CardContent className="flex items-start gap-4 pt-5">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onVote(item.id)}
                className="flex h-auto flex-col items-center gap-1 px-3 py-2 hover:border-primary hover:text-primary"
              >
                <ThumbsUp className="h-3.5 w-3.5" />
                <span className="text-xs font-bold">{item.votes}</span>
              </Button>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <Badge variant="outline" className={`gap-1 text-[11px] ${cat.className}`}>
                    <Icon className="h-3 w-3" />
                    {item.category}
                  </Badge>
                  <Badge variant="outline" className={`text-[11px] ${statusConfig[item.status] || ""}`}>
                    {item.status.replace("_", " ")}
                  </Badge>
                </div>
                {item.content && (
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {item.content}
                  </p>
                )}
                <p className="mt-2 text-xs text-muted-foreground/60">
                  {new Date(item.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
