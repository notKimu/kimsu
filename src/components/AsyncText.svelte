<script lang="ts">
  export let text: string;

  export let loading: boolean;
  export let erroed: boolean;
  export let succsex: boolean;
</script>

{#if loading}
  Loading...
{:else if succsex}
  Done!
{:else if erroed}
  Error :c
{:else}
  {text}
{/if}