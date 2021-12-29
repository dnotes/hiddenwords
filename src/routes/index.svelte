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
  export let items
</script>

<svelte:head>
	<title>The Hidden Words of Bahá’u’lláh</title>
</svelte:head>


<div class="pl-5 sm:pl-0">
  <List {items} />
</div>