<script>
  import { current, paused, position, flutePaused, flutePosition, muteFlute, muteVoice, fluteVolume, voiceVolume, duration, nextTimeout, autoplay, zen, launching, skipSplash } from '$lib/stores'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'

  $: isPlayingPage = /^\/(?:arabic\/\d+|persian\/\d+|introduction|postscript)?$/.test($page.path)

  function next() {
    clearTimeout($nextTimeout)
    $paused = true
    if ($current?.['next']) $nextTimeout = setTimeout( function() {
      if ($autoplay && isPlayingPage) {
        $position = 0
        $paused = false
        goto('/' + ($zen ? $current?.['next'] : '#' + $current?.['next'].replace('/','-') ))
      }
    }, 3200)
  }

</script>

<div>
  <audio src="/files/{$current?.['anchor']}-flute.mp3" autoplay={$autoplay && isPlayingPage && !$launching} bind:paused={$flutePaused} bind:volume={$fluteVolume} bind:muted={$muteFlute} bind:currentTime={$flutePosition} />
  <audio src="/files/{$current?.['anchor']}-voice.mp3" autoplay={$autoplay && isPlayingPage && !$launching} bind:paused={$paused} bind:volume={$voiceVolume} bind:muted={$muteVoice} on:ended={next} bind:duration={$duration} bind:currentTime={$position}  />
</div>