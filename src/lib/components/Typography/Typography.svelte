<script lang="ts" context="module">
  export enum TypeVariant {
    H1 = "text-h1",
    H2 = "text-h2",
    H3 = "text-h3",
    H4 = "text-h4",
    H5 = "text-h5",
    H6 = "text-h6",
    Body1 = "text-body1",
    Button = "text-button",
    Caption = "text-caption",
    Overline = "text-overline",
  }

  export enum TypeComponent {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6",
    p = "p",
    span = "span",
  }
</script>

<script lang="ts">
  export let variant: TypeVariant = TypeVariant.Body1;
  export let component: TypeComponent = TypeComponent.span;
  export let strikeThrough: boolean = false;
  export let underline: boolean = false;
  export let bold: boolean = false;
  export let italic: boolean = false;
  export let uppercase: boolean = false;
  export let classes: string = "text-on-background";
</script>

<style lang="postcss">
  .text-h1 {
    @apply text-3xl font-extrabold uppercase leading-tight xl:text-4xl;
  }

  .text-h2 {
    @apply text-2xl xl:text-3xl;
  }

  .text-h3 {
    @apply text-xl xl:text-2xl;
  }

  .text-h4 {
    @apply text-xl xl:text-xl;
  }

  .text-h5 {
    @apply text-xl xl:text-xl;
  }

  .text-h6 {
    @apply text-xl;
  }

  .text-body1 {
    @apply text-base;

    :global(a) {
      /* @apply text-highlight; */

      &:hover {
        @apply underline;
      }
    }
  }

  .text-button {
    @apply text-sm;
  }

  .text-caption {
    @apply text-sm uppercase tracking-wider;
  }

  .text-overline {
    @apply text-sm uppercase tracking-widest;
  }
</style>

{#if component === TypeComponent.h1}
  <h1
    class={`${variant} ${classes}`}
    class:uppercase
    class:underline
    class:italic
    class:font-bold={bold}
    class:line-through={strikeThrough}
    {...$$props}
  >
    <slot />
  </h1>
{:else if component === TypeComponent.h2}
  <h2
    class={`${variant} ${classes}`}
    class:uppercase
    class:underline
    class:italic
    class:font-bold={bold}
    class:line-through={strikeThrough}
    {...$$props}
  >
    <slot />
  </h2>
{:else if component === TypeComponent.h3}
  <h3
    class={`${variant} ${classes}`}
    class:uppercase
    class:underline
    class:italic
    class:font-bold={bold}
    class:line-through={strikeThrough}
    {...$$props}
  >
    <slot />
  </h3>
{:else if component === TypeComponent.h4}
  <h4
    class={`${variant} ${classes}`}
    class:uppercase
    class:underline
    class:italic
    class:font-bold={bold}
    class:line-through={strikeThrough}
    {...$$props}
  >
    <slot />
  </h4>
{:else if component === TypeComponent.h5}
  <h5
    class={`${variant} ${classes}`}
    class:uppercase
    class:underline
    class:italic
    class:font-bold={bold}
    class:line-through={strikeThrough}
    {...$$props}
  >
    <slot />
  </h5>
{:else if component === TypeComponent.h6}
  <h6
    class={`${variant} ${classes}`}
    class:uppercase
    class:underline
    class:italic
    class:font-bold={bold}
    class:line-through={strikeThrough}
    {...$$props}
  >
    <slot />
  </h6>
{:else if component === TypeComponent.p}
  <p
    class={`${variant} ${classes}`}
    class:uppercase
    class:underline
    class:italic
    class:font-bold={bold}
    class:line-through={strikeThrough}
    {...$$props}
  >
    <slot />
  </p>
{:else if component === TypeComponent.span}
  <span
    class={`${variant} ${classes}`}
    class:uppercase
    class:underline
    class:italic
    class:font-bold={bold}
    class:line-through={strikeThrough}
    {...$$props}
  >
    <slot />
  </span>
{/if}
