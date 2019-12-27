<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`hw/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { hw: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
  import HiddenWord from "../../components/HiddenWord.svelte"
	export let hw;
</script>

<svelte:head>
  <title>The Hidden Words{hw.title ? ` : ${hw.title} ` : ''}</title>
</svelte:head>

<HiddenWord {...hw} page={true} />
