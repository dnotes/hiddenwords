<script>
import { grid } from '$lib/stores'
import hws from '$lib/hw'
import Link from './Link.svelte'
import Switch from './Switch.svelte'

  let w
  $: narrow = (w < 480)

  let searchtext = ''

  const arabic = hws.slice(1,72)
  const persian = hws.slice(72,154)

</script>



<div class="mx-auto max-w-screen-sm text-sm sm:text-base" bind:clientWidth={w}>
  <input class="rounded py-1 px-2 border border-neutral" type="text" placeholder="search for..." on:input={()=>{searchtext = searchtext.toLowerCase()}} bind:value={searchtext}>

  <h2>
    Part I: from the Arabic &nbsp;
    <span class="whitespace-nowrap">
      <Switch bool="{grid}" highlight offLabel="list" onLabel="grid" />
    </span>
  </h2>

  <!-- Introduction -->
  <Link hw={hws[0]} {narrow} {searchtext} />

  <div class:flex={$grid} class="w-full flex-wrap">
  {#each arabic as hw}
    <Link {hw} {narrow} {searchtext} />
  {/each}
  </div>

  <h2>
    Part II: from the Persian &nbsp;
    <span class="whitespace-nowrap">
      <Switch bool="{grid}" highlight offLabel="list" onLabel="grid" />
    </span>
  </h2>

  <div class:flex={$grid} class="w-full flex-wrap">
    {#each persian as hw}
      <Link {hw} {narrow} {searchtext} />
    {/each}
  </div>

  <!-- Postscript -->
  <Link hw={hws[hws.length-1]} {narrow} {searchtext} />
</div>
