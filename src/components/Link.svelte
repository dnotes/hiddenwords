<script>
  export let id, number
  export let title = ''
  export let exhort = ''
  export let teaser = ''
  export let linkDisplay

  // A few of the teasers are shortened exhortations
  if (/^[A-Z!\. ]+$/.test(teaser)) {
    exhort = teaser
    teaser = ''
  }
</script>

<style>
  a.grid { text-align: center; margin: 1%; display: inline-block; width: 8%; padding: 2% 0; margin: 1%; }
  a.list { display: block; height: 44px; line-height: 44px; overflow: hidden; }
  a.list .number { padding-right: 10px; display: inline-block; width: 20px; text-align: right; }
  a.next, a.prev { display: inline-block; height: 40px; width: 40px; line-height: 40px; font-size: 28px; padding: 2%; }
</style>

{#if linkDisplay === 'prev' || linkDisplay === 'next'}
  <a href="/hw/{id}" class="{linkDisplay}" title="{title || id} : {exhort} {teaser}">
  <i class="fa fa-chevron-{linkDisplay === 'prev' ? 'left' : 'right'}" />
  </a>
{:else}
  <a href="/hw/{id}" class="{linkDisplay}">
  <span class="number">{number || id}</span>
  <!-- do we need more for prev/next? -->
  {#if number && (linkDisplay === 'list')}
    <span class="exhort">{exhort}</span>
    {#if teaser}
      <span class="teaser">{teaser}</span>
    {/if}
  {/if}
  </a>
{/if}