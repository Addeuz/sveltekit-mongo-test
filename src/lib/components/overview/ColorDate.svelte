<script lang="ts">
	import { session } from '$app/stores';
	import type { TaskColors } from '$lib/tasks';

	export let color: TaskColors | undefined;
	export let date: Date | undefined = undefined;
	export let text: string | undefined = undefined;
</script>

<span
	class={`inline-flex justify-center items-center p-2 ${
		color === 'green'
			? 'bg-green-500'
			: color === 'yellow'
			? 'bg-yellow-500'
			: color === 'red'
			? 'bg-red-500'
			: 'bg-gray-200'
	}`}
>
	{#if date}
		{date.toLocaleDateString($session.language)}
	{:else if text && text.length > 0}
		{text}
	{/if}
</span>
