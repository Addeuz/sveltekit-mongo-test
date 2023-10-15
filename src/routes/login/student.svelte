<script lang="ts">
	import { browser } from '$app/env';
	import { page, session } from '$app/stores';
	import SubmitButton from '$lib/components/SubmitButton.svelte';
	import Text from '$lib/components/Text.svelte';
	import { i18n } from '$lib/i18n';

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

	$: lang = $session?.user?.language ?? (browser && localStorage.getItem('language')) ?? 'en';
</script>

<input
	type="text"
	name="username"
	bind:value={fields.username}
	on:change={() => {
		submitted = false;
	}}
	placeholder={i18n['student_username'][lang]}
/>
<div>
	<span>
		Die Datenschutzbestimmungen findest du <a class="text-blue-500" href="/integrity-policy">hier</a
		>
	</span>
</div>
{#if error}
	<p class="text-red-400">{error}</p>
{/if}
<SubmitButton action={login} disabled={submitted || fields.username.length === 0} {loading}>
	<Text key="user_login" />
</SubmitButton>
