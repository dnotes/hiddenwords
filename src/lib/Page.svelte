<script lang="ts">
  export let hw
  import { faChevronCircleLeft,faChevronCircleRight, faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
  import { brightness, flute, voice, paused } from '$lib/stores'
  import Fa from 'svelte-fa'

  let muteFlute, muteVoice

  $: {
    muteFlute = !$flute
    muteVoice = !$voice
  }

  function clickPlay() {
    $paused = !$paused
  }

</script>

<div id="page" class="flex flex-col h-full">
  <div class="flex-grow" />
  <div class="flex-grow pt-9">
    {#if hw.pretext}
      <p class="font-script text-sm my-4">{hw.pretext}</p>
    {/if}
    <h2 class="opacity-20 text-2xl bold absolute top-2 right-5" class:hidden="{!hw.title}">
      {hw.section || hw.id}
      {hw.number || ''}
    </h2>
    <p>
      {#if hw.exhort}
        <span class="font-exhort mb-2 inline-block">{hw.exhort}</span><br>
      {/if}
      {hw.text}
    </p>
  </div>
  <div class="flex-grow" />
  <div class="relative z-10">
    <div class="opacity-{$brightness} text-center">
      <a href="/{hw.prev || hw.id}" class="inline-block" class:opacity-0={!hw.prev}><Fa icon={faChevronCircleLeft} size="3x" /></a>
      <button disabled={!$flute && !$voice} type="button" class="inline-block {$flute || $voice ? 'text-blue-500' : 'text-gray-500'}" on:click={clickPlay}><Fa icon={$paused ? faPlayCircle : faPauseCircle} size="2x" /></button>
      <a href="/{hw.next || hw.id}" class="inline-block" class:opacity-0={!hw.next}><Fa icon={faChevronCircleRight} size="3x" /></a>
    </div>
    <audio src="/files/{hw.anchor}-flute.mp3" bind:paused={$paused} bind:muted={muteFlute} />
    <audio src="/files/{hw.anchor}-voice.mp3" bind:paused={$paused} bind:muted={muteVoice} />
  </div>
</div>
