<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session }) => {
		if (!session.authenticated) {
			return {
				status: 302,
				redirect: '/login'
			};
		}

		return {};
	};
</script>

<script lang="ts">
	import TextAndAudio from '$lib/components/TextAndAudio.svelte';
	import { textAndAudio } from '$lib/audio';
	import { goto } from '$app/navigation';
</script>

<TextAndAudio src={textAndAudio[1].audio} text={textAndAudio[1].text} autoplay={true} />

<div class="gap-3 flex flex-col lg:flex-row flex-wrap items-center mx-2 mt-5 mb-5">
	<button
		on:click={() => goto('/running/quantities')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
	>
		<img class="rounded-xl " src="/quantities/quantities-01.jpeg" alt="Quantities task" />
		<span>Quantities tasks</span>
	</button>
	<button
		on:click={() => goto('/running/numberPattern')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="number_pattern/numberpattern-01.jpeg"
			alt="Number pattern task"
		/>
		<span>Number pattern tasks</span>
	</button>
	<button
		on:click={() => goto('/running/numberLine')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="number_line/numberline-01.jpeg"
			alt="Number line tasks"
		/>
		<span>Number line tasks</span>
	</button>
	<button
		on:click={() => goto('/running/difference')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
	>
		<img class="rounded-xl mb-3 w-48" src="/difference/difference-01.jpeg" alt="Difference task" />
		<span>Difference tasks</span>
	</button>
	<button
		on:click={() => goto('/running/colorPattern')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="/color_pattern/colorpatterns-01.jpeg"
			alt="Color pattern task"
		/>
		<span>Color pattern tasks</span>
	</button>
	<button
		on:click={() => goto('/running/hiddenNumber')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="/hidden_number/hiddennumber-01.jpeg"
			alt="Hidden number task"
		/>
		<span>Hidden number tasks</span>
	</button>
	<button
		on:click={() => goto('/running/numberComparison')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="/number_comparison/numbercomparison-01.jpeg"
			alt="Number comparison task"
		/>
		<span>Number comparison tasks</span>
	</button>
	<button
		on:click={() => goto('/running/quantityComparison')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="/quantity_comparison/quantitiycomparison-01.jpeg"
			alt="Quantity comparison task"
		/>
		<span>Quantity comparison tasks</span>
	</button>
	<button
		on:click={() => goto('/running/plus')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
	>
		<img class="rounded-xl mb-3 w-48" src="/plus/plus-01.jpeg" alt="Plus task" />
		<span>Plus tasks</span>
	</button>
	<button
		on:click={() => goto('/running/minus')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
	>
		<img class="rounded-xl mb-3 w-48" src="/minus/minus-01.jpeg" alt="Minus task" />
		<span>Minus tasks</span>
	</button>
</div>
<!-- <TaskRun on:taskComplete={handleTaskAnswer} task={quantities[taskIndex]} /> -->
