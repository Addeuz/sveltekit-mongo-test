<script lang="ts">
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import Text from '$lib/components/Text.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		if (browser) {
			const language = localStorage.getItem('language');
			if (language === null) {
				goto('/login/select-language');
			}
		}
	});
</script>

<button class="login-button" on:click={() => goto('/login/teacher')}>
	<Text key="login_teacher" />
</button>
<a href="/login/create-user"> <Text key="create_user" /> </a>
<button class="login-button" on:click={() => goto('login/student')}>
	<Text key="login_student" />
</button>
