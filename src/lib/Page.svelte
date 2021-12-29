<script lang="ts">
  export let hw
  import { faChevronCircleLeft,faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
  import Fa from 'svelte-fa'
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
    <div class="opacity-50 text-center">
      <a href="/{hw.prev || hw.id}" class="inline-block text-gray-500" class:opacity-0={!hw.prev}><Fa icon={faChevronCircleLeft} size="3x" /></a>
      <a href="/{hw.next || hw.id}" class="inline-block text-gray-500" class:opacity-0={!hw.next}><Fa icon={faChevronCircleRight} size="3x" /></a>
    </div>
  </div>
</div>
