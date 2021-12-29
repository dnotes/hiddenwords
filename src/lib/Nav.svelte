<script>
  import Popup from '$lib/Popup.svelte';
  import Toc from '$lib/TOC.svelte';
  import About from '$lib/About.svelte';
  import Pushbutton from './Pushbutton.svelte';
  import { page } from '$app/stores'
  import { current, zen, flute, voice, autoplay, brightness, showSettings, showContents } from '$lib/stores';
  const { id } = $page?.params
  import Fa from 'svelte-fa'
  import { faBars, faDotCircle, faMicrophoneAlt, faMusic, faPlay, faInfoCircle, faPalette, faCog, faBook, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

  $: isPage = ($current?.['id'] && id === $current?.['id'])

</script>

<div class="w-full sm:w-96 sm:px-4 sm:bg-white sm:dark:bg-gray-900 sm:rounded-t-3xl mx-auto flex justify-center items-baseline">

  <div class="p-2 bg-white dark:bg-gray-900 rounded-tr-3xl sm:bg-transparent">
    <Pushbutton bool={showSettings} brighten >
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
      <Pushbutton bool={zen} circle>
        <Fa slot="on" icon={faDotCircle} size="xs" />
        <Fa slot="off" icon={faBars} size="xs" />
      </Pushbutton>
    </div>

    <div>
      <Pushbutton bool={flute} circle>
        <Fa slot="on" icon={faMusic} size="sm" />
      </Pushbutton>
    </div>

    <div>
      <Pushbutton bool={voice} circle>
        <Fa slot="on" icon={faMicrophoneAlt} size="sm" />
      </Pushbutton>
    </div>

    <div>
      <Pushbutton bool={autoplay} circle>
        <Fa slot="on" icon={faPlay} size="sm" />
      </Pushbutton>
    </div>

  </div>

  <div class="flex-grow"></div>

  <div class="p-2 bg-white dark:bg-gray-900 rounded-tl-3xl sm:bg-transparent">
    <Pushbutton href="/contents" bool={showContents} brighten >
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

<style>
  div.tray>div { @apply p-2; }
</style>
