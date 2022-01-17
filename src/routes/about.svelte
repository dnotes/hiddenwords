<script context="module" lang="ts">
  export async function load() {
    const item = await import('/README.md')
    return { props: {
      item
    } }
  }
</script>

<script>
import Sitelinks from '$lib/Sitelinks.svelte';
  export let item
</script>

<div class="mx-auto w-3/5 max-w-md bg-contain bg-logo dark:bg-logo-dark">
  <img class="opacity-0 w-full" alt="the inner essence" src="/inneressence.png" />
</div>

<!-- about page -->
{@html item.excerptHtml}

<Sitelinks />