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
  a.grid { text-align:center; margin:1%; display:inline-block; min-width:14%; padding: 5% 2%; margin:1%; 
           border-radius:8px; text-align:center; font-weight:bold;
           box-shadow:-2px -2px 2px rgba(155,155,155,.6), 
                      -2px -2px 2px inset rgba(65,65,65,.6), 
                      2px 2px 1px rgba(20,20,20,.8)}
  @media all and (min-width: 420px) { a.grid { padding: 6% 2%; } }
  @media all and (min-width: 600px) { a.grid { min-width:4%; padding:2%; } }
  @media all and (min-width: 820px) { a.grid { padding: 2.5% 2%; } }
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