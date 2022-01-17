<script lang="ts">
  import { brightness } from '$lib/stores'
  import { goto } from "$app/navigation"

  export let bool
  export let href = "/about#settings"
  export let label = ""
  export let title = ""
  export let circle = false
  export let brighten = false
  export let link = false
  let cls = ''
  export { cls as class }
  export let onClick = function(href) {
    $bool = !$bool
    if (link) goto(href)
  }
  import Fa from 'svelte-fa'
  import { faSlash } from '@fortawesome/free-solid-svg-icons'
</script>

<div class="relative">
  <a class="block text-center opacity-{brighten && $bool ? '100' : $brightness}" {href} {title} on:click|preventDefault|stopPropagation={() => { onClick(href) }}>
    <span class="rounded-full w-8 h-8 border-blue-500 flex justify-center items-center relative {cls}" class:border-2={circle}>
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
  {#if $bool}
    <slot name="menu"></slot>
  {/if}
</div>
