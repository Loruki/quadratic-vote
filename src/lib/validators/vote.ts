import { z } from 'zod';

export const submitVoteSchema = z.object({
  allocations: z.array(
    z.object({
      optionId: z.string(),
      numVotes: z.number().int().min(0),
    }),
  ),
});

export type SubmitVoteInput = z.infer<typeof submitVoteSchema>;
