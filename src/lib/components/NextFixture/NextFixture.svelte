<script lang="ts">
  import Container from "$lib/components/Container/Container.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  import Typography, {
    TypeVariant,
    TypeComponent,
  } from "$lib/components/Typography/Typography.svelte";

  export let title = "Next Fixture";
  export let nextFixture;

  const { homeTeam, awayTeam, competition, time, venue, date } = nextFixture;
</script>

<div class="px-4 text-white bg-gradient-to-tr from-accent-light to-accent">
  <Container>
    <div
      class="flex flex-col items-center gap-4 py-8 lg:flex-row xl:justify-center xl:px-16"
    >
      <div
        class="flex flex-col items-center justify-between flex-grow gap-2 text-center lg:flex-row lg:justify-center lg:gap-6"
      >
        <div class="lg:border-r lg:border-white lg:pr-4">
          <Typography
            variant={TypeVariant.H1}
            component={TypeComponent.h2}
            bold
            uppercase
            classes=""
          >
            {title}
          </Typography>
        </div>
        <div class="flex items-center gap-4">
          <Typography
            variant={TypeVariant.Body1}
            component={TypeComponent.p}
            classes={homeTeam.toLowerCase() === "carlton town fc"
              ? "text-highlight"
              : ""}
            bold
          >
            {homeTeam}
          </Typography>

          <Typography
            variant={TypeVariant.Caption}
            component={TypeComponent.p}
            classes=""
          >
            VS
          </Typography>

          <Typography
            variant={TypeVariant.Body1}
            component={TypeComponent.p}
            classes={awayTeam.toLowerCase() === "carlton town fc"
              ? "text-highlight"
              : ""}
            bold
          >
            {awayTeam}
          </Typography>
        </div>

        <div class="flex gap-4 lg:flex-col lg:gap-0">
          <Typography
            variant={TypeVariant.Caption}
            component={TypeComponent.p}
            classes=""
          >
            {competition}
          </Typography>
        </div>

        <div class="flex gap-4 lg:flex-col lg:gap-0">
          <Typography
            variant={TypeVariant.Caption}
            component={TypeComponent.p}
            classes=""
            bold
          >
            {new Date(date).toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
          <Typography
            variant={TypeVariant.Caption}
            component={TypeComponent.p}
            classes=""
          >
            KO: {time}
          </Typography>
          <Typography
            variant={TypeVariant.Caption}
            component={TypeComponent.p}
            classes=""
          >
            {venue}
          </Typography>
        </div>

        {#if homeTeam.toLowerCase() === "carlton town fc"}
          <div class="mt-2 lg:mt-0">
            <Button
              href="https://shop.carltontownfc.co.uk/"
              newTab={true}
              label="Buy tickets"
            />
          </div>
        {/if}
      </div>
    </div></Container
  >
</div>
