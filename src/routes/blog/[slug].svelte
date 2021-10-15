<script context="module">
  import { findPost } from "../../post";
  import { Container } from "sveltestrap";
  import Navbar from "../../lib/navbar.svelte";

  export async function load(page, session) {
    const slug = page.page.params.slug;

    const post = findPost(slug);
    
    return { props: { post } };
  }
</script>

<script>
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
  <link rel="stylesheet" href="/markdown.css" />
</svelte:head>

<Navbar />
<Container class="mt-4 stackedit">
  <h3 class="text-center">{post.title}</h3>

  <div class="content border-bottom stackedit__html">{@html post.html}</div>

  <div class="d-flex mt-5 justify-content-center ">
    <a href="/" role="link" class="btn btn-success"> Regresar</a>
  </div>
</Container>

<style>
</style>
