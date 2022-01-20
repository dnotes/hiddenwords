<script lang="ts">
  export let bool
  export let offLabel:string = 'off'
  export let onLabel:string = 'on'
  export let highlight:boolean = false
  export let onClick = function () { $bool = !$bool }
</script>

<span class="font-exhort font-base leading-loose text-xs uppercase" class:highlight={highlight && !$bool}><slot name="off">{offLabel}</slot></span>
<span class="inline-block mx-1 top-1 relative bg-link w-9 h-4 rounded-full border-2 border-link cursor-pointer" on:click|preventDefault|stopPropagation={onClick}>
  <span class="inline-block absolute top-0 left-0 h-3 w-3 bg-background rounded-full" class:translate-x-5={$bool} />
</span>
<span class="font-exhort font-base leading-loose text-xs uppercase" class:highlight={highlight && $bool} ><slot name="on">{onLabel}</slot></span>

<style lang="postcss">
  span.highlight { @apply text-link; }
</style>