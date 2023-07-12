<script lang="ts">
	import { fade } from 'svelte/transition';

	export let open = true;
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
				class="relative inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-4 sm:align-middle w-[95%] sm:w-3/5"
			>
				<div class="bg-white  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
					<slot />
				</div>
			</div>
		</div>
	</div>
{/if}
