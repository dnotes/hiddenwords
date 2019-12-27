<script>
	import HiddenWord from '../components/HiddenWord.svelte'
	import Link from '../components/Link.svelte'
	import { linkDisplay } from '../store.js'
	import hiddenWords from './hw/_hw.js'
	let Arabic = hiddenWords.slice(1, 72)
	let Persian = hiddenWords.slice(72, (72 + 83))
</script>

<svelte:head>
	<title>The Hidden Words of Bahá’u’lláh</title>
</svelte:head>

<h1 class="text-center title">The Hidden Words</h1>
<h3 class="text-center subtitle">of Bahá’u’lláh</h3>

<div class="text-center">
<HiddenWord {...hiddenWords[0]} />
</div>

<h2 class="text-center opacity-75">Arabic</h2>

<div>
{#each Arabic as hw}
	<Link {...hw} linkDisplay={$linkDisplay} />
{/each}
</div>

<h2 class="text-center opacity-75">Persian</h2>

<div>
{#each Persian as hw}
	<Link {...hw} linkDisplay={$linkDisplay} />
{/each}
</div>
