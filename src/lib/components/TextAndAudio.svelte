<script lang="ts">
	import AudioPlayer from '$lib/components/AudioPlayer.svelte';

	export let text: string;
	export let src: string;
	export let autoplay = false;
</script>

<div class="flex justify-center items-center gap-2 font-grund text-xl">
	<span class="whitespace-pre-line">{text}</span>
	<AudioPlayer {src} {autoplay} />
</div>
