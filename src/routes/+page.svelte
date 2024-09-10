<script lang="ts">
  import type { PageData } from "./$types";
  // import { SeoData } from "$lib/data/SeoData";
  // import Seo from "$lib/components/Seo/Seo.svelte";

  import Hero from "$lib/components/Hero/Hero.svelte";
  import PostGrid from "$lib/components/PostGrid/PostGrid.svelte";
  import NextFixture from "$lib/components/NextFixture/NextFixture.svelte";

  export let data: PageData;

  const { latestPosts, nextFixture, communityPosts } = data;
</script>

<!-- <Seo seo={SeoData} /> -->

<Hero post={latestPosts.edges.slice(0, 1)[0]} />

{#if latestPosts?.edges && latestPosts?.edges.length > 0}
  <PostGrid
    title="Latest News"
    posts={latestPosts.edges.slice(1)}
    category="news"
  />
{/if}

<NextFixture {nextFixture} />

{#if communityPosts?.edges && communityPosts?.edges.length > 0}
  <PostGrid
    title="CTFC In The Community"
    posts={communityPosts.edges}
    category="ctfc-in-the-community"
  />
{/if}
