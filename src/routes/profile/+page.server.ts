import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../signup/$types';
import * as auth from '$lib/server/auth';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import { post, user } from '$lib/server/db/schema';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return redirect(301, '/login');
	}

	const posts = await db.query.post.findMany({ where: eq(post.userId, event.locals.user.id) });

	return { user: event.locals.user, posts };
};

export const actions: Actions = {
	updateProfile: async ({ request, locals }) => {
		const formData = await request.formData();
		const username = String(formData.get('username'));
		const bio = String(formData.get('bio'));

		if (!username || !bio) {
			return fail(400, { message: 'Username or bio is required' });
		}

		if (!validateUsername(username)) {
			return fail(400, { message: 'Invalid username' });
		}

		await db.update(user).set({ username, bio }).where(eq(user.id, locals.user.id));
		return { success: true };
	},

	logout: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}

		await auth.invalidateSession(event.locals.session.id);
		auth.deleteSessionTokenCookie(event);

		return redirect(301, '/login');
	}
};

function validateUsername(username: unknown): username is string {
	return (
		typeof username === 'string' &&
		username.length >= 3 &&
		username.length <= 31 &&
		/^[a-z0-9_-]+$/.test(username)
	);
}
