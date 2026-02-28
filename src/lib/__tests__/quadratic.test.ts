import { describe, it, expect } from 'vitest';
import {
  creditCost,
  maxVotes,
  totalCreditsSpent,
  validateBudget,
  remainingCredits,
} from '../quadratic';

describe('creditCost', () => {
  it('returns 0 for 0 votes', () => {
    expect(creditCost(0)).toBe(0);
  });

  it('returns 1 for 1 vote', () => {
    expect(creditCost(1)).toBe(1);
  });

  it('returns n^2 for n votes', () => {
    expect(creditCost(3)).toBe(9);
    expect(creditCost(5)).toBe(25);
    expect(creditCost(10)).toBe(100);
  });
});

describe('maxVotes', () => {
  it('returns 10 for 100 credits', () => {
    expect(maxVotes(100)).toBe(10);
  });

  it('floors non-perfect squares', () => {
    expect(maxVotes(99)).toBe(9);
    expect(maxVotes(50)).toBe(7);
  });

  it('returns 0 for 0 credits', () => {
    expect(maxVotes(0)).toBe(0);
  });
});

describe('totalCreditsSpent', () => {
  it('sums quadratic costs across allocations', () => {
    const allocations = [
      { optionId: 'a', numVotes: 3 }, // 9
      { optionId: 'b', numVotes: 2 }, // 4
      { optionId: 'c', numVotes: 1 }, // 1
    ];
    expect(totalCreditsSpent(allocations)).toBe(14);
  });

  it('returns 0 for empty allocations', () => {
    expect(totalCreditsSpent([])).toBe(0);
  });
});

describe('validateBudget', () => {
  it('returns true when within budget', () => {
    const allocations = [
      { optionId: 'a', numVotes: 3 }, // 9
      { optionId: 'b', numVotes: 2 }, // 4
    ];
    expect(validateBudget(allocations, 100)).toBe(true);
  });

  it('returns true when exactly at budget', () => {
    const allocations = [{ optionId: 'a', numVotes: 10 }]; // 100
    expect(validateBudget(allocations, 100)).toBe(true);
  });

  it('returns false when over budget', () => {
    const allocations = [{ optionId: 'a', numVotes: 11 }]; // 121
    expect(validateBudget(allocations, 100)).toBe(false);
  });
});

describe('remainingCredits', () => {
  it('calculates remaining credits correctly', () => {
    const allocations = [
      { optionId: 'a', numVotes: 3 }, // 9
      { optionId: 'b', numVotes: 4 }, // 16
    ];
    expect(remainingCredits(allocations, 100)).toBe(75);
  });
});
