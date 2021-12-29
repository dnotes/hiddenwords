<script lang="ts">
import { grid, zen, current } from '$lib/stores'
  export let hw
  export let narrow = false
  export let searchtext = ''
  const numbered = hw.number ? true : false

  $: href = $zen ? `/${hw.id}` : `/#${hw.id.replace('/','-')}`
  $: found = !searchtext || hw.searchtext.includes(searchtext)

  function click() { $current=hw }

</script>

{#if $grid}
  <a on:click={click} class="inline-block grid-item" class:opacity-10={!found} class:narrow class:numbered {href} title="{hw.teaser}">{hw.number || hw.title}</a>
{:else}
  <a on:click={click} class="block" class:hidden={!found} {href}>{hw.number || hw.title}: “{hw.teaser}”</a>
{/if}

<style lang="postcss">
  a.grid-item {
    @apply px-4 py-2 rounded-lg border-2 border-blue-500 flex-grow-0 text-center m-1;
  }
  a.grid-item.narrow {
    @apply border m-px px-1;
  }
  a.grid-item.numbered {
    @apply px-0;
    width:calc(10% - .5rem);
  }
</style>
