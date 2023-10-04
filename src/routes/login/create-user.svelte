<script lang="ts">
	import bcrypt from 'bcryptjs';
	import type { ISchool } from '$lib/database/models/school.models';
	import type { RegisterAttributes } from 'src/global';
	import { session } from '$app/stores';
	import SubmitButton from '$lib/components/SubmitButton.svelte';
	import { i18n, languages } from '$lib/i18n';
	import { goto } from '$app/navigation';
	import Text from '$lib/components/Text.svelte';
	import { browser } from '$app/env';

	// export let schools: ISchool[];

	let fields: RegisterAttributes = {
		username: '',
		firstname: '',
		lastname: '',
		password: '',
		passwordConfirmation: '',
		language: 'de',
		type: 'teacher',
		school_id: null,
		tasks: [
			'quantities',
			'quantityComparison',
			'numberComparison',
			'colorPattern',
			'numberPattern',
			'hiddenNumber',
			'numberLine',
			'completionToTen',
			'plus',
			'minus'
		]
	};

	// let languageTypes = [
	// 	{ value: 'de', text: 'German' },
	// 	{ value: 'el_cy', text: 'Greek' }
	// ];

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
				goto('/login/teacher');
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

	$: lang = $session?.user?.language ?? (browser && localStorage.getItem('language')) ?? 'en';
</script>

<div class="flex flex-col md:items-center gap-3">
	<h1>Create new user</h1>
	<input
		type="text"
		name="email"
		bind:value={fields.username}
		placeholder={i18n['email'][lang]}
		on:change={() => {
			submitted = false;
		}}
	/>
	<input
		type="text"
		name="firstname"
		bind:value={fields.firstname}
		placeholder={i18n['firstname'][lang]}
		on:change={() => {
			submitted = false;
		}}
	/>

	<input
		type="password"
		name="password"
		bind:value={fields.password}
		placeholder={i18n['password'][lang]}
		on:change={() => {
			submitted = false;
		}}
	/>
	<input
		type="password"
		name="passwordConfirmation"
		bind:value={fields.passwordConfirmation}
		placeholder={i18n['confirm_password'][lang]}
		on:change={() => {
			submitted = false;
		}}
	/>
	<div
		class="flex flex-col
		items-center
	"
	>
		<select
			bind:value={fields.language}
			on:change={() => {
				submitted = false;
			}}
		>
			{#each languages as { language, icon, text }}
				<option value={language}>
					{icon}
					{text}
				</option>
			{/each}
		</select>
		<Text key="language_info" />
	</div>

	<!-- {#if $session.user.type === 'researcher' && schools}
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
	{/if} -->
	<SubmitButton disabled={submitted} action={register} {loading}
		><Text key="register" /></SubmitButton
	>

	{#if error}
		<p class="text-red-400">{error}</p>
	{/if}
	{#if success}
		<p class="text-green-500">{success}</p>
	{/if}
</div>
