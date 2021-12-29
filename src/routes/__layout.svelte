<script>
  import "../app.css";
  import Nav from "$lib/Nav.svelte";
</script>

<div class="mx-auto h-screen" style="max-width:2400px;">
  <div class="pb-20 px-4 sm:px-9 md:px-16 h-full overflow-y-scroll">
    <slot />
  </div>
  <div class="fixed bottom-0 left-0 w-full h-10 sm:bg-white sm:dark:bg-gray-900 z-50">
    <div class="w-full bottom-0 absolute">
      <Nav />
    </div>
  </div>
</div>

