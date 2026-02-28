import { pgTable, text, integer, boolean, timestamp } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2';

export const polls = pgTable('polls', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  title: text('title').notNull(),
  description: text('description'),
  creditsPerVoter: integer('credits_per_voter').notNull().default(100),
  adminToken: text('admin_token')
    .notNull()
    .$defaultFn(() => createId()),
  isClosed: boolean('is_closed').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  closesAt: timestamp('closes_at'),
});

export const options = pgTable('options', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  pollId: text('poll_id')
    .notNull()
    .references(() => polls.id, { onDelete: 'cascade' }),
  label: text('label').notNull(),
  position: integer('position').notNull(),
});

export const votes = pgTable('votes', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  pollId: text('poll_id')
    .notNull()
    .references(() => polls.id, { onDelete: 'cascade' }),
  voterId: text('voter_id').notNull(),
  optionId: text('option_id')
    .notNull()
    .references(() => options.id, { onDelete: 'cascade' }),
  numVotes: integer('num_votes').notNull(),
  creditsSpent: integer('credits_spent').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
