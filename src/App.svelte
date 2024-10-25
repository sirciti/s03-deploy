<script lang="ts">
  import Binding from "./lib/Binding.svelte";
  import Products from "./lib/Products.svelte";
  import Toggle from "./lib/Toggle.svelte";
</script>


<main>
  <Toggle />
  <Binding />
  <Products />
</main>


<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }
</style>
