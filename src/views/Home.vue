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
            <p class="my-movies">My Movies</p>
            <p class="movie-counter">{{mvMovieCount}} Movies</p>
          </div>
        </div>
<!--        <FilterAndCard/>-->
        <div class="discover-filter-card-container">
          <FilterSearch/>
          <div class="discover-card">
            <div v-for="item in discoverMovie" :key="item" class="cards">
              <Moviecard :movie="item" />
            </div>
            <div class="load-more">
              <button>
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>

import FilterSearch from "@/components/FilterSearch";
import Moviecard from "@/components/MovieCard";
import {mapActions, mapState} from "vuex";
export default {
  name: 'home',
  components: {
    Moviecard,
    FilterSearch,
  },
  data() {
    return {

    }
  },
  mounted() {
    // let payload = {
    //   language: 'en-US',
    //   sort_by:
    // }
    this.getDiscoverMovie()
    this.getMoviesGenre()
  },
  methods: {
    ...mapActions([
      'getDiscoverMovie',
      'getMoviesGenre'
    ]),
  },
  computed: {
    ...mapState([
      'discoverMovie',
      'mvMovieCount'
    ])
  },
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
        .my-movies{
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          font-style: normal;
          font-weight: lighter;
          margin-right: 1em;
        }
        .movie-counter{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 98px;
          height: 32px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 32px;
          font-size: 13px;
          font-weight: 400;
        }

      }
    }

    .discover-filter-card-container {
      margin-top: 50px;
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 1.35fr 5.5fr;
      //5 coloums

      .discover-card{
        display: flex;
        flex-wrap: wrap;
        .cards{
          width: 220px;
          margin: 0 .6em .7em 0.6em;
        }
      }
    }
  }
}



</style>
