<script lang="ts">
import { onMount } from "svelte";
import Fa from 'svelte-fa'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export let bool
let el

let cls=''
export { cls as class }

onMount(() => {
  /* @type (event:Html) */
  const handleClick = (event) => {
    if (el.contains(event.target)) {
      if (event.target.tagName === 'A') {
        $bool = false
      }
      else {
        $bool = true
      }
    }
    else {
      $bool = !$bool
    }
  };

  const handleEscape = (event) => {
    if (open && event.key === 'Escape') {
      $bool = false;
    }
  };

  // add events when element is added to the DOM
  document.addEventListener('click', handleClick);
  document.addEventListener('keyup', handleEscape);

  // remove events when element is removed from the DOM
  return () => {
    document.removeEventListener('click', handleClick);
    document.removeEventListener('keyup', handleEscape);
  };
});

</script>

<div bind:this={el} class="absolute z-20 w-96 max-w-[calc(100vw-1em)] h-[600px] bottom-12 overflow-y-scroll scrollbar-hide p-4 text-left bg-background-alt text-secondary rounded-xl {cls}">
  <button class="absolute top-4 right-4 z-10 cursor-pointer text-neutral" type="button" on:click|stopPropagation={()=>{$bool = !$bool}}><Fa icon={faTimesCircle} size="lg" /></button>
  <slot></slot>
</div>

<style>
  div { max-height: calc(99vh - 3rem); }
</style>