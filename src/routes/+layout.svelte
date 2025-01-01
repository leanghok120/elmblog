<script lang="ts">
	import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<ThemeToggle />
<ModeWatcher />
{@render children()}
