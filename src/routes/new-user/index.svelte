<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session }) => {
		if (!session.user || session.user.type === 'student') {
			return {
				status: 302,
				redirect: '/login'
			};
		}

		if (session.user.type === 'researcher') {
			try {
				const res = await fetch('/api/school');
				if (res.ok) {
					const data = await res.json();
					return {
						props: {
							schools: data.schools
						}
					};
				}
			} catch (error) {
				console.error(error);
			}
		}

		return {};
	};
</script>

<script lang="ts">
	import bcrypt from 'bcryptjs';

	import type { ISchool } from '$lib/database/models/school.models';
	import type { RegisterAttributes } from 'src/global';
	import { session } from '$app/stores';
	import SubmitButton from '$lib/components/SubmitButton.svelte';

	export let schools: ISchool[];

	let fields: RegisterAttributes = {
		username: '',
		password: '',
		passwordConfirmation: '',
		language: 'de',
		type: 'student',
		school_id: null,
		firstname: '',
		lastname: ''
	};

	let userTypes = [
		{ value: 'student', text: 'Student' },
		{ value: 'teacher', text: 'Teacher' },
		{ value: 'researcher', text: 'Researcher' }
	];

	let languageTypes = [
		{ value: 'de', text: 'German' },
		{ value: 'el_cy', text: 'Greek' }
	];

	let submitted: boolean = false;
	let isValid: boolean;
	let error: string;
	let success: string;
	let loading: boolean = false;

	async function register() {
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
				success = data.message;
				error = null;
				loading = false;
				submitted = false;
			} else {
				const data = await res.json();
				error = data.message;
				success = null;
				loading = false;
				throw error;
			}
		} catch (err) {
			console.error(err);
			loading = false;
			submitted = false;
		}
	}
</script>

<div class="flex flex-col md:items-center gap-3">
	<h1>Create new user</h1>
	<input
		type="text"
		name="username"
		bind:value={fields.username}
		placeholder="Username"
		on:change={() => {
			submitted = false;
		}}
	/>

	<input
		type="password"
		name="username"
		bind:value={fields.password}
		placeholder="Password"
		on:change={() => {
			submitted = false;
		}}
	/>
	<input
		type="password"
		name="passwordConfirmation"
		bind:value={fields.passwordConfirmation}
		placeholder="Confirm password"
		on:change={() => {
			submitted = false;
		}}
	/>
	<select
		bind:value={fields.language}
		on:change={() => {
			submitted = false;
		}}
	>
		{#each languageTypes as languageType}
			<option value={languageType.value}>
				{languageType.text}
			</option>
		{/each}
	</select>
	<select
		bind:value={fields.type}
		on:change={() => {
			submitted = false;
		}}
	>
		{#each userTypes as userType}
			<!-- If the user is a teacher it can not create a researcher only other teachers or students -->
			{#if $session.user.type === 'teacher' && userType.value === 'researcher'}
				{null}
			{:else}
				<option value={userType.value}>
					{userType.text}
				</option>
			{/if}
		{/each}
	</select>
	{#if $session.user.type === 'researcher' && schools}
		<!-- svelte-ignore a11y-no-onchange -->
		<select
			bind:value={fields.school_id}
			on:change={() => {
				submitted = false;
			}}
		>
			<option disabled selected value>Select a school</option>
			{#each schools as school}
				<option value={school._id}>
					{school.name}
				</option>
			{/each}
		</select>
	{/if}
	<SubmitButton disabled={submitted} action={register} {loading}>Add user</SubmitButton>

	{#if error}
		<p class="text-red-400">{error}</p>
	{/if}
	{#if success}
		<p class="text-green-500">{success}</p>
	{/if}
</div>
