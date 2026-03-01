# Quadratic Voting — Project Context

## What is Quadratic Voting?

Quadratic voting (QV) is a collective decision-making mechanism where participants receive a budget of "voice credits" and can allocate them across options. The cost of votes follows a quadratic function: **N votes on a single option costs N^2 credits.**

This means:
- 1 vote = 1 credit
- 2 votes = 4 credits
- 3 votes = 9 credits
- 10 votes = 100 credits

The key insight: QV lets people express **intensity of preference**, not just direction. You can put all your credits on one thing you care deeply about, or spread them across many things you mildly prefer.

## Why it matters

Traditional voting (1 person = 1 vote per option) has a fundamental flaw: it treats all preferences as equal. Someone who slightly prefers option A counts the same as someone whose livelihood depends on option A.

QV solves this by making concentrated votes expensive, naturally reflecting the economic concept of diminishing marginal returns.

## Use cases

| Use case | Who | Example |
|----------|-----|---------|
| Team prioritization | Product teams, startups | "We have 20 feature ideas. Everyone gets 100 credits. What should we build?" |
| Community decisions | HOAs, co-ops, clubs | "How should we spend the community budget?" |
| Classroom exercises | Professors, teachers | "Teaching mechanism design — let students experience QV firsthand" |
| DAO governance | Crypto communities | "Vote on treasury allocation proposals" |
| Conference planning | Event organizers | "Which talks should we include in the schedule?" |
| Retrospectives | Agile teams | "What should we improve? Vote with credits, not thumbs" |

## Competitive landscape

| Tool | Strengths | Weaknesses |
|------|-----------|------------|
| RadicalxChange QV tool | Academic credibility, open-source | Dated UI, complex setup, crypto-focused |
| Pol.is | Great for opinion mapping | Not truly QV, more about consensus |
| Snapshot | Crypto-native governance | Requires wallet, crypto-only audience |
| Google Forms | Universal, simple | No QV mechanism, manual calculation |
| Slido / Mentimeter | Good UX, real-time | No QV, just basic polling |

## Our positioning

**The modern, beautiful, zero-friction quadratic voting tool.**

- No sign-up, no login, no wallet — just share a link
- Interactive demo that teaches QV in 30 seconds
- Clean, open-source codebase that developers can learn from and fork
- Deploy your own instance in 5 minutes

## Target audiences

### 1. Poll creators
- **Who:** Team leads, professors, community organizers, DAO members
- **Need:** Run a QV poll quickly without explaining the math
- **Key flow:** Create poll → Get shareable link → Share → View results
- **Success:** "I set up a quadratic vote for my team in under 2 minutes"

### 2. Voters
- **Who:** Anyone who receives a poll link
- **Need:** Understand QV, vote, and move on — ideally under 2 minutes
- **Key flow:** Open link → Understand credits → Allocate → Submit → See results
- **Success:** "I got it immediately — the cost visualization made it click"

### 3. Developers
- **Who:** Engineers who find the repo on GitHub
- **Need:** Learn from clean code, fork for their own use, contribute
- **Key flow:** Find repo → Read README → Clone → Run locally → Understand architecture
- **Success:** "I had it running locally in 5 minutes and the code is easy to follow"
