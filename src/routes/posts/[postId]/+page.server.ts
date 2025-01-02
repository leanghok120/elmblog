import { db } from '$lib/server/db';
import { desc, eq } from 'drizzle-orm';
import type { Actions, PageServerLoad } from './$types';
import { post, user } from '$lib/server/db/schema';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, locals }) => {
	const postId = params.postId;
	const p = await db.query.post.findFirst({
		where: eq(post.id, postId),
		orderBy: [desc(post.createdAt)]
	});
	if (!p) {
		throw fail(404, { message: 'Post not found' });
	}

	const u = await db.query.user.findFirst({ where: eq(user.id, p.userId) });
	if (!u) {
		throw fail(404, { message: 'User not found' });
	}

	return { p, u, user: locals.user };
};

export const actions: Actions = {
	deletePost: async ({ params }) => {
		const postId = params.postId;
		await db.delete(post).where(eq(post.id, postId));

		return redirect(301, '/');
	}
};
