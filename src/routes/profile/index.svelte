<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session }) => {
		return {
			status: 302,
			redirect: session.authenticated ? `/profile/${session.user.username}` : '/login'
		};
	};
</script>
