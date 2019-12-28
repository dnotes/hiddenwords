<script>
	import HiddenWord from '../components/HiddenWord.svelte'
	import Header from "../components/Header.svelte"
	import hiddenWords from './hw/_hw.js'
	let Arabic = hiddenWords.slice(1, 72)
	let Persian = hiddenWords.slice(72, (72 + 82))
</script>

<svelte:head>
	<title>The Hidden Words of Bahá’u’lláh</title>
</svelte:head>

<Header />

<HiddenWord {...hiddenWords[0]} />

<h2 class="text-center opacity-75">Part 1: from the Arabic</h2>

<div>
{#each Arabic as hw}
	<HiddenWord {...hw}/>
{/each}
</div>

<h2 class="text-center opacity-75">Part 2: from the Persian</h2>

<div>
{#each Persian as hw}
	<HiddenWord {...hw}/>
{/each}
</div>

<HiddenWord {...hiddenWords.slice(-1)[0]}/>