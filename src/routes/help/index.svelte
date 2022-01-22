<script lang="ts">
import topics from '$lib/help'
import CloseLink from '$lib/CloseLink.svelte';
import { onMount } from 'svelte';

  let image = undefined

  onMount(() => {
    document.querySelectorAll('.help-topic img').forEach(e => {
      e.addEventListener('click', e => image = e.target)
    })
  })

  function closeImage() { image = undefined }

</script>

<svelte:head>
  <title>The Inner Essence | Help</title>
</svelte:head>

<CloseLink />

<h1>Help / FAQ</h1>

{#each topics as t}
  <div class="help-topic pb-4">
    <h2 class="relative leading-none bg-background-alt p-2" id="{t.anchor}">
      <a class="inline-block" href="/help#{t.anchor}">
        {t.title}
      </a>
    </h2>
    {#if t?.image}
      <img src="{t?.image}" alt="{t.title}">
    {/if}
    {@html t.html}
  </div>
{/each}

{#if image}
  <div
    class="fixed z-50 top-0 left-0 w-screen bg-opacity-20 bg-background flex flex-col items-center justify-center cursor-pointer"
    style="height:calc(100vh - 58px);"
    on:click={closeImage}
  >
    <img
      src="{image?.src}"
      alt=""
      class="h-auto w-auto max-w-[80%] max-h-[80%] cursor-pointer"
    />
    <div>
      <p>{image?.alt}</p>
    </div>
    <div class="text-sm">
      (click to return)
    </div>

  </div>
{/if}

<style>
  :global(.help-topic img) { height:95px; width:95px; margin:1em; cursor:pointer; }
</style>