<script lang="ts">
  import { getCheeses } from './api/index'
  import { Link } from "svelte-routing"
  import QueryDoc from './components/QueryDoc.svelte'
</script>


<div class="w-full max-w-4xl space-y-10">
  <h1 class="text-4xl font-bold md:text-7xl">The Cheese API</h1>

  <p class="text-xl leading-relaxed">
    With the cheese api you can finally complete you wildest fantasy and discover more cheese than you could possibly eat in a lifetime.
  </p>

  <Link
    to="/docs"
    class="rounded rounded-r btn-cheese w-max">
    Get started
  </Link>

  <div class="pt-20">
    <QueryDoc
      getData={getCheeses}
      title="Get all the cheese:"
      query="/cheeses"
    >
      <span slot="description">
        This is the simplest query to get you started, you will get an <code class="inline-code">Array</code> of <code class="inline-code">Cheese</code>
      </span>
    </QueryDoc>
  </div>
</div>
