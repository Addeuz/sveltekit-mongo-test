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
</script>

<header class="flex flex-wrap flex-row justify-between lg:items-center lg:space-x-4 p-6 ">
	<a href="/profile" class="nav-item" class:active={$page.path.endsWith('profile')}>
		<Text key="select_class" />
	</a>
	{#if $page.params.class_id}
		<div class="flex gap-8">
			<a
				href={`/profile/${$page.params.class_id}/task-overview`}
				class="nav-item"
				class:active={$page.path.endsWith('task-overview')}><Text key="task_overview" /></a
			>
			<a
				href={`/profile/${$page.params.class_id}/student-overview`}
				class="nav-item"
				class:active={$page.path.endsWith('student-overview')}
			>
				<Text key="student_overview" />
			</a>
			<a
				href={`/profile/${$page.params.class_id}/support-material`}
				class="nav-item"
				class:active={$page.path.endsWith('support-material')}
			>
				<Text key="student_overview" />
			</a>
		</div>
	{/if}
	<div class="flex gap-4">
		{#if $page.params.class_id}
			<a
				href={`/profile/${$page.params.class_id}/add-users`}
				class="nav-item"
				class:active={$page.path.endsWith('add-users')}
			>
				+ <Text key="add_student" />
			</a>
		{/if}
		<a
			href="/profile/create-class"
			class="nav-item"
			class:active={$page.path.endsWith('create-class')}
		>
			+ <Text key="create_class" />
		</a>
	</div>
</header>

<slot />
