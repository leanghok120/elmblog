<script lang="ts">
	import type { PageData } from './$types';

	let { data }: PageData = $props();

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat('en-GB', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		}).format(date);
	}
</script>

<h1 class="text-4xl font-black">Home</h1>

<ul class="mt-5 space-y-2 text-lg">
	{#if data.posts.length === 0}
		<li>No posts found</li>
	{/if}

	{#each data.posts as post}
		<li class="flex items-center justify-between">
			<a href="/posts/{post.id}" class="underline">{post.title}</a>
			<p class="text-gray-500">{formatDate(post.createdAt)}</p>
		</li>
	{/each}
</ul>
