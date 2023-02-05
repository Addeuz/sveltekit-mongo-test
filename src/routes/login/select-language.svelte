<script lang="ts">
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import { languages } from '$lib/i18n';
	import { onMount } from 'svelte';

	onMount(() => {
		if (browser) {
			const language = localStorage.getItem('language');
			if (language !== null) {
				goto('/login');
			}
		}
	});
</script>

<h2>Select language</h2>

<div class="flex flex-col gap-4">
	{#each languages as { language, icon, text }}
		<button
			class="login-button"
			on:click={() => {
				localStorage.setItem('language', language);
				goto('/login');
			}}
		>
			<span>{icon}</span>
			<span>{text}</span>
		</button>
	{/each}
</div>
