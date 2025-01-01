import { db } from '$lib/server/db';
import { desc, eq } from 'drizzle-orm';
import type { PageServerLoad } from './signup/$types';
import { post } from '$lib/server/db/schema';

export const load: PageServerLoad = async ({ locals }) => {
	const posts = await db.query.post.findMany({
		orderBy: [desc(post.createdAt)],
		where: eq(post.userId, locals.user.id)
	});

	return { posts };
};
