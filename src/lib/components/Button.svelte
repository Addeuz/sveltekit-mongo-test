<script lang="ts">
	export let type: 'warning' | 'danger' = undefined;
</script>

{#if type === 'danger'}
	<button on:click class={`bg-red-500 text-white p-3 rounded-md`}>
		<slot />
	</button>
{:else if type === 'warning'}
	<button on:click class={`bg-yellow-300 p-3 rounded-md`}>
		<slot />
	</button>
{:else}
	<button on:click class={`bg-blue-400 p-3 rounded-md`}>
		<slot />
	</button>
{/if}
