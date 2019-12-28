<script>
	import Nav from '../components/Nav.svelte';
	import { theme } from '../store.js';
	theme.useLocalStorage()

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
</style>

<div class="theme-{$theme}">

<Nav {segment}/>

<main>
	<slot></slot>
</main>

</div>
