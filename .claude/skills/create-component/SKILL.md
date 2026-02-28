---
name: create-component
description: Scaffold a new React component with test file following project patterns
---

Create a new component named $ARGUMENTS:

1. Determine the appropriate directory based on the component purpose:
   - `src/components/ui/` for generic UI primitives
   - `src/components/landing/` for landing page components
   - `src/components/poll/` for poll creation components
   - `src/components/vote/` for voting interaction components
   - `src/components/results/` for results display components
   - `src/components/layout/` for layout components (header, footer)

2. Create the component file with:
   - TypeScript interface for props
   - Functional component with proper exports
   - "use client" directive only if client interactivity is needed
   - Tailwind CSS for styling
   - shadcn/ui primitives where appropriate

3. Create a matching test file in `__tests__/` subdirectory:
   - Import from `@testing-library/react`
   - Test rendering, key props, and user interactions
   - Follow existing test patterns in the project
