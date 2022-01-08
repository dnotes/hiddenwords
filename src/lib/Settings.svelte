<script>
  import { zen, flute, voice, autoplay, brightness } from '$lib/stores'
  import Switch from '$lib/Switch.svelte';
import Sitelinks from './Sitelinks.svelte';
</script>

<div class="leading-loose">

  <h2 id="settings">Settings</h2>

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

  <h2 id="links">Links</h2>

  <Sitelinks/>

</div>
