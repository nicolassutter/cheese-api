<script lang="ts">
  import { toaster } from './../misc/toaster'
  import { fly } from 'svelte/transition'
</script>


<div class="fixed w-full max-w-sm space-y-4 top-5 right-5">
  { #each $toaster.toasts as { message } }
    <article transition:fly="{{ y: 5, duration: 200 }}" class="px-5 py-4 text-yellow-800 bg-yellow-300 rounded backdrop-blur-lg toast">
      { message }
    </article>
  { /each }
</div>
