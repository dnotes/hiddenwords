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

<div bind:this={el} class="absolute w-96 h-[600px] bottom-8 overflow-y-scroll p-4 text-left bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white {cls}">
  <button class="absolute top-4 right-4 z-10 cursor-pointer text-gray-500" type="button" on:click|stopPropagation={()=>{$bool = !$bool}}><Fa icon={faTimesCircle} size="lg" /></button>
  <slot></slot>
</div>

<style>
  div { max-height: calc(99vh - 3rem); }
</style>