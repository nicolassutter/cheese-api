<script lang="ts">
  import { onMount } from 'svelte'
  import { url } from '../api/axios'

  import CodeDemo from './CodeDemo.svelte'
  import CodeBlock from './CodeBlock.svelte'
  import Loader from './Loader.svelte'

  let data: any = []
  let isLoading = true
  export let query: string
  export let getData: () => Promise<any>
  export let title: string

  $: condition = !isLoading
    && (
      (Array.isArray(data) && data.length)
      || (!Array.isArray(data) && typeof data === 'object' && Object.keys(data).length)
    )

  /**
   * Mounted hook
   */
   onMount(() => {
    getData()
      .then(res => data = res)
      .finally(() => isLoading = false )
	})
</script>

<div class="max-w-xl flex-container">
  <slot name="header"></slot>

  <h3 class="text-4xl font-medium underline">{ title }</h3>
  <p class="mt-5 text-xl text-gray-700">
    <slot name="description"></slot>
  </p>

  <CodeDemo
    url={url + query}
    method="GET"
  />
  {#if isLoading}
    <Loader />
  {:else if condition}
    <CodeBlock data={data} />
  {/if}
</div>