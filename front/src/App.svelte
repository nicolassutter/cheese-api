<script lang="ts">
  import { Router, Link, Route } from "svelte-routing"
  import Home from './Home.svelte'
  import Toaster from './components/Toaster.svelte'
  import Docs from './Docs.svelte'
  import 'spinkit/spinkit.min.css'

  export let url = ''
</script>

<main class="flex flex-col items-center p-10 text-gray-800">
  <Toaster />
  <Router url="{url}">
    <Route path="/" component={Home} />
    <Route path="/docs" component={Docs} />
  </Router>
</main>

<style global lang="scss">
  @import './assets/styles/app.scss';
</style>