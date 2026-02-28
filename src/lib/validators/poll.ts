import { z } from 'zod';

export const createPollSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title is too long'),
  description: z.string().max(2000).optional(),
  creditsPerVoter: z.number().int().min(1).max(1000).default(100),
  options: z
    .array(z.string().min(1, 'Option cannot be empty').max(200))
    .min(2, 'At least 2 options are required')
    .max(20, 'Maximum 20 options allowed'),
});

export type CreatePollInput = z.infer<typeof createPollSchema>;
