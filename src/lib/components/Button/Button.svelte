<script lang="ts">
  import Typography, {
    TypeVariant,
    TypeComponent,
  } from "$lib/components/Typography/Typography.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let href = "";
  export let newTab = false;
  export let label = "";
  export let theme = "primary";
  export let variant: TypeVariant = TypeVariant.Button;
  export let disabled = false;
  export let classes = "";

  /**
   * Optional click handler
   */
  function onClick(event: Event) {
    dispatch("click", event);
  }
</script>

<style>
  .button {
    @apply inline-block rounded-full px-6 py-2 font-bold uppercase transition duration-200;

    &.disabled {
      @apply pointer-events-none;
    }
  }

  .primary {
    @apply bg-highlight text-accent;
    @apply hover:bg-highlight-light hover:text-surface;

    &.disabled {
      @apply border-transparent bg-on-surface/30;
    }
  }

  .secondary {
    @apply border-inverse-surface bg-transparent hover:bg-inverse-surface hover:text-white;

    &.disabled {
      @apply border-on-surface/30 text-on-surface/30;
    }
  }

  .naked {
    @apply p-0 font-normal;
  }
</style>

{#if href}
  <a
    class={`button ${theme}`}
    class:disabled
    {href}
    target={newTab ? "_blank" : null}
    rel="noopener noreferrer"
  >
    <Typography component={TypeComponent.span} {variant} {classes}>
      {label}
    </Typography>
  </a>
{:else}
  <button
    class={`button ${theme}`}
    class:disabled
    on:click={onClick}
    {disabled}
  >
    <Typography component={TypeComponent.span} {variant} {classes}>
      {label}
    </Typography>
  </button>
{/if}
