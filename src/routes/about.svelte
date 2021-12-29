<script context="module" lang="ts">
  import mdPlugin from 'markdown-it'
  const md = mdPlugin('commonmark', { typographer:true })
  export async function load() {
    const content = await import('/README.md')
    return { props: {
      item: md.render(content.content)
    } }
  }
</script>

<script>
import { zen, flute, reading, autoscroll, brightness } from '$lib/stores'
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
{@html item}
