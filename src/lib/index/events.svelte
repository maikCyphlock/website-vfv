<script>
  import {
    Col,
    Row,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
  } from "sveltestrap";
  const items = ["/img005.jpg", "/img002.jpg", "/img003.jpg", "/img004.jpg"];
  let activeIndex = 0;
</script>

<div id="events" class=" justify-center align-center">
  <h1 class="mx-auto">eventos</h1>
  <Carousel {items} bind:activeIndex class="m-lg-5 slide">
    <CarouselIndicators bind:activeIndex {items} />

    <div class="carousel-inner ratio ratio-16x9">
      {#each items as item, index}
        <CarouselItem bind:activeIndex itemIndex={index}>
          <img
            src={item}
            lazy
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
