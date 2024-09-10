<script lang="ts">
  import Container from "$lib/components/Container/Container.svelte";
  import Typography, {
    TypeComponent,
    TypeVariant,
  } from "$lib/components/Typography/Typography.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  import { truncate } from "$lib/utils/truncate";

  export let post = {};

  let category = post?.node?.categories?.edges[0]?.node?.slug;
  let viewportWidth: number;
  let lgSize = 1024;

  $: isMobile = viewportWidth < lgSize;
</script>

<svelte:window bind:innerWidth={viewportWidth} />

<div class="pt-4 lg:pt-8">
  <Container>
    <div
      class="flex flex-wrap overflow-hidden rounded-lg bg-white text-white md:min-h-[550px]"
    >
      <div class="w-full bg-accent md:w-1/2">
        <img
          class="h-[400px] w-full object-cover object-center sm:h-[600px]"
          src={post?.node?.featuredImage?.node?.sourceUrl}
          alt={post?.node?.featuredImage?.node?.altText}
        />
      </div>
      <div
        class="flex flex-col justify-center w-full p-8 text-white bg-accent md:w-1/2 lg:p-8 xl:p-12"
      >
        <Typography
          variant={TypeVariant.Caption}
          component={TypeComponent.p}
          classes="mb-2 !text-xs text-highlight"
        >
          {new Date(post.node.date).toLocaleDateString()}
        </Typography>

        <Typography
          variant={TypeVariant.H1}
          component={TypeComponent.h1}
          classes="text-surface mb-4"
        >
          {post?.node?.title}
        </Typography>

        <Typography
          variant={TypeVariant.Body1}
          component={TypeComponent.span}
          classes="mb-6 !text-xs text-surface"
        >
          {@html truncate(post.node.excerpt, isMobile ? 25 : 55)}
        </Typography>

        <div class="">
          <Button
            href={`/${category}/${post.node.slug}`}
            label="Read full story"
          />
        </div>
      </div>
    </div>
  </Container>
</div>
