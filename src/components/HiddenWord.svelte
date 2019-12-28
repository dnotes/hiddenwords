<script>
  import Link from './Link.svelte'
  export let id, text
  export let page = false
  export let number = '', pretext = '', exhort = '', section = '', title = ''
  export let prev, next
</script>

<style>
  .pretext { font-style: italic; font-size: 90%; }
  .exhort { opacity: 0.9; }
  h2.title { margin: 0; }
  h2.title.hidden { display: none; }
  h2.title.page { opacity:0.2; font-weight:bold; position:fixed; top:5px; left:5%; }
  h2.title.list { opacity:0.4; float:left; display:block; width:30px; margin-left:-20px; text-align:right; padding-right: 10px; line-height:24px; font-size:18px; }
  h2.title.list a { font-size:20px; line-height:24px; }
  @media screen and (min-width:600px) {
    h2.title.list, h2.title.list a { font-size:24px; line-height:28px; }
  }
  @media screen and (min-width:1000px) {
    h2.title.list { margin-left: -50px; }
  }
  h2.title.list .section { display:none; }
</style>

<div class:page>
  {#if pretext}
    <p class="pretext">{pretext}</p>
  {/if}

  <h2 class="title" class:page class:list="{!page}" class:hidden="{!title}" id="{id}">
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