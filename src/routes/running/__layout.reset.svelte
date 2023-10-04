<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<img
	src="/logo.png"
	alt="Didunas logo"
	class="w-1/6 absolute top-2 left-2 cursor-pointer z-20"
	on:click={() => {
		goto('/');
	}}
/>

<slot />
