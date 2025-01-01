import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { post } from '$lib/server/db/schema';

export const load: PageServerLoad = async ({ params }) => {
	const postId = params.postId;
	const p = await db.query.post.findFirst({ where: eq(post.id, postId) });

	return { p };
};
