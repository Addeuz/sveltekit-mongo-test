<script context="module" lang="ts">
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
	import SubmitButton from '$lib/components/SubmitButton.svelte';

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
				// console.log(await res.json());
				// const data = await res.json();
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

<div class="flex flex-col items-center justify-center h-screen min-w-full ">
	<h1 class="text-4xl font-semibold">DIDUNAS</h1>
	<div class="form flex flex-col items-center space-y-5 my-6">
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
	</div>
</div>
