<script lang="ts">
  import API from './api/axios'
  import { onMount } from 'svelte'
  import type { Cheese } from '../../@types/interfaces/cheese'

  let cheeses: Cheese[] = []

  const getCheeses = async () => {
    cheeses = await API({ url: 'http://localhost:4000/cheeses' })
    return cheeses
  }

  onMount(() => {
		getCheeses()
	})
</script>

<ul class="flex space-x-4 px-10 my-10">
{#each cheeses as cheese}
  <li class="card bg-white shadow-sm border border-gray-200 rounded overflow-hidden max-w-xs">
    <img class="h-48 w-full object-cover" src="{ cheese.image }" alt="{ cheese.name }">
    <article class="content p-3 flex flex-col">
      <p class="font-bold mb-3">{ cheese.name }</p>
      <p class="text-gray-600 max-h-56 overflow-auto">{ cheese.raw_description }</p>
    </article>
  </li>
{/each}
</ul>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>