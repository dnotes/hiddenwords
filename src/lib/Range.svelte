<script lang="ts">
  export let value:number = 0
  export let min:number = 0
  export let max:number = 100
  export let step:number = 1
  export let disabled:number|boolean = false

  $: pos = ((value - min) / (max - min)) * 100

</script>

<div class="w-full h-8 cursor-pointer overflow-hidden relative" class:saturate-0={disabled} >
  <div class="h-1 bg-neutral absolute left-0 top-[45%] w-full" />
  <div class="h-1 bg-link absolute left-0 top-[45%]" style="width:{pos}%" />
  <input type="range" bind:value {min} {max} {step} class="w-full relative" />
</div>
