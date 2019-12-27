<script>
  export let id, number
  export let exhort = ''
  export let teaser = ''
  export let linkDisplay
</script>

<style>
  a.grid { text-align: center; margin: 1%; display: inline-block; width: 8%; padding: 2% 0; margin: 1%; }
  a.list { display: block; }
</style>

<a href="/hw/{id}" class="{linkDisplay}">{number || id}
{#if number && (linkDisplay !== 'grid')}
  {#if /^[A-Z!\. ]+$/.test(teaser)}
    <span class="exhort">{teaser}</span>
  {:else}
    <span class="exhort">{exhort}</span>
    <span class="teaser">{teaser}</span>
  {/if}
{/if}
</a>