import { error } from "@sveltejs/kit";
import client from "$lib/gql/apolloClient";
import type { GetPostQuery } from "$lib/gql/gen/codegen";
import { GetPostDoc } from "$lib/gql/gen/codegen";

// Prerender everything
export const prerender = true;

export const config = {
  isr: {
    expiration: 600,
  },
};

export async function load({ params }) {
  const { slug } = params;

  const postData = await client.query<GetPostQuery>({
    query: GetPostDoc,
    variables: {
      id: slug,
    },
  });

  if (!postData?.data) {
    error(404, "Not found");
  }

  return {
    post: postData.data.post,
  };
}
