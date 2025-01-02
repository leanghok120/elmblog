<script lang="ts">
	import type { PageData } from './$types';
	import { Button } from '$lib/components/ui/button';
	import { Trash } from 'lucide-svelte';
	import { enhance } from '$app/forms';

	let { data }: PageData = $props();
	let p = data.p;
	let u = data.u;
	let user = data.user;

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat('en-GB', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		}).format(date);
	}
</script>

<h1 class="text-4xl font-black">{p.title}</h1>
<div class="flex gap-4 font-bold text-gray-500">
	<p class="italic">{formatDate(p.createdAt)}</p>
	<p>{u.username}</p>
</div>
<p class="mt-5">{p.content}</p>
{#if user && user.id === p.userId}
	<form action="?/deletePost" method="POST" class="mt-5" use:enhance>
		<Button variant="outline" size="icon" type="submit">
			<Trash />
			<span class="sr-only">Delete post</span></Button
		>
	</form>
{/if}
