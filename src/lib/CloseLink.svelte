<script>
import { current, zen } from '$lib/stores'
import Fa from 'svelte-fa'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
</script>

<a class="absolute top-4 right-4 z-50 block" href={$zen ? `/${$current?.['id'] || ''}` : `/#${$current?.['anchor'] || ''}`}><Fa icon={faTimesCircle} size="2x"/></a>

