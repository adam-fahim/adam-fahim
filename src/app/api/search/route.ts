import { NextRequest, NextResponse } from "next/server";
import { getIndex } from "@/lib/pinecone";
import { ratelimit } from "@/lib/upstash";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "anonymous";

  if (ratelimit) {
    const { success } = await ratelimit.limit(`search:${ip}`);
    if (!success) {
      return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
    }
  }

  const { query } = await request.json();

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  const index = getIndex();
  if (!index) {
    return NextResponse.json({
      message: "Pinecone not configured — returning empty results",
      results: [],
    });
  }

  try {
    const results = await index.searchRecords({
      query: { topK: 10, inputs: { text: query } },
    });
    return NextResponse.json({ results: results.result?.hits || [] });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Search failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
