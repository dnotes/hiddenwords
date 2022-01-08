<script>
  import { current, paused, position, flutePaused, flutePosition, muteFlute, muteVoice, duration, nextTimeout, autoplay, zen } from '$lib/stores'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import { onMount } from 'svelte'

  $: isPlayingPage = /^\/(?:arabic\/\d+|persian\/\d+|introduction|postscript)?$/.test($page.path)

  function next() {
    clearTimeout($nextTimeout)
    if ($current?.['next']) $nextTimeout = setTimeout( function() {
      if ($autoplay && isPlayingPage) goto('/' + ($zen ? $current?.['next'] : '#' + $current?.['next'].replace('/','-') ))
    }, 3200)
  }

  let isMounted
  onMount(() => { isMounted = true })

</script>

{#key $current?.['id']}
  {#if isMounted && $current?.['id']}
    <div>
      <audio src="/files/{$current?.['anchor']}-flute.mp3" autoplay={$autoplay && isPlayingPage} bind:paused={$flutePaused} bind:muted={$muteFlute} bind:currentTime={$flutePosition} />
      <audio src="/files/{$current?.['anchor']}-voice.mp3" autoplay={$autoplay && isPlayingPage} bind:paused={$paused} bind:muted={$muteVoice} on:ended={next} bind:duration={$duration} bind:currentTime={$position}  />
    </div>
  {/if}
{/key}
