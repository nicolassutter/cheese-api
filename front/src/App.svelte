<script lang="ts">
  import type { Cheese } from '../../@types/interfaces/cheese'
  import { getCheeses } from './api/index'
  import { onMount } from 'svelte'
  import MD from './utilities/markdown'

  let cheeses: Cheese[] = []

  /**
   * Renders the description
   */
  const getDescription = (desc: string) => {
    return MD.render(desc)
  }

  /**
   * Mounted hook
   */
  onMount(() => {
		getCheeses().then(_cheeses => cheeses = _cheeses)
	})
</script>

<main class="p-10">
  {#if cheeses.length}
    <h1 class="font-bold text-3xl text-gray-900">Discover our { cheeses.length } cheeses !</h1>
    
    <ul class="flex space-x-4 my-10">
    {#each cheeses as cheese}
      <li class="card bg-white shadow-sm border border-gray-200 rounded overflow-hidden max-w-xs">
        <img class="h-48 w-full object-cover" src="{ cheese.image }" alt="{ cheese.name }">
        <article class="content p-3 flex flex-col">
          <h2 class="font-bold mb-3">{ cheese.name }</h2>
          <p class="text-gray-600 max-h-56 overflow-auto">{@html getDescription(cheese.description) }</p>
        </article>
      </li>
    {/each}
    </ul>
  {:else}
    <div class="text-center space-y-9">
      <h1 class="font-bold text-3xl text-gray-900">Holy fuck</h1>
      <h2 class="text-2xl text-gray-600">Seems like all the cheese has been eaten...</h2>
    </div>
  {/if}
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>