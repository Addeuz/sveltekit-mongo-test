<script lang="ts">
	import SubmitButton from '$lib/components/SubmitButton.svelte';
	import { goto } from '$app/navigation';
	import type { ClassAttributes } from 'src/global';
	import Text from '$lib/components/Text.svelte';
	import { getUrl } from '$lib/utils';
	import { session } from '$app/stores';
	import { browser } from '$app/env';
	import { i18n } from '$lib/i18n';

	let submitted: boolean = false;
	let error: string;
	let success: string;
	let loading: boolean = false;
	let fields: ClassAttributes = {
		name: '',
		students: []
	};

	async function createClass() {
		error = undefined;
		loading = true;
		// validation
		submitted = true;
		try {
			if (fields.name.length === 0) {
				error = 'Class name can not me empty';
				loading = false;
				submitted = false;
				return;
			}

			const res = await fetch(getUrl('/api/classes'), {
				method: 'POST',
				body: JSON.stringify({
					...fields
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (res.ok) {
				const data = await res.json();
				success = data.message;
				loading = false;
				submitted = false;
				$session.user.classes = [...$session.user.classes, data.class.newClass];
				goto(`/profile/${data.class.id}/add-users`);
			} else {
				const data = await res.json();
				error = data.message;
				success = null;
				loading = false;
				throw error;
			}
		} catch (err) {
			console.error(err);
			loading = false;
			submitted = false;
		}
	}

	$: lang = $session?.user?.language ?? (browser && localStorage.getItem('language')) ?? 'en';
</script>

<h2><Text key="create_class" /></h2>

<input
	type="text"
	name="class_name"
	bind:value={fields.name}
	placeholder={i18n['class_name'][lang]}
	on:change={() => {
		submitted = false;
	}}
/>
<div class="grid grid-cols-1/3-2/3 mt-4">
	<div class="left">
		<div class="flex flex-row justify-start items-center gap-4">
			<SubmitButton disabled={submitted || fields.name.length === 0} action={createClass} {loading}>
				<Text key="create_class" />
			</SubmitButton>
			{#if error}
				<p class="text-red-400">{error}</p>
			{/if}
			{#if success}
				<p class="text-green-500">{success}</p>
			{/if}
		</div>
	</div>
</div>
