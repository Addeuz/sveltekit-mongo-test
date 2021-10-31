<script lang="ts">
	import { dev } from '$app/env';

	import { page, session } from '$app/stores';

	import { textAndAudio } from '$lib/audio';

	import type { AnswerAttributes } from 'src/global';
	import { onMount } from 'svelte';
	import TextAndAudio from './TextAndAudio.svelte';

	export let completions: AnswerAttributes[];

	onMount(async () => {
		const res = await fetch('/api/run/complete', {
			method: 'POST',
			body: JSON.stringify({ completions, taskType: $page.params.type }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (res.ok) {
			console.log(await res.json());
		}
	});
</script>

<div class="h-screen flex items-center justify-center flex-col gap-6">
	<div class="text-2xl">
		<TextAndAudio src={textAndAudio[30].audio} text={textAndAudio[30].text} autoplay={true} />
	</div>
	<div>
		<span>Congratulations, you have completed {$session.user.completed.length} task(s)!</span>
	</div>
	<button
		class="bg-green-400 py-4 px-6 rounded-xl"
		on:click={() => location.replace(dev ? 'http://localhost:3000' : 'https://didunas.vercel.app/')}
	>
		Home
	</button>
</div>
