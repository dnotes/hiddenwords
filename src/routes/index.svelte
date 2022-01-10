<script context="module" lang="ts">
  export async function load({fetch}) {
    try {
      const res = await fetch('/hw.json')
      if (!res.ok) {
        return {
          status: res.status,
          error: res.message,
        }
      }
      return {
        props: {
          items: await res.json()
        }
      }
    }
    catch(e) {
      return {
        error: e
      }
    }
  }
</script>

<script lang="ts">
  import List from "$lib/List.svelte";
  import { current, zen, paused, launching, skipSplash, autoplay } from "$lib/stores"
  export let items
  let arabic = items.slice(0,72)
  let persian = items.slice(72)

  import { browser } from "$app/env"
  import { goto } from "$app/navigation";
  import { fade } from "svelte/transition"
  import Fa from 'svelte-fa'
  import { faPlayCircle, faVolumeMute } from '@fortawesome/free-solid-svg-icons'

  $: if (!$paused) $launching = false

  // This has to be $: or else auto-advance doesn't work
  $: if (browser) {
    if (location.hash) {
      $launching = false
      $current = items.find(item => item.anchor === location.hash.replace('#','')) || {}
    }
    else if ($current?.['id']) {
      $launching = false
      goto(`/${$zen ? $current?.['id'] : '#' + $current?.['anchor']}`)
    }
    else {
      $current = items[0]
    }
  }

</script>

<svelte:head>
	<title>The Hidden Words of Bahá’u’lláh</title>
</svelte:head>

{#if $launching}

<div class="w-screen h-screen fixed z-10 left-0 top-0 bg-white dark:bg-gray-900 flex flex-col justify-center items-center" out:fade|local={{ delay:1500,duration:800 }}>
  <div class="w-3/5 max-w-md max-h-[60%] bg-contain bg-logo dark:bg-logo-dark"><img class="opacity-0 w-full" alt="the inner essence" src="/inneressence.svg" /></div>

  {#if $current?.['id'] === 'introduction'}
    <div class="w-64 mt-6 leading-loose">
      <a class="block" href="/{$zen ? $current?.['id'] : '#' + $current?.['anchor']}" on:click={()=>{ $launching=false; $paused=false }}>
        <Fa class="inline" icon={faPlayCircle} size="lg" />
        play {$current?.['title']}
      </a>
      <a class="block text-gray-500" href="/{$zen ? $current?.['id'] : '#' + $current?.['anchor']}" on:click={()=>{ $autoplay=false; $launching=false }}>
        <Fa class="inline" icon={faVolumeMute} size="lg" />
        continue without sound
      </a>
    </div>
  {/if}

</div>

{:else}

<h2 id="arabic">Part I : From the Arabic</h2>

<div class="pl-5 sm:pl-0">
  <List items={arabic} />
</div>

<h2 id="persian">Part II : From the Persian</h2>

<div class="pl-5 sm:pl-0">
  <List items={persian} />
</div>

{/if}