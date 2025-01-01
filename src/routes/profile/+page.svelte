<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import type { PageData } from '../$types';
	import { Button } from '$lib/components/ui/button';
	import { LogOut } from 'lucide-svelte';

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

<Card.Root class="mx-auto max-w-96">
	<Card.Content class="relative">
		<form action="?/logout" method="POST">
			<Button variant="outline" size="icon" class="absolute right-5 top-5" type="submit">
				<LogOut />
				<span class="sr-only">Logout</span>
			</Button>
		</form>
		<Avatar.Root class="size-20">
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<h1 class="mt-2 text-2xl font-bold">{data.user.username}</h1>
		<p class="mt-1">{data.user.bio}</p>

		<h2 class="mt-4 text-2xl font-bold">Posts</h2>
		<ul class="mt-2 space-y-2">
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
	</Card.Content>
</Card.Root>
