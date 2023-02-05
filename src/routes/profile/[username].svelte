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

	let newSchool: string;

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

	// async function createSchool() {
	// 	if (newSchool === '' || newSchool === undefined) {
	// 		alert('Please enter a school name.');
	// 		return;
	// 	}
	// 	try {
	// 		const res = await fetch('/api/school', {
	// 			method: 'POST',
	// 			body: JSON.stringify({
	// 				name: newSchool
	// 			})
	// 		});

	// 		if (res.ok) {
	// 			const body = await res.json();
	// 			alert(body.message);
	// 			newSchool = '';
	// 		}
	// 	} catch (err) {}
	// }
</script>

<!-- <h1>Hello, {user ? user.username : ''}</h1>
<button on:click={logout} class="bg-red-300 p-4 rounded">Logout</button>

{#if user?.type === 'researcher'}
	<h1 class="mt-4">Create new school</h1>
	<div class="flex items-center gap-4">
		<input type="text" bind:value={newSchool} placeholder="School name" />
		<button on:click={createSchool} class="bg-blue-300 p-4 rounded">Create school</button>
	</div>
{/if} -->
