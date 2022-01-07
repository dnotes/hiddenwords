<script>
  import { current, paused, muteFlute, muteVoice, fluteTime, voiceTime, duration, nextTimeout, autoplay, zen } from '$lib/stores'
  import { goto } from '$app/navigation'

  function next() {
    clearTimeout($nextTimeout)
    if ($autoplay && $current?.['next']) $nextTimeout = setTimeout( function() {
      goto('/' + ($zen ? $current?.['next'] : '#' + $current?.['next'].replace('/','-') ))
    }, 3200)
  }

</script>

{#key $current?.['id']}
  {#if $current?.['id']}
    <div>
      <audio src="/files/{$current?.['anchor']}-flute.mp3" autoplay={$autoplay} bind:paused={$paused} bind:muted={$muteFlute} on:ended={next} bind:currentTime={$fluteTime} bind:duration={$duration} />
      <audio src="/files/{$current?.['anchor']}-voice.mp3" autoplay={$autoplay} bind:paused={$paused} bind:muted={$muteVoice} bind:currentTime={$voiceTime}  />
    </div>
  {/if}
{/key}
