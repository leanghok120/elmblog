<script lang="ts">
	import type { PageData } from './$types';

	let { data }: PageData = $props();
	let post = data.p;
	let user = data.u;

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat('en-GB', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		}).format(date);
	}
</script>

<h1 class="text-4xl font-black">{post.title}</h1>
<div class="flex gap-4 font-bold text-gray-500">
	<p class="italic">{formatDate(post.createdAt)}</p>
	<p>{user.username}</p>
</div>
<p class="mt-5">{post.content}</p>
