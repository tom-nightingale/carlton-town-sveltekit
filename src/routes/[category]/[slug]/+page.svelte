<script lang="ts">
  import type { PageData } from "./$types";
  // import { SeoData } from "$lib/data/SeoData";
  // import Seo from "$lib/components/Seo/Seo.svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Typography, {
    TypeVariant,
    TypeComponent,
  } from "$lib/components/Typography/Typography.svelte";

  export let data: PageData;

  const { post } = data;
</script>

{post.title}
