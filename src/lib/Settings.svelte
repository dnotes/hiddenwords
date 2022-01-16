<script>
import { goto } from '$app/navigation'
import { current, zen, flute, voice, fluteVolume, voiceVolume, autoplay, brightness } from '$lib/stores'
import Switch from '$lib/Switch.svelte';
import Sitelinks from './Sitelinks.svelte';
import Fa from 'svelte-fa'
import { faSun, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import Pushbutton from './Pushbutton.svelte';
let bool
</script>

<div class="leading-loose">

  <h2 id="settings">Settings</h2>

  <div class="row">
    <div class="flex-grow">View</div>
    <Switch offLabel="List" onLabel="Zen" bool={zen} highlight onClick={() => {
      $zen = !$zen
      if ($current?.['id']) goto(`/${$zen ? $current?.['id'] : '#' + $current?.['anchor']}`)
    }} />
  </div>

  <div class="row">
    <div class="flex-grow">Autoplay</div>
    <Switch bool={autoplay} highlight />
  </div>

  <div class="row">
    <div class="w-1/5 flex-grow">Flute</div>
    <div class="flex-grow">
      <Pushbutton bool={flute} circle brighten>
        <Fa slot="on" icon={faVolumeUp} />
      </Pushbutton>
    </div>
    <input class="ml-2" disabled={!$flute} type="range" min="0" max="1" step=".01" bind:value={$fluteVolume} />
  </div>

  <div class="row">
    <div class="w-1/5 flex-grow">Reading</div>
    <div class="flex-grow">
      <Pushbutton bool={voice} circle brighten>
        <Fa slot="on" icon={faVolumeUp} />
      </Pushbutton>
    </div>
    <input class="ml-2" disabled={!$voice} type="range" min="0" max="1" step=".01" bind:value={$voiceVolume} />
  </div>

  <div class="row">
    <div class="flex-grow">Controls</div>
    <div class="flex-grow">
      <Pushbutton {bool} circle onClick={()=>{}}>
        <Fa class="opacity-{$brightness}" slot="off" icon={faSun} size="lg" />
      </Pushbutton>
    </div>
    <input type="range" min="10" max="100" step="10" bind:value={$brightness} />
  </div>

  <h2 id="links">Links</h2>

  <Sitelinks/>

</div>

<style lang="postcss">
  .row { @apply flex my-2; }
</style>
