<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session }) => {
		// if (!session.authenticated) {
		// 	return {
		// 		status: 302,
		// 		redirect: '/login'
		// 	};
		// }

		// return {
		// 	props: {
		// 		user: session.user
		// 	}
		// };
		if (!session.authenticated) {
			return {
				status: 302,
				redirect: '/login'
			};
		}
		return {};
	};
</script>

<script lang="ts">
	import { session } from '$app/stores';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import type { IUser } from '$lib/database/models/users.models';

	let error: string;
	let user: IUser;

	if (browser) {
		onMount(() => {
			user = $session.user;
		});
	}

	async function logout() {
		try {
			const res = await fetch('/api/auth/logout', {
				method: 'POST'
			});

			if (res.ok) {
				location.reload();
			} else {
				const data = await res.json();
				error = data.message;
				throw error;
			}
		} catch (err) {}
	}
</script>

<h1>Hej, {user?.username}</h1>
<button on:click={logout} class="bg-red-300 p-4 rounded">Logout</button>
