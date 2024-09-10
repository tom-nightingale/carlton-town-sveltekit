import { error } from "@sveltejs/kit";
import client from "$lib/gql/apolloClient";
import type { GetHomeQuery, GetPostsQuery } from "$lib/gql/gen/codegen";
import { GetHomeDoc, GetPostsDoc } from "$lib/gql/gen/codegen";

// Prerender everything
export const prerender = true;

export const config = {
  isr: {
    expiration: 300,
  },
};

export async function load() {
  const homeData = await client.query<GetHomeQuery>({
    query: GetHomeDoc,
    variables: {
      first: 9,
      categorySlug: "news",
    },
  });

  const communityPosts = await client.query<GetPostsQuery>({
    query: GetPostsDoc,
    variables: {
      first: 4,
      categorySlug: "ctfc-in-the-community",
    },
  });

  if (!homeData?.data) {
    error(404, "Not found");
  }

  return {
    latestPosts: homeData?.data.posts,
    nextFixture: homeData?.data?.carltonTownOptions?.carltonOptions,
    communityPosts: communityPosts?.data.posts,
  };
}
