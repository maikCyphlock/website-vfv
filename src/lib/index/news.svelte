<script>
  import { Card, CardText, Row, Col, Button } from "sveltestrap";
  import posts from "../../post.js";
</script>

<h1>Noticias destacadas</h1>
<Row>
  {#each posts as { title, summary, date, author, permalink }}
    <Col sm="12" lg="4">
      <a href={`blog/${permalink}`} class="link-reset">
        <Card body class="my-4 shadow-sm ">
          <h2 class="text-center">{title}</h2>
          <h6>autor: {author}</h6>
          <div class="contented py-4 border-top">
            {@html summary}
          </div>
          {#if date}
            <div class="d-flex justify-content-between">
              {date}
              <Button color="primary">leer</Button>
            </div>
          {/if}
        </Card>
      </a>
    </Col>
  {/each}
</Row>

<style>
  .link-reset {
    text-decoration: none;
    color: currentColor;
  }

  .contented {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
</style>
