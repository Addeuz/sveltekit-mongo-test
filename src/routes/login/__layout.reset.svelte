<script lang="ts" context="module">
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import Text from '$lib/components/Text.svelte';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session }) => {
		if (session.authenticated) {
			return {
				status: 302,
				redirect: '/'
			};
		}

		return {};
	};
</script>

<script lang="ts">
	let accepted = browser && localStorage.getItem('privacy-policy') === 'accepted';

	$: open = !accepted;
</script>

<div class="flex flex-col items-center justify-center h-screen min-w-full ">
	<img src="/logo.png" alt="Didunas logo" class="w-1/5 cursor-pointer" on:click={() => goto('/')} />
	<div class="form flex flex-col items-center space-y-5 my-6">
		<slot />
	</div>
	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://didunas.eu/"
		class="mt-20 text-blue-500 underline"><Text key="what_is" /></a
	>
</div>
<!--
<Modal bind:open>
	<PrivacyPolicy bind:accepted />
</Modal> -->
