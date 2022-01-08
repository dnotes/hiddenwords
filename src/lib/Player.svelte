<script>
  import { current, paused, muteFlute, muteVoice, fluteTime, voiceTime, duration, nextTimeout, autoplay, zen } from '$lib/stores'
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
      <audio src="/files/{$current?.['anchor']}-flute.mp3" autoplay={$autoplay && isPlayingPage} bind:paused={$paused} bind:muted={$muteFlute} on:ended={next} bind:currentTime={$fluteTime} bind:duration={$duration} />
      <audio src="/files/{$current?.['anchor']}-voice.mp3" autoplay={$autoplay && isPlayingPage} bind:paused={$paused} bind:muted={$muteVoice} bind:currentTime={$voiceTime}  />
    </div>
  {/if}
{/key}
