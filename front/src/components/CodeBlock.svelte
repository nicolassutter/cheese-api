<script lang="ts">
  import { fade } from 'svelte/transition'
  export let data: any
</script>

{#if data !== undefined}
  <pre
    transition:fade="{{ duration: 100 }}"
    class="max-w-full py-2 mt-5 text-white rounded bg-bluegray-800 px-7"
  >
    <code class="block py-1 overflow-x-auto">
      { JSON.stringify(data, null, 2) }
    </code>
  </pre>
{/if}