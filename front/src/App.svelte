<script lang="ts">
  import { Router, Link, Route } from "svelte-routing"
  import Home from './Home.svelte'

  export let url = ''
</script>

<main class="flex flex-col items-center p-10 text-gray-800">
  <Router url="{url}">
    <Route path="/" component={Home} />
  </Router>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>