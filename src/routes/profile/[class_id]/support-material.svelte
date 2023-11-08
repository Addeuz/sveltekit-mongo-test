<script lang="ts">
	import { browser } from '$app/env';
	import { session } from '$app/stores';
	import Text from '$lib/components/Text.svelte';
	import { i18n } from '$lib/i18n';
	import { keyToThumbnailIdentifier, taskKeys } from '$lib/tasks';

	$: lang = $session?.user?.language ?? (browser && localStorage.getItem('language')) ?? 'en';
</script>

<div class="w-3/4 mx-auto flex flex-col">
	<span class="flex justify-center">
		{#if lang === 'sv'}
			<a
				class="text-blue-400 underline mb-4"
				href="https://didunas.eu/de/fordermaterial-deutsch/"
				target="_blank"
				rel="noopener noreferrer">Här</a
			>&nbsp;hittar du en översikt över allt stödmaterial.
		{:else if lang === 'de'}
			Eine Übersicht über alle Fördermaterialien findest du&nbsp;<a
				class="text-blue-400 underline mb-4"
				href="https://didunas.eu/de/fordermaterial-deutsch/"
				target="_blank"
				rel="noopener noreferrer">hier.</a
			>
		{:else if lang === 'en'}
			You can find an overview of all support materials&nbsp;<a
				class="text-blue-400 underline mb-4"
				href="https://didunas.eu/de/fordermaterial-deutsch/"
				target="_blank"
				rel="noopener noreferrer">here.</a
			>
		{/if}
	</span>
	<div class="grid grid-cols-2 items-center gap-4 p-2">
		<div class="grid items-center" style="grid-template-columns: 2fr 1fr;">
			<h5 class="mb-0"><Text key="basic_support" /></h5>
			<span />
		</div>
		<a
			class="text-blue-400 underline"
			target="_blank"
			rel="noopener noreferrer"
			href="https://didunas.eu/de/fordermaterial-deutsch/"
		>
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
			<a
				class="text-blue-400 underline"
				target="_blank"
				href="https://didunas.eu/de/fordermaterial-deutsch/"
				rel="noreferrer noopener"
			>
				{i18n['support_material'][lang]}
				<Text {key} />
			</a>
		{/each}
		<div class="grid items-center" style="grid-template-columns: 2fr 1fr;">
			<h5 class="mb-0"><Text key="supplementary_material" /></h5>
			<span />
		</div>
		<a
			class="text-blue-400 underline"
			target="_blank"
			rel="noopener noreferrer"
			href="https://didunas.eu/de/fordermaterial-deutsch/"
		>
			{i18n['support_material'][lang]}
			<Text key="supplementary_material" />
		</a>
	</div>
</div>
