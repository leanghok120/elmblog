import { db } from '$lib/server/db';
import { desc, eq } from 'drizzle-orm';
import type { PageServerLoad } from './signup/$types';
import { post } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) {
		return redirect(301, '/login');
	}

	const posts = await db.query.post.findMany({
		orderBy: [desc(post.createdAt)],
		where: eq(post.userId, locals.user.id)
	});

	return { posts };
};
