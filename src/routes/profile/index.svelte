<script lang="ts">
	import { session } from '$app/stores';
	import Text from '$lib/components/Text.svelte';
	import type { ITeacherClass } from '$lib/database/models/teacherClass.models';

	$: classes = $session.user.classes as ITeacherClass[];
</script>

<h5><Text key="classes" /></h5>
<div class="flex flex-col items-start w-1/4">
	{#each classes as { name, _id, students }}
		<a href={`/profile/${_id}`} class="grid grid-cols-2 p-2 w-full hover:bg-gray-200">
			<span>
				{name}
			</span>
			<span>
				{students.length}
				<Text key="students" />
			</span>
		</a>
	{/each}
</div>
