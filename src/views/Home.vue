<template>
  <article>
    <div class="slider">
      SLIDER
    </div>
    <div class="discover-background"></div>
    <div class="discover">
      <div class="discover-base">
        <div class="discover-header">
          <div class="orange-rect"></div>
          <h2>
            Discover Movies
          </h2>
          <div class="discover-my-movies">
            <p >My Movies</p>
            <p> 0 Movies</p>
          </div>
        </div>
        <FilterAndCard/>
      </div>
    </div>
  </article>
</template>

<script>

import FilterAndCard from "@/components/FilterAndCard";
export default {
  name: 'home',
  components: {FilterAndCard},
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  background-color: plum;
  height: 428px;
  margin-top: 2em;
}
.discover-background{
  background: rgba(255, 255, 255, 0.05);
  width: 1440px;
  height: 333px;
  margin-top: 5em;
}
.discover {
  margin-top: -20em;
  width: 1440px;
  display: flex;
  justify-content: center;
  .discover-base{
    margin-top: 90px;
    width: 1220px;

    z-index: 1;
    .discover-header {
      width: 100%;
      display: grid;
      .orange-rect {
        width: 112px;
        height: 6px;
        background: #E74C3C;
        grid-column: 1/3;
        grid-row: 1;
        margin-bottom: 1em;
      }
      h2{
        grid-column: 1/2;
        grid-row: 2/3;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 29px;

      }
      .discover-my-movies{
        grid-column: 3/4;
        grid-row: 2/3;
        display: flex;
        justify-content: right;
      }
    }

  }
}

</style>
