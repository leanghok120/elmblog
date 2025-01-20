<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
</script>

<h1 class="text-4xl font-black text-primary">Write</h1>
<form action="?/publish" method="POST" use:enhance>
	<Input placeholder="Title" class="mt-6" name="title" />
	<Textarea placeholder="Write here..." class="mt-4 h-52" name="content" />
	<Button class="mt-5" type="submit">Publish</Button>
</form>
