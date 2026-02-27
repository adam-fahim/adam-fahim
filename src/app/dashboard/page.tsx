"use client";

import { useState, useCallback } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FeedbackForm } from "@/components/feedback-form";
import { FeedbackList } from "@/components/feedback-list";
import type { Feedback } from "@/lib/supabase";

const DEMO_FEEDBACK: Feedback[] = [
  {
    id: "1",
    user_id: "demo",
    title: "Add dark mode support",
    content: "It would be great to have a dark mode option for better readability at night.",
    category: "feature",
    status: "open",
    votes: 24,
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: "2",
    user_id: "demo",
    title: "Dashboard loading is slow on mobile",
    content: "The dashboard takes 3-4 seconds to load on my phone. Could use some optimization.",
    category: "bug",
    status: "in_progress",
    votes: 18,
    created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
  },
  {
    id: "3",
    user_id: "demo",
    title: "Improve onboarding flow",
    content: "New users seem confused about how to create their first project. A guided tour would help.",
    category: "improvement",
    status: "open",
    votes: 12,
    created_at: new Date(Date.now() - 86400000 * 7).toISOString(),
  },
  {
    id: "4",
    user_id: "demo",
    title: "Export feedback to CSV",
    content: "We need to be able to export all feedback data to CSV for our quarterly reviews.",
    category: "feature",
    status: "open",
    votes: 9,
    created_at: new Date(Date.now() - 86400000 * 10).toISOString(),
  },
];

export default function DashboardPage() {
  const [feedback, setFeedback] = useState<Feedback[]>(DEMO_FEEDBACK);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = useCallback(
    (data: { title: string; content: string; category: Feedback["category"] }) => {
      const newItem: Feedback = {
        id: crypto.randomUUID(),
        user_id: "demo",
        title: data.title,
        content: data.content,
        category: data.category,
        status: "open",
        votes: 0,
        created_at: new Date().toISOString(),
      };
      setFeedback((prev) => [newItem, ...prev]);
    },
    [],
  );

  const handleVote = useCallback((id: string) => {
    setFeedback((prev) =>
      prev.map((item) => (item.id === id ? { ...item, votes: item.votes + 1 } : item)),
    );
  }, []);

  const filtered = searchQuery
    ? feedback.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.content.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : feedback;

  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Feedback Board</h1>
        <p className="mt-1 text-muted-foreground">
          Collect and manage product feedback from your users.
        </p>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search feedback..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <FeedbackList items={filtered} onVote={handleVote} />
        <div className="order-first lg:order-last">
          <FeedbackForm onSubmit={handleSubmit} />
        </div>
      </div>
    </main>
  );
}
