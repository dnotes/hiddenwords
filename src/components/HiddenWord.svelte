<script>
  import Link from './Link.svelte'
  export let id, text
  export let page = false
  export let number = '', pretext = '', exhort = '', section = '', title = ''
  export let prev, next
  let textSize, h
  // This expression uses the fourth root of the number of characters over 98 to calculate how big the text should be
  $: textSize = Math.round( Math.pow( ( (pretext || '').length + text.length + (exhort || '').length * 1.4 ) - 90, 1/4 ) - 1 )
</script>

<style>
  h2 { margin: 0; }
  h2.hidden { display: none; }

  .page { padding-top:4em; }
  .page h2 { opacity:0.2; font-weight:bold; position:fixed; top:5px; right:5%; }
  .page .exhort { margin-top:0; }
  @media all and (min-height: 600px) {
    .page h2 { top:50px; }
  }

  div.list { margin-top: 2em; }
  .list h2 { opacity:0.4; float:right; display:block; width:1.3em; text-align:right; }
  @media all and (min-width:560px) { .list h2 { float:left; text-align:left; } }
  @media all and (min-width:900px) { .list h2 { margin-left:-2em; font-size:160%; text-align:right; } }
  .list h2 .section { display:none; }

  .page.t5 p.hw-text { font-size:75%; }
  .page.t4 p.hw-text { font-size:90%; }
  .page.t3 p.hw-text { font-size:110%; }
  .page.t2 p.hw-text { font-size:140%; line-height:1.35em; }
  .page.t2 p.exhort { font-size:120%; line-height:1.4em; }
  .page.t1 p.hw-text { font-size:170%; line-height:1.2em; }
  .page.t1 p.exhort { font-size:150%; line-height:1.3em; }
</style>

<svelte:window bind:innerHeight={h} />

<div class="t{textSize}" class:page class:list={!page} style="padding-top:{page ? h/4 : 0}px; {page && h ? 'margin-top:-2em;' : ''}">
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
  <p class="hw-text">{text}</p>

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