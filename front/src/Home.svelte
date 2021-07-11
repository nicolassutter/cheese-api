<script lang="ts">
  import type { Cheese } from '../../@types/interfaces/cheese'
  import { getCheeses } from './api/index'
  import { onMount } from 'svelte'
  import { Link } from "svelte-routing"
  
  let cheeses: Cheese[] = []
  let codeURL: HTMLElement

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeURL.textContent)
  }

  /**
   * Mounted hook
   */
   onMount(() => {
		getCheeses().then(_cheeses => cheeses = _cheeses.slice(0, 3))
	})
</script>


<div class="max-w-xl flex-container">
  <h1 class="mb-10 font-bold text-7xl">Get started now</h1>
  <Link to="/" class="block p-3 bg-blue-700">View examples</Link>
  <p class="mb-2 text-lg">Get all the cheese:</p>
  <div class="flex code-demo">
    <span class="flex items-center justify-center px-4 font-bold text-gray-700 bg-gray-200 rounded-l">
      GET
    </span>
    <pre class="flex-grow overflow-x-auto">
      <code bind:this={codeURL} class="block py-3 text-white bg-bluegray-800 px-7">
        http://localhost:4000/cheeses
      </code>
    </pre>
    <button
      on:click={copyToClipboard}
      class="flex items-center justify-center px-4 font-bold text-gray-200 transition-colors rounded-r focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 bg-bluegray-800 hover:bg-bluegray-600">
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    </button>
  </div>
  {#if cheeses.length}
    <pre class="max-w-full py-2 mt-5 text-white rounded bg-bluegray-800 px-7">
      <code class="block py-1 overflow-x-auto">
        { JSON.stringify(cheeses, null, 2) }
      </code>
    </pre>
  {/if}
</div>