<script lang="ts">
  import { brightness } from '$lib/stores'
  export let items
</script>

{#each items as { id,title,section,number,exhort,text,teaser,pretext,anchor } }
  <div class="mt-6">
    {#if pretext}
      <p class="font-script text-sm my-4">{pretext}</p>
    {/if}
    <p>
      {#if number}
        <a class="block float-left w-4 -ml-6 text-center opacity-{$brightness}" href="/{anchor}" id={anchor}>{number}</a>
      {/if}
      {#if exhort}
        <span class="font-exhort mb-2 inline-block">{exhort}</span><br>
      {/if}
      {text}
    </p>
  </div>
{/each}
