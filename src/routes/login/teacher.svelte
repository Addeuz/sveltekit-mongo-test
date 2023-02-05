<script lang="ts">
	import SubmitButton from '$lib/components/SubmitButton.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';

	onMount(() => {
		if (browser) {
			const language = localStorage.getItem('language');
			if (language === null) {
				goto('/login/select-language');
			}
		}
	});

	let fields = { username: '', password: '' };
	let submitted: boolean = false;
	let error: string;

	let loading: boolean = false;

	async function login() {
		error = undefined;
		loading = true;
		// validation
		submitted = true;
		try {
			const res = await fetch('/api/auth/login', {
				method: 'POST',
				body: JSON.stringify({
					...fields
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (res.ok) {
				location.reload();
			} else {
				const data = await res.json();
				error = data.message;
				loading = false;
				throw error;
			}
		} catch (err) {
			submitted = false;
		}
	}
</script>

<input
	type="text"
	name="username"
	bind:value={fields.username}
	on:change={() => {
		submitted = false;
	}}
	placeholder="Username"
/>
<input
	type="password"
	name="password"
	bind:value={fields.password}
	on:change={() => {
		submitted = false;
	}}
	placeholder="Password"
/>

{#if error}
	<p class="text-red-400">{error}</p>
{/if}
<SubmitButton action={login} disabled={submitted} {loading}>Login</SubmitButton>
