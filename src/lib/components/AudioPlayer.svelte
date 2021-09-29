<script lang="ts">
	import FaRegPlayCircle from 'svelte-icons/fa/FaRegPlayCircle.svelte';
	import FaRegPauseCircle from 'svelte-icons/fa/FaRegPauseCircle.svelte';

	export let src: string;
	export let autoplay = false;

	let player: HTMLAudioElement;

	let paused = autoplay;

	// $: {
	// 	paused = player.paused;

	// 	console.log(paused);
	// }
</script>

<button
	class="w-12 p-1 rounded-md border-gray-400 border-2 hover:bg-blue-400"
	on:click={() => {
		if (paused) {
			player.play();
			paused = false;
		} else {
			player.pause();
			paused = true;
			player.currentTime = 0;
		}
	}}
>
	{#if paused}
		<FaRegPlayCircle />
	{:else}
		<FaRegPauseCircle />
	{/if}
</button>

<audio bind:this={player} {src} controls {autoplay} class="hidden" bind:paused>
	<track kind="captions" />
</audio>
