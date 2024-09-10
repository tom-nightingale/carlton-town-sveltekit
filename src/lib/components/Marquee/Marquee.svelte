<script lang="ts">
  import Marqueeck, { type MarqueeckOptions } from "@arisbh/marqueeck";
  import Typography, {
    TypeComponent,
    TypeVariant,
  } from "$lib/components/Typography/Typography.svelte";

  export let title = "Thank you to our sponsors!";
  export let marqueeItems: [];
  export let options: MarqueeckOptions = {
    direction: "left",
    speed: 50,
    onHover: "stop",
    hoverSpeed: 0,
  };
</script>

<div class="py-4 overflow-hidden bg-surface md:py-12">
  <div class="mb-8 text-center">
    <Typography
      variant={TypeVariant.H3}
      component={TypeComponent.h2}
      bold
      uppercase
      classes="text-accent"
    >
      {title}
    </Typography>
  </div>

  {#if marqueeItems && marqueeItems?.length > 0}
    <Marqueeck {options}>
      <div class="flex items-center gap-20 leading-4">
        {#each marqueeItems as item}
          <a href={item.sponsorLink} target="_blank">
            <img
              class="max-w-32"
              src={item.sponsorLogo.node.sourceUrl}
              alt={item.sponsorName}
            />
          </a>
        {/each}
      </div>
    </Marqueeck>
  {/if}
</div>
