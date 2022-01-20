<script lang="ts">
  import Fa from 'svelte-fa'
  import { faInfoCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
  import topics from '$lib/help'
</script>

<h3>
  <a href="/about">
    <Fa class="inline-block" icon={faInfoCircle} size="lg"/>
    About this project
  </a>
</h3>

<h3>
  <a href="/help">
    <Fa class="inline-block" icon={faQuestionCircle} size="lg"/>
    Help topics
  </a>
</h3>

<ul class="pl-14">
  {#each topics as t}
    <li class="leading-tight text-neutral"><a href="/help#{t.anchor}">{t.title}</a></li>
  {/each}
</ul>


<style lang="postcss">
  h3>a { @apply px-2 py-1; }
</style>