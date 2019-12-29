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
  a.grid { text-align:center; display:inline-block; width:18%; margin:1%; padding: .5em 0;
           border-radius:8px; text-align:center; font-weight:bold;
           box-shadow:-2px -2px 2px rgba(155,155,155,.6), 
                      -2px -2px 2px inset rgba(65,65,65,.6), 
                      2px 2px 1px rgba(20,20,20,.8)}
  a.grid:nth-child(83) { width:auto !important; padding: .5em 2%; }
  @media all and (min-width: 680px) { a.grid { width:8%; } }
  a.list { display: block; height: 44px; line-height: 44px; overflow: hidden; }
  @media screen and (min-width: 1500px) { a.list { height: 1.2em; line-height: 1.2em; } }
  a.list .number { padding-right: .2em; display: inline-block; width: 1.3em; text-align: right; }
  a.list:nth-child(83) { padding-left: 1.76em; }
  a.next, a.prev { display: inline-block; height: 2em; width: 2em; line-height: 2em; padding: .5em; }
</style>

{#if linkDisplay === 'prev' || linkDisplay === 'next'}
  <a href="/hw/{id}" class="{linkDisplay}" title="{title || id} : {exhort} {teaser}">
  <i class="fa fa-chevron-{linkDisplay === 'prev' ? 'left' : 'right'}" />
  </a>
{:else}
  <a href="/hw/{id}" class="{linkDisplay}">
  <span class="number">{number || id}</span>
  {#if number && (linkDisplay === 'list')}
    <span class="exhort">{exhort}</span>
    {#if teaser}
      <span class="teaser">{teaser}</span>
    {/if}
  {/if}
  </a>
{/if}