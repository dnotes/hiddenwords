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
	import { goto } from "@sapper/app"
  import HiddenWord from "../../components/HiddenWord.svelte"
	export let hw;
	function handleKeydown(event) {
		switch (event.key) {
			case 'ArrowRight':
			case ' ':
			case 'Enter':
				if (hw.next) {
					goto(`/hw/${hw.next.id}`)
				}
				break
			case 'ArrowLeft':
				if (hw.prev) {
					goto(`/hw/${hw.prev.id}`)
				}
				break
			case 'Escape':
				goto(`/`)
				break
		}
	}

</script>

<svelte:window on:keydown={handleKeydown}/>

<svelte:head>
  <title>The Hidden Words{hw.title ? ` : ${hw.title} ` : ''}</title>
</svelte:head>

<HiddenWord {...hw} page={true} />
