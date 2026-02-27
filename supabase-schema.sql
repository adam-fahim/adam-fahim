-- Feedbase: Supabase schema
-- Run this in the Supabase SQL Editor to set up your database.

create table if not exists feedback (
  id uuid default gen_random_uuid() primary key,
  user_id text not null,
  title text not null,
  content text default '',
  category text default 'other' check (category in ('bug', 'feature', 'improvement', 'other')),
  status text default 'open' check (status in ('open', 'in_progress', 'closed')),
  votes integer default 0,
  created_at timestamptz default now()
);

alter table feedback enable row level security;

create policy "Anyone can read feedback" on feedback
  for select using (true);

create policy "Authenticated users can insert feedback" on feedback
  for insert with check (true);

create policy "Users can update their own feedback" on feedback
  for update using (user_id = current_setting('request.jwt.claims', true)::json->>'sub');

create index idx_feedback_votes on feedback (votes desc);
create index idx_feedback_created on feedback (created_at desc);
create index idx_feedback_user on feedback (user_id);
