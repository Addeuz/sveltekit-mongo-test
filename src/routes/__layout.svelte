<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session }) => {
		if (session.user) {
			// Deletes the password from the object so that it doesn't get sent to the web all the time
			delete session.user.password;
			return {
				props: {
					user: session.user
				}
			};
		}

		return {};
	};
</script>

<script lang="ts">
	import type { IUser } from '$lib/database/models/users.models';

	import '../app.postcss';
	import { goto } from '$app/navigation';
	import Text from '$lib/components/Text.svelte';
	import { session } from '$app/stores';
	import { languages } from '$lib/i18n';

	export let user: IUser;

	let navOpen = false;

	async function logout() {
		try {
			const res = await fetch('/api/auth/logout', {
				method: 'POST'
			});

			if (res.ok) {
				location.reload();
			}
		} catch (err) {}
	}
	$: nav = navOpen;
</script>

<header
	class="flex flex-wrap relative flex-row justify-between lg:items-center lg:space-x-4 p-6 drop-shadow-md "
>
	<img
		src="/logo.png"
		alt="Didunas logo"
		class="w-1/12 cursor-pointer"
		on:click={() => {
			goto('/');
		}}
	/>
	{#if $session.user}
		<span>
			{$session?.user?.firstname ?? $session?.user.username}
		</span>
	{/if}
	<button
		on:click={() => (navOpen = !navOpen)}
		class="inline-block lg:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1 rounded"
	>
		<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>
	<nav
		class={`${
			nav ? `flex` : `hidden`
		} absolute lg:relative lg:block top-16 lg:top-0 left-0 z-20 flex flex-col lg:flex-row lg:space-x-6 font-semibold w-full lg:w-auto bg-white shadow-md rounded-lg lg:shadow-none lg:rounded-none lg:bg-transparent p-6 pt-0 lg:p-0`}
	>
		{#if user && user.type}
			{#if user.type === 'teacher' || user.type === 'researcher'}
				<a href="/profile" class="nav-item"><Text key="profile" /></a>
			{/if}
			<button class="nav-item font-medium" on:click={logout}><Text key="logout" /></button>
			{#if user.type === 'researcher'}
				<a href="/tasks" class="nav-item">Tasks</a>
			{/if}
		{:else}
			<a href="/login" class="nav-item">Login</a>
		{/if}
	</nav>
</header>

<div class="mx-6 max-w-screen-lg xl:max-w-screen-xl md:mx-auto relative">
	<slot />
</div>
{#if $session.authenticated}
	<div class="fixed bottom-2 right-3">
		<select
			class="w-32"
			value={$session.user.language}
			on:change={async (e) => {
				localStorage.setItem('language', e.currentTarget.value);
				console.log('language change');
				await fetch('/api/user', {
					method: 'PUT',
					body: JSON.stringify({
						language: e.currentTarget.value,
						user_id: $session.user._id
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				}).then(() => {
					location.reload();
				});
			}}
		>
			{#each languages as { language, icon, text }}
				<option value={language}>
					{icon}
					{text}
				</option>
			{/each}
		</select>
	</div>
{/if}
