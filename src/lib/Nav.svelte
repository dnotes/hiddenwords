<script>
  import Popup from '$lib/Popup.svelte';
  import Toc from '$lib/TOC.svelte';
  import About from '$lib/About.svelte';
  import Pushbutton from './Pushbutton.svelte';
  import { current, zen, flute, voice, autoplay, showSettings, showContents } from '$lib/stores';
  import Fa from 'svelte-fa'
  import { faBars, faDotCircle, faMicrophoneAlt, faMusic, faPlay, faCog, faBook } from '@fortawesome/free-solid-svg-icons'

  $: id = $current?.['id'] || ''
  $: href = $zen ? `/${id ? '#' + $current?.['anchor'] : ''}` : `/${id}`

</script>

<div class="w-full h-13 pt-1 sm:w-[27rem] sm:px-4 sm:bg-white sm:dark:bg-gray-900 sm:rounded-t-3xl mx-auto flex justify-center items-bottom">

  <div class="p-2 bg-white dark:bg-gray-900 rounded-tr-3xl sm:bg-transparent">
    <Pushbutton bool={showSettings} brighten title="settings / about">
      <Fa slot="on" icon={faCog} size="lg" />
      <Fa slot="off" icon={faCog} size="lg" />
      <div slot="menu">
        <Popup bool={showSettings} class="left-0">
          <About />
        </Popup>
      </div>
    </Pushbutton>
  </div>

  <div class="flex-grow"></div>

  <div class="tray hidden sm:flex">

    <div>
      <Pushbutton bool={zen} circle {href} link title="{$zen ? 'switch to scrolling mode' : 'switch to zen mode'}">
        <Fa slot="on" icon={faDotCircle} size="xs" />
        <Fa slot="off" icon={faBars} size="xs" />
      </Pushbutton>
    </div>

    <div>
      <Pushbutton bool={flute} circle title="music">
        <Fa slot="on" icon={faMusic} size="sm" />
      </Pushbutton>
    </div>

    <div>
      <Pushbutton bool={voice} circle title="reading">
        <Fa slot="on" icon={faMicrophoneAlt} size="sm" />
      </Pushbutton>
    </div>

    <div>
      <Pushbutton bool={autoplay} circle title="autoplay">
        <Fa slot="on" icon={faPlay} size="sm" />
      </Pushbutton>
    </div>

  </div>

  <div class="flex-grow"></div>

  <div class="p-2 bg-white dark:bg-gray-900 rounded-tl-3xl sm:bg-transparent">
    <Pushbutton href="/contents" bool={showContents} brighten title="table of contents">
      <Fa slot="on" icon={faBook} size="lg" />
      <Fa slot="off" icon={faBook} size="lg" />
      <div slot="menu">
        <Popup bool={showContents} class="right-0">
          <Toc />
        </Popup>
      </div>
    </Pushbutton>
  </div>

</div>

<style lang="postcss">
  div.tray>div { @apply p-2; }
</style>
