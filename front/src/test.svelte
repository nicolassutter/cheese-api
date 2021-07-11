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
    <h1 class="text-3xl font-bold text-gray-900">Discover our { cheeses.length } cheeses !</h1>
    
    <ul class="flex my-10 space-x-4">
    {#each cheeses as cheese}
      <li class="max-w-xs overflow-hidden bg-white border border-gray-200 rounded shadow-sm card">
        <img class="object-cover w-full h-48" src="{ cheese.image }" alt="{ cheese.name }">
        <article class="flex flex-col p-3 content">
          <h2 class="mb-3 font-bold">{ cheese.name }</h2>
          <p class="overflow-auto text-gray-600 max-h-56">{@html getDescription(cheese.description) }</p>
        </article>
      </li>
    {/each}
    </ul>
  {:else}
    <div class="text-center space-y-9">
      <h1 class="text-3xl font-bold text-gray-900">Holy fuck</h1>
      <h2 class="text-2xl text-gray-600">Seems like all the cheese has been eaten...</h2>
    </div>
  {/if}
</main>