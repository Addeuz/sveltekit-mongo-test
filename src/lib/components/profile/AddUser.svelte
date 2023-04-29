<script lang="ts">
	import { browser } from '$app/env';
	import { session } from '$app/stores';
	import type { IUser } from '$lib/database/models/users.models';
	import { i18n } from '$lib/i18n';
	import { generateUserId } from '$lib/utils';
	import bcrypt from 'bcryptjs';
	import type { ObjectId } from 'mongoose';
	import type { RegisterAttributes } from 'src/global';
	import { createEventDispatcher } from 'svelte';
	import SubmitButton from '../SubmitButton.svelte';
	import Text from '../Text.svelte';
	import UserQrCode from './UserQrCode.svelte';

	let submitted: boolean = false;
	let error: string;
	let loading: boolean = false;
	let fields: RegisterAttributes = {
		username: '',
		firstname: '',
		lastname: '',
		password: 'MonkeyApple543!',
		passwordConfirmation: 'MonkeyApple543!',
		language: $session.user.language,
		type: 'student',
		school_id: null
	};
	let createdStudent: (IUser & { _id: ObjectId }) | undefined = undefined;
	let createdQRCode: string | undefined = undefined;

	const dispatch = createEventDispatcher<{ 'new-user': IUser & { _id: ObjectId } }>();

	async function addStudent() {
		error = undefined;
		loading = true;
		// validation
		submitted = true;
		try {
			if (fields.password !== fields.passwordConfirmation) {
				error = 'Passwords need to match!';
				loading = false;
				submitted = false;
				return;
			}
			const cryptPassword = bcrypt.hashSync(fields.password);
			delete fields.passwordConfirmation;

			fields.username = generateUserId();

			const res = await fetch('/api/user', {
				method: 'POST',
				body: JSON.stringify({
					...fields,
					password: cryptPassword
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (res.ok) {
				const data = await res.json();
				createdStudent = data.user;
				createdQRCode = data.qrCode;
				error = null;
				loading = false;
				submitted = false;
				fields = {
					username: '',
					firstname: '',
					lastname: '',
					password: 'MonkeyApple543!',
					passwordConfirmation: 'MonkeyApple543!',
					language: $session.user.language,
					type: 'student',
					school_id: null
				};
				dispatch('new-user', createdStudent);
			} else {
				const data = await res.json();
				error = data.message;
				loading = false;
				throw error;
			}
		} catch (err) {
			console.error(err);
			loading = false;
			submitted = false;
		}
	}

	$: lang = $session?.user?.language ?? (browser && localStorage.getItem('language')) ?? 'en';
</script>

<div class="flex flex-col md:items-center gap-3">
	{#if createdStudent === undefined && createdQRCode === undefined}
		<h5><Text key="add_student" /></h5>
		<input
			type="text"
			name="Name"
			bind:value={fields.firstname}
			placeholder={i18n['nickname'][lang]}
			on:change={() => {
				submitted = false;
			}}
		/>
		<SubmitButton
			disabled={submitted || fields.firstname.length === 0}
			action={addStudent}
			{loading}
		>
			<Text key="add_student" />
		</SubmitButton>

		{#if error}
			<p class="text-red-400">{error}</p>
		{/if}
	{:else}
		<UserQrCode qrCode={createdQRCode} student={createdStudent} />
		<button
			class="bg-blue-400 p-4 rounded-xl text-white"
			on:click={() => {
				createdQRCode = undefined;
				createdStudent = undefined;
			}}
		>
			{i18n['create_new_student'][lang]}
		</button>
	{/if}
</div>
