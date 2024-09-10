<script lang="ts" context="module">
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import Typography, { TypeComponent, TypeVariant } from "./Typography.svelte";

  export const meta = {
    title: "Components/Typography",
    component: Typography,
  };
</script>

<Template let:args>
  <div class="flex flex-col gap-5">
    <Typography variant={TypeVariant.H1} component={TypeComponent.h1} {...args}>
      TypeVariant.H1
    </Typography>
    <Typography variant={TypeVariant.H2} component={TypeComponent.h2} {...args}>
      TypeVariant.H2
    </Typography>
    <Typography variant={TypeVariant.H3} component={TypeComponent.h3} {...args}>
      TypeVariant.H3
    </Typography>
    <Typography variant={TypeVariant.H4} component={TypeComponent.h4} {...args}>
      TypeVariant.H4
    </Typography>
    <Typography variant={TypeVariant.H5} component={TypeComponent.h5} {...args}>
      TypeVariant.H5
    </Typography>
    <Typography variant={TypeVariant.H6} component={TypeComponent.h6} {...args}>
      TypeVariant.H6
    </Typography>
    <Typography
      variant={TypeVariant.Body1}
      component={TypeComponent.p}
      {...args}
    >
      TypeVariant.Body1 -- Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Integer laoreet consectetur mi non facilisis. Orci varius natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus
      commodo convallis turpis sed consectetur. Nullam ornare varius sodales.
      Aliquam eu enim eu mauris euismod fringilla. Aenean porta augue at quam
      aliquet varius. Aenean facilisis eros dolor, vel facilisis ex laoreet
      eget. <a href="/">Suspendisse ut fringilla ante</a>, nec volutpat mauris.
      Nunc sed feugiat lacus. Donec ut lacus imperdiet, laoreet ligula ac,
      consectetur leo. Aenean fermentum posuere sapien in molestie. In tempus
      suscipit blandit.
    </Typography>
    <Typography
      variant={TypeVariant.Button}
      component={TypeComponent.p}
      {...args}
    >
      TypeVariant.Button
    </Typography>
    <Typography
      variant={TypeVariant.Caption}
      component={TypeComponent.p}
      {...args}
    >
      TypeVariant.Caption
    </Typography>
    <Typography
      variant={TypeVariant.Overline}
      component={TypeComponent.p}
      {...args}
    >
      TypeVariant.Overline
    </Typography>
  </div>
</Template>

<Story name="Default" />
