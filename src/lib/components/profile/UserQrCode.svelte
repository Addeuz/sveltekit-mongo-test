<script lang="ts">
	import type { IUser } from '$lib/database/models/users.models';

	export let qrCode: string;
	export let student: IUser;
</script>

<div class="flex items-center gap-8 flex-grow justify-center">
	<img src={qrCode} alt="QRCode for user login" />
	<div class="flex flex-col items-start">
		<span>Username: {student.username}</span>
		<span>Name: {student.firstname}</span>
	</div>
</div>
