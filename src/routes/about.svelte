<script context="module" lang="ts">
  export async function load() {
    const item = await import('/README.md')
    return { props: {
      item
    } }
  }
</script>

<script>
import { zen, flute, voice, autoplay, brightness } from '$lib/stores'
import Switch from '$lib/Switch.svelte';
  export let item
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
    <div class="flex-grow">Reading:</div>
    <Switch bool={voice} highlight />
  </div>

  <div class="flex">
    <div class="flex-grow">Autoplay:</div>
    <Switch bool={autoplay} highlight />
  </div>

  <div class="flex">
    <div class="flex-grow">Controls brightness:</div>
    <input type="range" min="10" max="100" step="10" bind:value={$brightness} />
  </div>

</div>

<!-- about page -->
{@html item.excerptHtml}
