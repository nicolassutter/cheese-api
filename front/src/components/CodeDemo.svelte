<script lang="ts">
  let codeURL: HTMLElement
  export let url: string
  export let method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'

  import { push } from '../misc/toaster'

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(codeURL.textContent)
      push({ message: 'Copy successful !' })
    } catch (error) {
      push({ message: 'Something went wrong...' })
    }
  }
</script>

{ #if url && method }
  <div class="flex mt-5 code-demo">
    <span class="flex items-center justify-center px-4 rounded-l no-hover btn-cheese">
      { method }
    </span>
    <code bind:this={codeURL} class="flex-grow block py-3 text-white bg-bluegray-800 px-7">
      { url }
    </code>
    <button
      on:click={copyToClipboard}
      class="flex items-center justify-center px-4 font-bold text-gray-200 transition-colors rounded-r focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 bg-bluegray-800 hover:bg-bluegray-600">
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    </button>
  </div>
{ /if }