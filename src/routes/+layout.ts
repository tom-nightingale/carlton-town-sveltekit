import { error } from "@sveltejs/kit";
import client from "$lib/gql/apolloClient";
import type { GetMenuQuery, GetSponsorsQuery } from "$lib/gql/gen/codegen";
import { GetMenuDoc, GetSponsorsDoc } from "$lib/gql/gen/codegen";

/** @type {import('./$types').PageLoad} */

// Prerender everything
export const prerender = true;

export async function load({ url }) {
  const mainMenu = await client.query<GetMenuQuery>({
    query: GetMenuDoc,
    variables: {
      slug: "full-navigation",
    },
  });

  const topNavigation = await client.query<GetMenuQuery>({
    query: GetMenuDoc,
    variables: {
      slug: "top-bar-menu",
    },
  });

  const sponsors = await client.query<GetSponsorsQuery>({
    query: GetSponsorsDoc,
  });

  return {
    url: url.pathname,
    mainMenu: mainMenu?.data?.menu,
    topMenu: topNavigation?.data?.menu,
    sponsors: sponsors?.data?.carltonTownOptions?.carltonOptions?.sponsor,
  };
}
