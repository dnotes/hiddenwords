<script lang="ts">
  import type { HiddenWord } from '$lib/hw'
  import { brightness, current, paused, flute, voice, fluteTime, voiceTime } from '$lib/stores'
  import { quadOut } from 'svelte/easing'
  import Fa from 'svelte-fa'
  import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
  import { tick } from 'svelte';
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

  function clickPlayPause(hw:HiddenWord) {
    if (hw.id === $current?.['id']) {
      $paused = !$paused
    }
    else {
      $paused = true
      $fluteTime = 0
      $voiceTime = 0
      setTimeout(async () => {
        window.history.pushState({},'',`/#${hw.anchor}`)
        $current = hw
        await tick()
        $paused = false
      }, 100)
    }
  }
</script>

<div class="max-w-screen-xl mx-auto lg:text-xl xl:text-2xl">
  {#each items as hw}
    {#if $current?.['id'] === hw.id}
      <div class="mt-6 bg-white dark:bg-gray-900" in:colorize="{{duration:800}}">
        {#if hw.pretext}
          <p class="font-script text-sm mt-8">{hw.pretext}</p>
        {/if}
        <p>
          <a class="anchor" id="{hw.anchor}">{hw.number || hw.title}</a>

            <a class="block float-left w-4 -ml-6 text-center opacity-{$paused ? $brightness : '1'}" href="/#{hw.anchor}" on:click|preventDefault={() => {clickPlayPause(hw)}}>
              {#if hw?.number}
                <span class="inline-block mb-1 lg:my-1 text-base">{hw.number}</span>
              {/if}
              {#if $flute || $voice}
                <span class="inline-block py-1.5"><Fa icon={$paused ? faPlayCircle : faPauseCircle} size="sm" /></span>
              {/if}
            </a>

          {#if hw.exhort}
            <span class="font-exhort mb-2 inline-block">{hw.exhort}</span><br>
          {/if}
          {hw.text}
        </p>
      </div>
    {:else}
      <div class="mt-6">
        {#if hw.pretext}
          <p class="font-script text-sm mt-8">{hw.pretext}</p>
        {/if}
        <p>
          <a class="anchor" id="{hw.anchor}">{hw.number || hw.title}</a>

          <a class="block float-left w-4 -ml-6 text-center opacity-{$brightness}" href="/#{hw.anchor}" on:click|preventDefault={() => {clickPlayPause(hw)}}>
            {#if hw?.number}
              <span class="inline-block mb-1 lg:my-1 text-base">{hw.number}</span>
            {/if}
            {#if $flute || $voice}
              <span class="inline-block py-1.5"><Fa icon={faPlayCircle} size="sm" /></span>
            {/if}
          </a>

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