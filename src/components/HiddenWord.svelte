<script>
  import Link from './Link.svelte'
  export let id, text
  export let page = false
  export let number = '', pretext = '', exhort = '', section = '', title = ''
  export let prev, next
</script>

<style>
  h2 { margin: 0; }
  h2.hidden { display: none; }

  .page h2 { opacity:0.2; font-weight:bold; position:fixed; top:5px; right:5%; }
  @media all and (min-height: 600px) {
    .page h2 { top:50px; }
    div.page { margin-top:50px; }
  }

  div.list { margin-top: 2em; }
  .list h2 { opacity:0.4; float:right; display:block; width:1.3em; text-align:right; }
  @media all and (min-width:560px) { .list h2 { float:left; text-align:left; } }
  @media all and (min-width:900px) { .list h2 { margin-left:-2em; font-size:160%; text-align:right; } }
  .list h2 .section { display:none; }
</style>

<div class:page class:list={!page}>
  {#if pretext}
    <p class="pretext">{pretext}</p>
  {/if}

  <h2 class:hidden="{!title}" id="{id}">
  <span class="section">{section || id}</span>
  {#if page}
    {number || ''}
  {:else if number}
    <a href="/hw/{id}">{number}</a>
  {/if}
  </h2>

  {#if exhort}
    <p class="exhort">{exhort}</p>
  {/if}
  <p>{text}</p>

  {#if page && (prev || next)}
    <div class="text-center">
    {#if prev}
      <Link {...prev} linkDisplay="prev" />
    {/if}
    {#if next}
      <Link {...next} linkDisplay="next" />
    {/if}
    </div>
  {/if}

</div>