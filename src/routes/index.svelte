<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	// export const load: Load = async ({ session }) => {
	// 	try {
	// 		const res = await fetch(`http://localhost:3000/api/test`);
	// 		if (res.ok) {
	// 			console.log(await res.json());

	// 			return {
	// 				props: {}
	// 			};
	// 		}
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// 	return {};
	// };
</script>

<script lang="ts">
	const testMongo = async () => {
		try {
			const res = await fetch('/api/test', {
				method: 'POST',
				body: JSON.stringify({
					username,
					password
				})
			});

			if (res.ok) {
				console.log(await res.json());
			}
		} catch (error) {
			console.error(error);
		}
	};

	let username = '';
	let password = '';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<img src="/color_pattern/colorpatterns-12.jpeg" alt="Janne" />
