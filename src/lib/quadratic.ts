/**
 * Core quadratic voting math.
 *
 * In quadratic voting, the cost of N votes on a single option is N^2 credits.
 * This makes it expensive to concentrate votes, encouraging voters to spread
 * their preferences across multiple options.
 */

/** Calculate the credit cost for a given number of votes. */
export function creditCost(numVotes: number): number {
  return numVotes * numVotes;
}

/** Calculate the maximum votes affordable with a given credit budget. */
export function maxVotes(credits: number): number {
  return Math.floor(Math.sqrt(credits));
}

export interface Allocation {
  optionId: string;
  numVotes: number;
}

/** Calculate total credits spent across all allocations. */
export function totalCreditsSpent(allocations: Allocation[]): number {
  return allocations.reduce((sum, a) => sum + creditCost(a.numVotes), 0);
}

/** Validate that allocations don't exceed the credit budget. */
export function validateBudget(allocations: Allocation[], budget: number): boolean {
  return totalCreditsSpent(allocations) <= budget;
}

/** Calculate remaining credits after allocations. */
export function remainingCredits(allocations: Allocation[], budget: number): number {
  return budget - totalCreditsSpent(allocations);
}
