import { db } from '$lib/server/db';
import { desc, ne } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { post } from '$lib/server/db/schema';

export const load: PageServerLoad = async ({ locals }) => {
	const userId = locals.user?.id ?? '';
	const posts = await db.query.post.findMany({
		orderBy: [desc(post.createdAt)],
		where: ne(post.userId, userId)
	});

	return { posts };
};
