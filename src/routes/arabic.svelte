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
      let items = await res.json()
      items = items.slice(0,73)
      return {
        props: {
          items
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
