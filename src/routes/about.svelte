<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch('about.json')
		const data = await res.json()
		if (res.status === 200) {
			return { data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import Header from "../components/Header.svelte"
	export let data
</script>

<svelte:head>
	<title>About the Hidden Words</title>
</svelte:head>

<Header />

{@html data.html}