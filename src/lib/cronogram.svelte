<script>
  import {
    Card,
    Column,
    Table,
    CardFooter,
    CardHeader,
    CardTitle,
    CardBody,
    CardSubtitle,
    CardText,
    Button,
    Spinner,
  } from "sveltestrap";

  let spinner;

  const IframeLoaded = () => {
    spinner.$destroy();
  };
</script>

<section class="mt-4">
  <h1 class="text-center">tablas de arbitraje</h1>
  <div class="d-flex justify-content-center align-center">
    <Spinner bind:this={spinner} />
  </div>
  <iframe
    on:reset={IframeLoaded}
    on:load={IframeLoaded}
    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRyTSiW1NLIz2kPz8j2wI2sjifp59gj00u2509c4w3EuWQkYDok73ckwLygJCbjmYugBT3Z_FFvvxvb/pubhtml?gid=0&amp;single=false&amp;widget=true&amp;headers=true"
  />
</section>

<style>
  iframe {
    width: 100%;
    height: 20rem;
  }
</style>
