<script lang="ts" context="module">
	import { goto } from '$app/navigation';
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

<div class="flex flex-col items-center justify-center h-screen min-w-full ">
	<img src="/logo.png" alt="Didunas logo" class="w-1/5 cursor-pointer" on:click={() => goto('/')} />
	<div class="form flex flex-col items-center space-y-5 my-6">
		<slot />
	</div>
</div>
