<template>
  <article>
    <div class="slider">
      <carousel wrapAround :autoplay="5000" :items-to-show="2.3">
        <slide v-for="slide in trendingMovie" :key="slide">
          <Carouselcard :slide="slide"/>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>

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
        <div class="discover-filter-card-container">
          <FilterSearch @emitSelectedSortBy="emitSelectedSortBy" @emitSelectedGenre="emitSelectedGenre"/>
          <div class="discover-card">
            <div v-for="item in discoverMovie" :key="item" class="cards">
              <Moviecard :movie="item" />
            </div>
          </div>
          <div class="btn-container">
            <button @click="onLoadMore" class="load-more">
              Load More
            </button>
          </div>

        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import FilterSearch from "@/components/FilterSearch";
import Moviecard from "@/components/MovieCard";
import {mapActions, mapState} from "vuex";
import Carouselcard from "@/components/CarouselCard";

export default {
  name: 'home',
  components: {
    Carouselcard,
    Moviecard,
    FilterSearch,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      payloadQueryString: {
        language: 'en-US',
        page: 1
      }
    }
  },
  mounted() {
    this.getPopularMovie()
    this.filterDiscoverMovie()
    this.getMoviesGenre()
  },
  methods: {
    ...mapActions([
      'getPopularMovie',
      'getDiscoverMovie',
      'getMoviesGenre'
    ]),
    SortByComparer(prop, comparer) {
      function compare( a, b ) {
        if(comparer === 'asc') {
          if ( a[prop] < b[prop] ){
            return -1;
          }
          if ( a[prop] > b[prop] ){
            return 1;
          }
          return 0;
        } else if(comparer === 'dsc') {
          if ( a[prop] > b[prop] ){
            return -1;
          }
          if ( a[prop] < b[prop] ){
            return 1;
          }
          return 0;
        }
      }
      this.discoverMovie.sort(compare);
    },
    emitSelectedSortBy(selected) {
      switch(selected) {
        case 'popularity.asc':
            this.SortByComparer( 'popularity', 'asc')
          break;
        case 'popularity.desc':
            this.SortByComparer( 'popularity', 'dsc')
          break;
        case 'release_date.asc':
            this.SortByComparer( 'release_date', 'asc')
          break;
        case 'release_date.desc':
            this.SortByComparer( 'release_date', 'dsc')
          break;
        case 'vote_average.asc':
            this.SortByComparer( 'vote_average', 'asc')
          break;
        case 'vote_average.desc':
            this.SortByComparer( 'vote_average', 'dsc')
          break;
        default:
          break
      }
      // to hit tmdb api
      // this.payloadQueryString.sort_by = selected
      // this.filterDiscoverMovie()
    },
    emitSelectedGenre(arr){
      let filtered = []
        if (arr.length) {
          this.tempMovies.forEach(movie => {
            let matchArr = arr.filter(function (obj) {
              return movie.genre_ids.indexOf(obj) === -1;
            });
            if (!matchArr.length) {
              filtered.push(movie)
            }
          })
        } else {
          filtered = [...this.tempMovies]
        }
      this.$store.commit('SET_DISCOVER_MOVIE', filtered)

      // to hit tmdb api
      // this.payloadQueryString.with_genres = arr.join(',')
      // this.filterDiscoverMovie()
    },
    filterDiscoverMovie() {
      this.getDiscoverMovie(this.payloadQueryString)
    },
    onLoadMore() {
      this.payloadQueryString.page++
      this.filterDiscoverMovie()
      this.$nextTick(() => this.$el.querySelector(".discover").scrollIntoView({block: 'start', behavior: "smooth" }))
    },

  },
  computed: {
    ...mapState([
      'genreList',
      'discoverMovie',
      'mvMovieCount',
      'trendingMovie',
      'tempMovies'
    ])
  },
}
</script>

<style lang="scss">
@import '.././assets/style/carousel.scss';

</style>

<style lang="scss" scoped>
.slider {
  height: 428px;
  margin-top: 2em;
  padding-top: 1em;
  padding-bottom: -1em;
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
      .btn-container{
        margin: 3em 0;
        grid-column: 2/3;

        display: flex;
        justify-content: center;
        align-items: center;
        .load-more{
          display: flex;
          justify-content: center;
          align-items: center;
          color: #E5E5E5;
          cursor: pointer;
          border: none;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;

          width: 151px;
          height: 32px;
          background: #FF0000;
          border-radius: 32px;
        }
      }

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
