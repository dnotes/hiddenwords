<script context="module" lang="ts">
  export async function load({ page, fetch }) {
    try {
      const res = await fetch('/hw.json')
      if (!res.ok) {
        return {
          status: res.status,
          error: res.message,
        }
      }

      const { id } = page.params
      const items = await res.json()

      let hw = items.find(item => item.id === id)
      if (hw) return { props: { hw } }

      let fromOldId = id.toLowerCase().replace(/^hw\//, '').replace(/\//g,'')
      if (items[fromOldId]) return {
        status: 301,
        url: fromOldId,
      }

      return {
        status: 404
      }

    }
    catch(e) {
      return {
        error: e
      }
    }
  }
</script>

<script lang="ts">
  import Page from "$lib/Page.svelte";
  import { current } from '$lib/stores'
  export let hw
  current.set(hw)
</script>

<Page {hw} />