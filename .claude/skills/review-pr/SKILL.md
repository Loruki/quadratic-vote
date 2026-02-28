---
name: review-pr
description: Review a GitHub pull request for quality, security, and style
---

Review GitHub PR $ARGUMENTS:

1. Use `gh pr view $ARGUMENTS --json title,body,additions,deletions,files` to get PR details
2. Use `gh pr diff $ARGUMENTS` to see the full diff
3. Review for:
   - **Code quality**: readability, naming, unnecessary complexity
   - **Security**: injection, XSS, secrets in code, OWASP top 10
   - **TypeScript**: proper types (no `any`), null safety, correct generics
   - **Performance**: unnecessary re-renders, N+1 queries, missing indexes
   - **Testing**: are new features covered? Are edge cases tested?
   - **Architecture**: does it follow the patterns in CLAUDE.md?
4. Provide feedback as a structured list with file:line references
5. Suggest specific fixes with code snippets where appropriate
6. Rate overall: approve, request changes, or comment
