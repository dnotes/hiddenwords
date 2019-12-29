<script>
	import Nav from '../components/Nav.svelte';
	import { theme } from '../store.js';
	theme.useLocalStorage()

	let w

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
	@media screen and (min-width:800px) {
		main { max-width: 800px; }
	}
	@media screen and (min-width:1000px) {
		main { max-width: 80%; }
	}
</style>

<svelte:head>
<link rel="stylesheet" type="text/css" href="/themes/{$theme}.css" />
</svelte:head>

<svelte:window bind:innerWidth={w}/>

<Nav {segment}/>

<main bind:clientWidth={w} style="font-size:{(w*.014)+14}px">
	<slot></slot>
</main>
