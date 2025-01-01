<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import type { PageData } from '../$types';

	let { data }: PageData = $props();
</script>

<Card.Root class="mx-auto max-w-96">
	<Card.Content>
		<Avatar.Root class="size-20">
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<h1 class="mt-2 text-2xl font-bold">{data.user.username}</h1>
		<p class="mt-1">A quick bio</p>

		<h2 class="mt-4 text-2xl font-bold">Posts</h2>
		<ul class="mt-2 space-y-2 underline">
			<li><a href="#">Markdown</a></li>
			<li><a href="#">Switching from neovim to vscode</a></li>
			<li><a href="#">Learning sveltekit</a></li>
		</ul>
	</Card.Content>
</Card.Root>
