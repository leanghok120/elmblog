import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import type { Actions, PageServerLoad } from './$types';
import { post, user } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, locals }) => {
	const postId = params.postId;
	const p = await db.query.post.findFirst({ where: eq(post.id, postId) });
	const u = await db.query.user.findFirst({ where: eq(user.id, p.userId) });

	return { p, u, user: locals.user };
};

export const actions: Actions = {
	deletePost: async ({ params }) => {
		const postId = params.postId;
		await db.delete(post).where(eq(post.id, postId));

		return redirect(301, '/');
	}
};
