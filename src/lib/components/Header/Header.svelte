<script lang="ts">
  import nplLogo from "$lib/assets/npl-logo.jpg";
  import logo from "$lib/assets/logo.png";
  import Container from "$lib/components/Container/Container.svelte";
  import Typography, {
    TypeComponent,
    TypeVariant,
  } from "$lib/components/Typography/Typography.svelte";
  import Button from "$lib/components/Button/Button.svelte";
</script>

<header class="bg-accent-dark">
  <Container>
    <div
      class="relative flex flex-wrap items-center justify-between py-4 md:justify-end md:py-8"
    >
      <a
        href="/"
        class="inline-flex w-auto h-16 border-4 border-white rounded-full md:absolute md:left-0 md:top-4 md:h-24"
      >
        <img class="" src={logo} alt="Carlton Town Fc" />
      </a>

      <div class="flex items-center">
        <div class="items-center hidden gap-2 2xs:flex 2xs:gap-2 sm:gap-4">
          <Button
            label="News"
            href="/latest-news"
            theme="naked"
            classes="text-surface"
            variant={TypeVariant.Caption}
          />
          <Button
            label="Juniors"
            href="/latest-news"
            theme="naked"
            classes="text-surface"
            variant={TypeVariant.Caption}
          />
          <Button
            label="Find us"
            href="/how-to-find-us"
            theme="naked"
            classes="text-surface"
            variant={TypeVariant.Caption}
          />
        </div>

        <button
          type="button"
          class="inline-flex items-center gap-2 transition-all duration-200 group text-surface hover:text-highlight focus:text-highlight 2xs:ml-4 sm:ml-4 md:hidden"
        >
          <Typography
            variant={TypeVariant.Caption}
            component={TypeComponent.span}
            classes="text-surface group-hover:text-highlight transition-all duration-200"
          >
            Menu
          </Typography>
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <!-- <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav class="flex items-center justify-between h-16 lg:h-20">
          

          <div class="hidden md:flex md:items-center md:space-x-10">
            <a
              href="#"
              title=""
              class="text-sm font-medium text-white transition-all duration-200 hover:text-opacity-70 focus:text-opacity-70 lg:text-base"
            >
              Features
            </a>

            <a
              href="#"
              title=""
              class="text-sm font-medium text-white transition-all duration-200 hover:text-opacity-70 focus:text-opacity-70 lg:text-base"
            >
              Solutions
            </a>

            <a
              href="#"
              title=""
              class="text-sm font-medium text-white transition-all duration-200 hover:text-opacity-70 focus:text-opacity-70 lg:text-base"
            >
              Resources
            </a>

            <a
              href="#"
              title=""
              class="text-sm font-medium text-white transition-all duration-200 hover:text-opacity-70 focus:text-opacity-70 lg:text-base"
            >
              Pricing
            </a>
          </div>
        </nav>
      </div> -->
    </div>
  </Container>
</header>

<!-- xs to lg -->
<!-- <nav class="min-h-screen px-4 py-10 text-center bg-black md:hidden">
      <button
        type="button"
        class="inline-flex p-2 text-white transition-all duration-200 rounded-md hover:bg-gray-800 focus:bg-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <nav class="flex flex-col items-center mt-10 space-y-2">
        <a
          href="#"
          title=""
          class="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
        >
          Features
        </a>

        <a
          href="#"
          title=""
          class="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
        >
          Solutions
        </a>

        <a
          href="#"
          title=""
          class="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
        >
          Resources
        </a>

        <a
          href="#"
          title=""
          class="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
        >
          Pricing
        </a>
      </nav>
    </nav>
  </div>
</header> -->

<a
  href="https://www.thenpl.co.uk/"
  class="flex justify-center bg-npl"
  target="_blank"
  rel="noopener nofollow"
>
  <img
    src={nplLogo}
    alt="Northern Premier League"
    class="w-full max-w-96 md:max-w-[450px]"
  />
</a>
