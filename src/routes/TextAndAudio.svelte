<script lang="ts">
	import AudioPlayer from '$lib/components/AudioPlayer.svelte';

	export let text: string;
	export let src: string;
	export let autoplay = false;
</script>

<span class="whitespace-pre-line">{text}</span>
<AudioPlayer {src} {autoplay} />
