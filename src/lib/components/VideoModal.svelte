<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let open: boolean;
	export let videoUrl: string;

	const dispatch = createEventDispatcher<{ ended: boolean }>();
</script>

{#if open}
	<div
		class="fixed z-10 inset-0 overflow-y-auto"
		aria-labelledby="modal-title"
		role="dialog"
		aria-modal="true"
	>
		<div
			class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
		>
			<div
				transition:fade
				class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
				aria-hidden="true"
			/>

			<!-- This element is to trick the browser into centering the modal contents. -->
			<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
				>&#8203;</span
			>

			<div
				in:fade|local={{ delay: 100 }}
				out:fade|local
				class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-3/4"
			>
				<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
					<div class="sm:flex sm:items-start">
						<video
							autoplay
							controls
							on:ended={() => {
								console.log('janne video slut');
								dispatch('ended', true);
							}}
							src={videoUrl}
						>
							<track kind="captions" />
						</video>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
