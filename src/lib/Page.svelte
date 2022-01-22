<script lang="ts">
import { faChevronCircleLeft,faChevronCircleRight, faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { current, brightness, flute, voice, paused, position, launching, duration, nextTimeout, theme } from '$lib/stores'
import Fa from 'svelte-fa'
import { fade } from "svelte/transition"
import { onMount } from "svelte";
import Range from '$lib/Range.svelte'

  export let hw
  $: $current = hw

  $launching = false

  const outTiming = { duration:800 }
  const inTiming = { duration:500, delay:0 }

  function clickNextPrev() {
    clearTimeout($nextTimeout)
    $paused = true;
    $position = 0;
  }

  function clickPlay() {
    clearTimeout($nextTimeout)
    if (!$flute && !$voice) {
      $flute = true
      $voice = true
    }
    $paused = !$paused
  }

  // This will switch to zen mode instantly, but create space between auto-played hidden words
  onMount(() => { inTiming.delay = 1500 })

</script>

<svelte:head>
  <title>The Hidden Words | {hw.title} | {hw.teaser}</title>
</svelte:head>

<div id="page" class="flex flex-col h-full">
  {#key hw}
    <h2 class="block opacity-20 text-[140%] bold text-right h-[1em]" class:hidden="{!hw.title}">
      {hw.section || hw.id}
      {hw.number || ''}
    </h2>
  {/key}

  <!-- Content -->
  <div class="flex-grow relative">
    {#key hw}
      <div class="flex flex-col justify-center h-full" in:fade={inTiming} out:fade|local={outTiming}>
        <div>
          {#if hw.pretext}
            <p class="font-script text-[90%] my-4">{hw.pretext}</p>
          {/if}
          <p>
            {#if hw.exhort}
              <span class="font-exhort mb-2 inline-block">{hw.exhort}</span><br>
            {/if}
            {hw.text}
          </p>
        </div>
      </div>
    {/key}
  </div>

  <!-- Controls -->
  <div class="relative z-10 py-4">
    <div class="opacity-{$brightness} text-center">
      <a href="/{hw.prev || hw.id}" class="inline-block" class:opacity-0={!hw.prev} on:click={clickNextPrev}><Fa icon={faChevronCircleLeft} size="3x" /></a>
      <button type="button" class="inline-block text-link" on:click={clickPlay}><Fa icon={$paused ? faPlayCircle : faPauseCircle} size="2x" /></button>
      <a href="/{hw.next || hw.id}" class="inline-block" class:opacity-0={!hw.next} on:click={clickNextPrev}><Fa icon={faChevronCircleRight} size="3x" /></a>
    </div>
    <div class="relative flex justify-center h-4">
      {#key hw}
        <div class="opacity-{$brightness} absolute">
          <Range max={$duration} step={.1} bind:value={$position} />
        </div>
      {/key}
    </div>
  </div>

</div>
