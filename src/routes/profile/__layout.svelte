<script context="module" lang="ts">
	import { session } from '$app/stores';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session }) => {
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
	import { page } from '$app/stores';
	import Text from '$lib/components/Text.svelte';
	import { activeClass } from '$lib/stores/activeClass';
</script>

<header class="flex flex-wrap flex-row justify-between lg:items-center lg:space-x-4 p-6 ">
	<div id="left">
		{#if $activeClass}<strong>{$activeClass.name}</strong>{:else}No class selected{/if}
		<select
			on:change={({ target }) => {
				console.log(target.value);

				$activeClass = JSON.parse(target.value);
			}}
		>
			{#each $session.user.classes as teacherClass}
				<option value={JSON.stringify(teacherClass)}>
					{teacherClass.name}
				</option>
				<option value={JSON.stringify(teacherClass)}>
					{teacherClass.name}
				</option>
			{/each}
		</select>
	</div>
	<div id="right">
		<a
			href="/profile/create-class"
			class="nav-item"
			class:active={$page.path.endsWith('create-class')}>+ <Text key="create_class" /></a
		>
	</div>
</header>

<slot />

<style lang="postcss">
	.active {
		@apply underline;
	}
</style>
