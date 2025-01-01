import { db } from '$lib/server/db';
import { post } from '$lib/server/db/schema';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { v4 as uuid } from 'uuid';

export const actions: Actions = {
	publish: async ({ request }) => {
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
			createdAt: new Date()
		});

		return redirect(301, '/');
	}
};
