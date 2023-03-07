<script lang="ts">
	import { page } from '$app/stores';
	import SubmitButton from '$lib/components/SubmitButton.svelte';

	let fields = { username: $page.query.get('username') ?? '', password: 'MonkeyApple543!' };
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

{#if error}
	<p class="text-red-400">{error}</p>
{/if}
<SubmitButton action={login} disabled={submitted || fields.username.length === 0} {loading}>
	Login
</SubmitButton>
