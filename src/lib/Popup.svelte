<script>
import { onMount } from "svelte";

export let bool
let cls=''
export { cls as class }

  onMount(() => {

    return
  })

</script>

<div class="absolute w-96 h-[600px] bottom-8 overflow-y-scroll p-4 text-left bg-white dark:bg-gray-900 {cls}">
  <slot></slot>
</div>
