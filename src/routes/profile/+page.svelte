<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Dialog from '$lib/components/ui/dialog';
	import type { PageData } from '../$types';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { LogOut, Settings } from 'lucide-svelte';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { enhance } from '$app/forms';

	let { data }: PageData = $props();

	let username = $state(data.user.username);
	let bio = $state(data.user.bio);

	$effect(() => {
		username = data.user.username;
		bio = data.user.bio;
	});

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
		<Dialog.Root>
			<Dialog.Trigger
				class={`${buttonVariants({ variant: 'outline', size: 'icon' })} absolute right-5 top-5`}
			>
				<Settings />
			</Dialog.Trigger>
			<Dialog.Content class="sm:max-w-[425px]">
				<Dialog.Header>
					<Dialog.Title>Edit profile</Dialog.Title>
					<Dialog.Description>
						Make changes to your profile here. Click save when you're done.
					</Dialog.Description>
				</Dialog.Header>
				<form action="?/updateProfile" method="POST" class="grid gap-4 py-4" use:enhance>
					<div class="items-center gap-4">
						<Label for="username" class="text-right">Username</Label>
						<Input id="username" name="username" bind:value={username} class="col-span-3" />
					</div>
					<div class="items-center gap-4">
						<Label for="bio" class="text-right">Bio</Label>
						<Input id="bio" name="bio" bind:value={bio} class="col-span-3" />
					</div>
					<Button type="submit">Save changes</Button>
					<Button type="submit" formaction="?/logout" variant="destructive">
						<LogOut />
						Logout
					</Button>
				</form>
			</Dialog.Content>
		</Dialog.Root>
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
