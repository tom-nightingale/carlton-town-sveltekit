<script>
  import "$lib/styles/app.css";
  import PageTransition from "$lib/components/PageTransition/PageTransition.svelte";
  import Marquee from "$lib/components/Marquee/Marquee.svelte";
  import Header from "$lib/components/Header/Header.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";

  export let data;

  const { mainMenu, topMenu, sponsors } = data;
</script>

<PageTransition pathname={data.url}>
  <Header />
  <slot />
  <Marquee marqueeItems={sponsors} />
  <Footer />
</PageTransition>
