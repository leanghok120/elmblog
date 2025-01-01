import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../signup/$types';
import * as auth from '$lib/server/auth';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import { post } from '$lib/server/db/schema';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return redirect(301, '/login');
	}

	const posts = await db.query.post.findMany({ where: eq(post.userId, event.locals.user.id) });

	return { user: event.locals.user, posts };
};

export const actions: Actions = {
	logout: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}

		await auth.invalidateSession(event.locals.session.id);
		auth.deleteSessionTokenCookie(event);

		return redirect(301, '/login');
	}
};
