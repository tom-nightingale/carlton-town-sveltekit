<script lang="ts">
  import Container from "$lib/components/Container/Container.svelte";
  import Typography, {
    TypeComponent,
    TypeVariant,
  } from "$lib/components/Typography/Typography.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  import Icon from "$lib/components/Icon/Icon.svelte";

  export let posts: [];
  export let category = "";
  export let title = "";
  export let classes = "";
</script>

<div class={`py-6 md:py-12 ${classes}`}>
  <Container>
    <div class="mb-6 text-center md:mb-12">
      <Typography
        variant={TypeVariant.H2}
        component={TypeComponent.h2}
        bold
        uppercase
        classes="text-accent"
      >
        {title}
      </Typography>
    </div>
    <div class="grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {#each posts as post}
        <div
          key={post.node.slug}
          class="group flex flex-col overflow-hidden rounded-md bg-white transition-all duration-300 hover:scale-[101%] hover:shadow-lg hover:shadow-accent/10"
        >
          <a href={`/${category}/${post.node.slug}`}>
            <div class="relative aspect-[5/4] overflow-hidden rounded-t-md">
              <div class="relative w-full h-full">
                <img
                  class="object-cover object-center w-full h-full"
                  src={post.node.featuredImage.node.sourceUrl}
                  alt={post.node.featuredImage.node.altText}
                />
              </div>
            </div>
          </a>
          <a
            href={`/${category}/${post.node.slug}`}
            class="flex flex-col justify-between h-full p-4"
          >
            <div>
              <Typography
                variant={TypeVariant.Caption}
                component={TypeComponent.p}
                classes="mb-2 !text-xs text-on-surface "
              >
                {new Date(post.node.date).toLocaleDateString()}
              </Typography>

              <Typography
                variant={TypeVariant.H6}
                component={TypeComponent.h2}
                bold
                classes="mb-2 !text-base text-accent"
              >
                {post.node.title}
              </Typography>
            </div>

            <Typography
              variant={TypeVariant.Body1}
              component={TypeComponent.p}
              classes="!text-sm"
            >
              Read full story <Icon icon="angle-right" width={12} height={12} />
            </Typography>
          </a>
        </div>
      {/each}
    </div>
    <div class="flex justify-center w-full mx-auto mt-12">
      <Button href={`/${category}/`} label="View all" />
    </div>
  </Container>
</div>
