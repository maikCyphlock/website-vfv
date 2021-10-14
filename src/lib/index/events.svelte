<script>
  import {
    Col,
    Row,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
  } from "sveltestrap";
  const items = ["/img005", "/img002", "/img003", "/img004","img007"];
  let activeIndex = 0;
</script>

<div id="events" class=" justify-center align-center pb-5">
  <h1 class="mx-auto">eventos</h1>
  <Carousel {items} bind:activeIndex class="m-lg-5 slide shadow-lg">
    <CarouselIndicators bind:activeIndex {items} />

    <div class="carousel-inner ratio ratio-16x9">
      {#each items as item, index}
        <CarouselItem bind:activeIndex itemIndex={index}>
          <img
            src={item+".jpg"}
            loading="lazy"
            class="d-block w-100"
            alt={`${item} ${index + 1}`}
          />
        </CarouselItem>
      {/each}
    </div>

    <CarouselControl direction="prev" bind:activeIndex {items} />
    <CarouselControl direction="next" bind:activeIndex {items} />
  </Carousel>
</div>
<style>
  .carousel-inner{
    transition: all ease-in-out .5s;
  }
</style>