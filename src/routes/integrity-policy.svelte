<script>
	import Text from '$lib/components/Text.svelte';
</script>

<div class="flex items-center gap-5 mb-8">
	<h2 class="mb-0">Datenschutzbestimmungen</h2>
	<button
		class="text-blue-500"
		on:click={() => {
			history.back();
		}}
	>
		<Text key="back" />
	</button>
</div>
<object
	data="/data_protection_document.pdf"
	type="application/pdf"
	width="800"
	style="height: 70vh;"
	title="Integrity policy"
>
	<div>No online PDF viewer installed</div>
</object>
