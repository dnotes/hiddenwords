<script>
import { goto } from '$app/navigation'
import { current, zen, flute, voice, fluteVolume, voiceVolume, autoplay, brightness, theme, fontSize } from '$lib/stores'
import Switch from '$lib/Switch.svelte';
import Sitelinks from './Sitelinks.svelte';
import Fa from 'svelte-fa'
import { faSun, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import Pushbutton from './Pushbutton.svelte';
import { readable } from 'svelte/store'
import Range from '$lib/Range.svelte'
let bool = { ...readable(true), set:()=>{}, update:()=>{} }
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
    <div class="w-1/4">Flute</div>
    <div class="flex-grow">
      <Pushbutton bool={flute} circle brighten>
        <Fa slot="on" icon={faVolumeUp} />
      </Pushbutton>
    </div>
    <Range disabled={!$flute} max={1} step={.01} bind:value={$fluteVolume} />
  </div>

  <div class="row">
    <div class="w-1/4">Reading</div>
    <div class="flex-grow">
      <Pushbutton bool={voice} circle brighten>
        <Fa slot="on" icon={faVolumeUp} />
      </Pushbutton>
    </div>
    <Range disabled={!$voice} max={1} step={.01} bind:value={$voiceVolume} />
  </div>

  <div class="row">
    <div class="w-1/4">Controls</div>
    <div class="flex-grow">
      <Pushbutton {bool} circle onClick={()=>{}}>
        <Fa slot="on" icon={faSun} size="lg" />
      </Pushbutton>
    </div>
    <Range min={10} max={100} step={10} bind:value={$brightness} />
  </div>

  <div class="row">
    <div class="w-1/4">Font size</div>
    <div class="flex-grow">
      <Pushbutton {bool} onClick={()=>{ $fontSize = 18 }}>
        <span slot="on">{Math.round($fontSize)}</span>
      </Pushbutton>
    </div>
    <Range min={10} max={32} step={.1} bind:value={$fontSize} />
  </div>

  <div class="row">
    <div class="flex-grow">Theme</div>
    <Pushbutton {bool} brighten circle={!$theme} class="overflow-hidden text-2xl mx-1" title="use system setting" onClick={()=>{
      $theme = ''
      document.documentElement.classList.remove('sepia')
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
    }}>
      <span slot="on">
        <span class="bg-gray-300 text-gray-700 w-full absolute left-0 top-0">A</span>
        <span class="w-1/2 pl-[22%] bg-gray-700 text-gray-300 overflow-hidden absolute left-0 top-0">A</span>
      </span>
    </Pushbutton>
    <Pushbutton {bool} brighten circle={$theme==='dark'} class="bg-black text-white text-2xl mx-1" title="dark" onClick={()=>{
      $theme='dark'
      document.documentElement.classList.remove('sepia')
      document.documentElement.classList.add('dark')
    }}>
      <span slot="on">A</span>
    </Pushbutton>
    <Pushbutton {bool} brighten circle={$theme==='light'} class="bg-white text-black text-2xl mx-1" title="light" onClick={()=>{
      $theme='light'
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.remove('sepia')
    }}>
      <span slot="on">A</span>
    </Pushbutton>
    <Pushbutton {bool} brighten circle={$theme==='sepia'} class="bg-[#f7f0e4] text-[#412c07] text-2xl mx-1" title="light" onClick={()=>{
      $theme='sepia'
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('sepia')
    }}>
      <span slot="on">A</span>
    </Pushbutton>
  </div>

  <h2 id="links">Links</h2>

  <Sitelinks/>

</div>

<style lang="postcss">
  .row { @apply flex my-2; }
</style>
