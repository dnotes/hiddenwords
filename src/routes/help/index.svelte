<script lang="ts">
  import Fa from 'svelte-fa'
  import { faLink } from '@fortawesome/free-solid-svg-icons'
  import { brightness } from '$lib/stores'
  import topics from '$lib/help'
  console.log(topics)
</script>

<svelte:head>
  <title>The Inner Essence | Help</title>
</svelte:head>

<h1>Help / FAQ</h1>

{#each topics as t}
  <h2 class="relative" id="{t.anchor}">
    <a href="/help#{t.anchor}">
      <Fa class="absolute -left-7 opacity-{$brightness}" icon={faLink} />
    </a>
    {t.title}
  </h2>
  {@html t.html}
{/each}