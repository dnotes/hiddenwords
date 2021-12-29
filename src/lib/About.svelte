<script>
import { zen, flute, reading, autoscroll, brightness } from '$lib/stores'
import Switch from '$lib/Switch.svelte';
  const res = import('/README.md')
</script>

<div class="leading-loose max-w-xs">
  <h2>Settings</h2>
  <div class="flex">
    <div class="flex-grow">Zen mode:</div>
    <Switch bool={zen} highlight />
  </div>

  <div class="flex">
    <div class="flex-grow">Flute:</div>
    <Switch bool={flute} highlight />
  </div>

  <div class="flex">
    <div class="flex-grow">Readings:</div>
    <Switch bool={reading} highlight />
  </div>

  <div class="flex">
    <div class="flex-grow">Autoscroll:</div>
    <Switch bool={autoscroll} highlight />
  </div>

  <div class="flex">
    <div class="flex-grow">Controls brightness:</div>
    <input type="range" min="10" max="100" step="10" bind:value={$brightness} />
  </div>

</div>

<!-- about page -->
{#await res then item}
  {@html item.excerptHtml}
{/await}
