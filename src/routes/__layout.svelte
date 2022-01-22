<script>
import "../app.css";
import Nav from "$lib/Nav.svelte";
import Player from "$lib/Player.svelte";
import { fontSize } from "$lib/stores";
</script>

<div class="mx-auto h-screen scrollbar-hide" style="max-width:2400px; font-size:{$fontSize}px;">
  <div class="pb-4 px-4 sm:px-9 md:px-16 overflow-y-scroll scrollbar-hide lg:text-[125%] xl:text-[150%]" style="height:calc(100% - 58px)">
    <slot />
  </div>
  <div class="fixed bottom-0 left-0 w-full h-10 sm:bg-background z-50 text-base">
    <div class="w-full bottom-0 absolute">
      <Nav />
    </div>
  </div>
  <Player/>
</div>
