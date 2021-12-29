<script lang="ts">
  import { brightness } from '$lib/stores'
  export let bool
  export let label = ""
  export let circle = false
  export let brighten = false
  function onClick () { $bool = !$bool }
  import Fa from 'svelte-fa'
  import { faSlash } from '@fortawesome/free-solid-svg-icons'
</script>

<a class="block text-center opacity-{brighten && $bool ? '100' : $brightness}" href="/settings" on:click|preventDefault={()=>{
  $bool=!$bool
}}>
  <span class="rounded-full w-8 h-8 border-blue-500 flex justify-center items-center relative" class:border-2={circle}>
    {#if $bool}
      <slot name="on">ON</slot>
    {:else}
      <slot name="off">
        <Fa class="absolute top-[.4rem] left-[.24rem]" icon={faSlash} />
        <Fa class="absolute top-[.5rem] left-[.22rem] text-white dark:text-gray-900" icon={faSlash} />
        <slot name="on"></slot>
      </slot>
    {/if}
  </span>
  {#if label}
  {label}
  {/if}
</a>
