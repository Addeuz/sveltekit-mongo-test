<script lang="ts">
	import { browser } from '$app/env';
	import { session } from '$app/stores';
	import Text from '$lib/components/Text.svelte';
	import { i18n } from '$lib/i18n';
	import { keyToThumbnailIdentifier, taskKeys } from '$lib/tasks';

	$: lang = $session?.user?.language ?? (browser && localStorage.getItem('language')) ?? 'en';
</script>

<div class="w-3/4 mx-auto flex flex-col">
	<div class="grid grid-cols-2 items-center gap-4 p-2">
		<div class="grid items-center" style="grid-template-columns: 2fr 1fr;">
			<h5 class="mb-0"><Text key="basic_support" /></h5>
			<span />
		</div>
		<a class="text-blue-400 underline" href="#">
			{i18n['support_material'][lang]}
			<Text key="basic_support" />
		</a>
		{#each taskKeys as key}
			<div class="grid items-center" style="grid-template-columns: 2fr 1fr;">
				<h5 class="mb-0"><Text {key} /></h5>
				<img
					src={`/thumbnails/${keyToThumbnailIdentifier(key).name}-01.${
						keyToThumbnailIdentifier(key).extension
					}`}
					class="self-center mix-blend-multiply cursor-pointer"
					alt="Link to a key"
				/>
			</div>
			<a class="text-blue-400 underline" href="#">
				{i18n['support_material'][lang]}
				<Text {key} />
			</a>
		{/each}
		<div class="grid items-center" style="grid-template-columns: 2fr 1fr;">
			<h5 class="mb-0"><Text key="supplementary_material" /></h5>
			<span />
		</div>
		<a class="text-blue-400 underline" href="#">
			{i18n['support_material'][lang]}
			<Text key="supplementary_material" />
		</a>
	</div>
</div>
