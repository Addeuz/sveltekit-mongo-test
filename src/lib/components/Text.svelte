<script context="module" lang="ts">
</script>

<script lang="ts">
	import { browser } from '$app/env';

	import { session } from '$app/stores';
	import { i18n, I18NKey } from '$lib/i18n';

	export let key: I18NKey;

	$: lang = $session?.user?.language ?? (browser && localStorage.getItem('language')) ?? 'en';
</script>

<span class={`${lang === 'el_cy' ? 'font-sans' : ''}`}>{i18n[key][lang]}</span>
