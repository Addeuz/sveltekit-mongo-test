<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session }) => {
		try {
			const res = await fetch(`http://localhost:3000/api/test`);
			if (res.ok) {
				console.log(await res.json());

				return {
					props: {}
				};
			}
		} catch (error) {
			console.error(error);
		}
		return {};
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { variables } from '$lib/environment';

	const testMongo = async () => {
		console.log('janne', input);
		try {
			const res = await fetch('/api/test', {
				method: 'POST',
				body: JSON.stringify({
					message: input
				})
			});

			if (res.ok) {
				console.log(await res.json());
			}
		} catch (error) {
			console.error(error);
		}
	};

	let input = '';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<input type="text" bind:value={input} placeholder="Test" />
<button on:click={testMongo}>Testa</button>
<img src='/colorpatterns-01.jpeg' alt='Janne' />
