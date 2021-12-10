<script lang="ts">
	import AudioPlayer from '$lib/components/AudioPlayer.svelte';
	import { onMount } from 'svelte';

	export let text: string;
	export let src: string;
	export let autoplay = false;

	onMount(() => {
		console.log(src);
		const janne = new Audio(src);
		console.log(janne);
	});
</script>

<div class="flex justify-center items-center gap-2">
	<span class="whitespace-pre-line">{text}</span>
	<AudioPlayer {src} {autoplay} />
</div>
