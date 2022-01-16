<script lang="ts">
  export let bool
  export let offLabel:string = 'off'
  export let onLabel:string = 'on'
  export let highlight:boolean = false
  export let onClick = function () { $bool = !$bool }
</script>

<span class="font-exhort font-base leading-loose text-xs uppercase" class:highlight={highlight && !$bool}><slot name="off">{offLabel}</slot></span>
<span class="inline-block mx-1 top-1 relative bg-blue-500 w-9 h-4 rounded-full border-2 border-blue-500 cursor-pointer" on:click|preventDefault|stopPropagation={onClick}>
  <span class="inline-block absolute top-0 left-0 h-3 w-3 bg-white dark:bg-gray-900 rounded-full" class:translate-x-5={$bool} />
</span>
<span class="font-exhort font-base leading-loose text-xs uppercase" class:highlight={highlight && $bool} ><slot name="on">{onLabel}</slot></span>

<style>
  span.highlight { color:rgb(27, 221, 27); }
</style>