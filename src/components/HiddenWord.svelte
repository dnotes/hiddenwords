<script>
  export let id, text
  export let page = false
  export let number = '', pretext = '', exhort = '', section = '', title = ''
</script>

<style>
  .pretext { font-style: italic; font-size: 90%; }
  .exhort { opacity: 0.9; }
</style>

<div class:page>
  {#if pretext}
    <p class="pretext">{pretext}</p>
  {/if}

  <h2 class="title" class:hidden="{title}" id="{id}">
  <span class="section">{section || id}</span>
  {number || ''}
  </h2>

  {#if exhort}
    <p class="exhort">{exhort}</p>
  {/if}
  <p>{text}</p>
</div>