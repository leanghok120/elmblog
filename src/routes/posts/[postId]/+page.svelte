<script lang="ts">
	import type { PageData } from './$types';

	let { data }: PageData = $props();
	let post = data.p;

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
<p class="font-bold italic text-gray-500">{formatDate(post.createdAt)}</p>
<p class="mt-5">{post.content}</p>
