import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { ratelimit } from "@/lib/upstash";

export async function GET() {
  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: "Supabase not configured", data: [] },
      { status: 200 },
    );
  }

  const { data, error } = await supabaseAdmin
    .from("feedback")
    .select("*")
    .order("votes", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "anonymous";

  if (ratelimit) {
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
    }
  }

  const body = await request.json();
  const { title, content, category, user_id } = body;

  if (!title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  if (!supabaseAdmin) {
    return NextResponse.json(
      { message: "Feedback received (Supabase not configured)", data: { id: crypto.randomUUID(), ...body } },
      { status: 201 },
    );
  }

  const { data, error } = await supabaseAdmin
    .from("feedback")
    .insert({ title, content, category: category || "other", user_id: user_id || "anonymous", status: "open", votes: 0 })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
