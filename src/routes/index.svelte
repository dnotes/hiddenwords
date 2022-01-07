<script context="module" lang="ts">
  export async function load({fetch}) {
    try {
      const res = await fetch('/hw.json')
      if (!res.ok) {
        return {
          status: res.status,
          error: res.message,
        }
      }
      return {
        props: {
          items: await res.json()
        }
      }
    }
    catch(e) {
      return {
        error: e
      }
    }
  }
</script>

<script>
  import List from "$lib/List.svelte";
  import { current, zen } from "$lib/stores"
  export let items
  let arabic = items.slice(0,72)
  let persian = items.slice(72)

  import { browser } from "$app/env"
  import { goto } from "$app/navigation";

  $: if (browser) {
    if (location.hash) {
      $current = items.find(item => item.anchor === location.hash.replace('#','')) || {}
    }
    else if ($current?.['id']) {
      goto(`/${$zen ? $current?.['id'] : '#' + $current?.['anchor']}`)
    }
  }

</script>

<svelte:head>
	<title>The Hidden Words of Bahá’u’lláh</title>
</svelte:head>

<h2 id="arabic">Part I : From the Arabic</h2>

<div class="pl-5 sm:pl-0">
  <List items={arabic} />
</div>

<h2 id="persian">Part II : From the Persian</h2>

<div class="pl-5 sm:pl-0">
  <List items={persian} />
</div>
