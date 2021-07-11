<script lang="ts">
  export let tag
  export let type = ''
  export let name = ''
</script>

<span class="block my-2">
  <span class="font-bold">{ tag }</span> - {#if name}<span class="underline">{ name }</span> - {/if}{#if type}<span class="inline-code">{ type }</span> - {/if}<slot></slot>
</span>