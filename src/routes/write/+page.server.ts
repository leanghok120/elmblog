import { db } from '$lib/server/db';
import { post } from '$lib/server/db/schema';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { v4 as uuid } from 'uuid';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.session.userId) {
		return redirect(401, '/login');
	}
};

export const actions: Actions = {
	publish: async ({ request, locals }) => {
		const formData = await request.formData();
		const title = String(formData.get('title'));
		const content = String(formData.get('content'));

		if (!title || !content) {
			return fail(400, { message: 'Title or content is missing' });
		}

		await db.insert(post).values({
			id: uuid(),
			title,
			content,
			createdAt: new Date(),
			userId: locals.session.userId
		});

		return redirect(301, '/');
	}
};
