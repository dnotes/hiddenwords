<script lang="ts">
  import { paused, zen } from '$lib/stores'
  import { goto } from '$app/navigation'
  import { browser } from '$app/env'

  if (browser) {
    $zen = false
    $paused = true
    goto('/#persian')
  }
</script>
