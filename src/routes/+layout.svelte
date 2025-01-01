<script lang="ts">
	import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<main class="mx-auto min-h-screen max-w-2xl p-5">
	<ThemeToggle />
	<ModeWatcher />

	<nav>
		<ul class="flex gap-3">
			<li><a href="/">Home</a></li>
			<li><a href="/discover">Discover</a></li>
			<li><a href="/write">Write</a></li>
			<li><a href="/profile">Profile</a></li>
		</ul>
	</nav>

	<div class="mt-10">
		{@render children()}
	</div>
</main>
