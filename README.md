# Quadratic Vote

**The quadratic voting tool for people who've never heard of quadratic voting.**

Most polls treat every preference as equal — your "sure, that's fine" counts the same as someone else's "this is critical to me." Quadratic voting fixes this. It lets people express *how much* they care, not just *what* they prefer, by making concentrated votes expensive: 1 vote = 1 credit, 2 votes = 4 credits, 3 votes = 9 credits.

QV has been tested in Colorado's legislature, Gitcoin's $50M+ grant rounds, Taiwan's participatory budgeting, and Optimism's retroactive funding. The mechanism works. But it's still trapped behind steep on-ramps — crypto wallets, academic UIs, or tools that assume you already know what QV is.

We're building the missing piece of the QV ecosystem: **a zero-friction experience where you share a link, vote on your phone, and understand quadratic voting by doing it.** No sign-up, no wallet, no docs. The interface teaches the mechanism.

## Vision

This project has two layers:

1. **Now** — The best QV experience for first-timers. Mobile-first, inline education, complete in under 2 minutes.
2. **Next** — QV as a decision primitive for AI agents. Agents creating polls, agents casting votes, multi-agent systems using quadratic cost to express preference intensity. The math doesn't care if the voter is a human or a model.

## Tech stack

Next.js 15 (App Router) · TypeScript · Tailwind v4 · shadcn/ui · Supabase (Postgres) · Drizzle ORM · Vercel

## Getting started

```bash
git clone https://github.com/Loruki/quadratic-vote.git
cd quadratic-vote
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contributing

This is an open-source project and part of the broader QV ecosystem — alongside RadicalxChange, Civicbase, Snapshot, and others all working to make collective decisions fairer. Contributions, forks, and experiments are welcome.
