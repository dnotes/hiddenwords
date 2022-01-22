<script lang="ts">
  import type { HiddenWord } from '$lib/hw'
  import { brightness, current, paused, position, flute, voice, fontSize } from '$lib/stores'
  import { quadOut } from 'svelte/easing'
  import Fa from 'svelte-fa'
  import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
  import { tick } from 'svelte';
  export let items

  $: gutterSpacing = $fontSize > 30 ? '-1.1em' : ($fontSize > 25 ? '-1.2em' : '-1.5em')

  function colorize(node, { duration }) {
    const end = document.documentElement.classList.contains('dark') ? 255 : 0

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
      $position = 0
      setTimeout(async () => {
        window.history.pushState({},'',`/#${hw.anchor}`)
        $current = hw
        await tick()
        $paused = false
      }, 100)
    }
  }
</script>

<div class="max-w-screen-xl mx-auto">
  {#each items as hw}
    {#if $current?.['id'] === hw.id}
      <div class="mt-6 bg-background" in:colorize="{{duration:800}}">
        {#if hw.pretext}
          <p class="font-script text-[90%] mt-8">{hw.pretext}</p>
        {/if}
        <p>
          <a class="anchor" id="{hw.anchor}">{hw.number || hw.title}</a>

            <a class="block float-left w-[1em] text-center opacity-{$paused ? $brightness : '1'}"
              style="margin-left:{gutterSpacing}"
              href="/#{hw.anchor}"
              on:click|preventDefault={() => {clickPlayPause(hw)}}
            >
              {#if hw?.number}
                <span class="inline-block mb-1 lg:my-1">{hw.number}</span>
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
          <p class="font-script text-[90%] mt-8">{hw.pretext}</p>
        {/if}
        <p>
          <a class="anchor" id="{hw.anchor}">{hw.number || hw.title}</a>

          <a class="block float-left w-[1em] text-center opacity-{$brightness}"
            style="margin-left:{gutterSpacing}"
            href="/#{hw.anchor}"
            on:click|preventDefault={() => {clickPlayPause(hw)}}
          >
            {#if hw?.number}
              <span class="inline-block mb-1 lg:my-1">{hw.number}</span>
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

<style lang="postcss">
  a.anchor { @apply block relative -top-40; visibility:hidden; color:rgb(218, 200, 45) }
</style>