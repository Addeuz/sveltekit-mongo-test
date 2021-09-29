<script lang="ts">
	import { page } from '$app/stores';
	import { textAndAudio } from '$lib/audio';

	import { tutorials } from '$lib/stores/tutorials';
	import TextAndAudio from '$lib/components/TextAndAudio.svelte';
	import Numbers from './AnswerInputs/Numbers.svelte';

	function handleAnswer(event) {
		// This needs more stuff, like the stars and stuff
		$tutorials[$page.params.type].seen = true;
	}
</script>

<div class="h-screen flex justify-center items-center flex-col gap-6">
	<TextAndAudio src={textAndAudio[3].audio} text={textAndAudio[3].text} autoplay={true} />
	<Numbers on:answer={handleAnswer} />
</div>
