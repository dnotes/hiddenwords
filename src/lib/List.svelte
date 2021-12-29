<script lang="ts">
  import { brightness, current } from '$lib/stores'
  import { quadIn, quadOut, quadInOut } from 'svelte/easing'
  export let items

  function colorize(node, { duration }) {
    const color = getComputedStyle(node).backgroundColor
    const end = (color.match(/\d+/) || [])[0] > "200" ? 0 : 255

    return {
      duration,
      easing: quadOut,
      css: t => {
        return `color:rgb(${218 + ((end-218)*t)}, ${200 + ((end-200)*t)}, ${45 + ((end-45)*t)})`
      }
    }
  }
</script>

<div class="max-w-screen-xl mx-auto lg:text-xl xl:text-2xl">
  {#each items as hw}
    {#if $current?.['id'] === hw.id}
      <div class="mt-6 bg-white dark:bg-gray-900" in:colorize="{{duration:800}}">
        {#if hw.pretext}
          <p class="font-script text-sm my-4">{hw.pretext}</p>
        {/if}
        <p>
          <a class="anchor" id="{hw.anchor}">{hw.number || hw.title}</a>
          {#if hw.number}
            <a class="block float-left w-4 -ml-6 text-center opacity-{$brightness}" href="/#{hw.anchor}" on:click={()=>{$current=hw}}>{hw.number}</a>
          {/if}
          {#if hw.exhort}
            <span class="font-exhort mb-2 inline-block">{hw.exhort}</span><br>
          {/if}
          {hw.text}
        </p>
      </div>
    {:else}
      <div class="mt-6">
        {#if hw.pretext}
          <p class="font-script text-sm my-4">{hw.pretext}</p>
        {/if}
        <p>
          <a class="anchor" id="{hw.anchor}">{hw.number || hw.title}</a>
          {#if hw.number}
            <a class="block float-left w-4 -ml-6 text-center opacity-{$brightness}" href="/#{hw.anchor}" on:click={()=>{$current=hw}}>{hw.number}</a>
          {/if}
          {#if hw.exhort}
            <span class="font-exhort mb-2 inline-block">{hw.exhort}</span><br>
          {/if}
          {hw.text}
        </p>
      </div>
    {/if}
  {/each}
</div>

<style>
  a.anchor { @apply block relative -top-40; visibility:hidden; color:rgb(218, 200, 45) }
</style>