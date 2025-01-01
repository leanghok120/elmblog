import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const post = pgTable('post', {
	id: text('id').primaryKey(),
	title: text('title').notNull(),
	content: text('content').notNull(),
	createdAt: timestamp('created_at', { withTimezone: true, mode: 'date' }).notNull(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id)
});

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull(),
	bio: text('bio').default('A quick simple bio')
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
