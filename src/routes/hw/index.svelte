<script>
	import HiddenWord from '../../components/HiddenWord.svelte'
	import hiddenWords from '../../content/hw.js'
	let Arabic = hiddenWords.slice(1, 72)
	let Persian = hiddenWords.slice(72, (72 + 82))
</script>

<svelte:head>
	<title>The Hidden Words of Bahá’u’lláh</title>
</svelte:head>

<div class="text-center">
<HiddenWord {...hiddenWords[0]} />
</div>

<h2 class="section">Part 1: from the Arabic</h2>

<div>
{#each Arabic as hw}
	<HiddenWord {...hw}/>
{/each}
</div>

<h2 class="section">Part 2: from the Persian</h2>

<div>
{#each Persian as hw}
	<HiddenWord {...hw}/>
{/each}
</div>

<div class="italic">
<HiddenWord {...hiddenWords.slice(-1)[0]}/>
</div>
