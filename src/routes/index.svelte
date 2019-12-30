<script>
	import HiddenWord from '../components/HiddenWord.svelte'
	import Header from '../components/Header.svelte'
	import Link from '../components/Link.svelte'
	import { linkDisplay } from '../store.js'
	import hiddenWords from '../content/hw.js'
	let Arabic = hiddenWords.slice(1, 72)
	let Persian = hiddenWords.slice(72, (72 + 83))
</script>

<svelte:head>
	<title>The Hidden Words of Bahá’u’lláh</title>
</svelte:head>

<Header />

<div class="text-center">
<HiddenWord {...hiddenWords[0]} />
</div>

<h2 class="section">Part 1: from the Arabic</h2>

<div>
{#each Arabic as hw}
	<Link {...hw} linkDisplay={$linkDisplay} />
{/each}
</div>

<h2 class="section">Part 2: from the Persian</h2>

<div>
{#each Persian as hw}
	<Link {...hw} linkDisplay={$linkDisplay} />
{/each}
</div>
