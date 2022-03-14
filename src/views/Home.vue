<template>
  <article>
    <div class="slider">
<!--      :autoplay="5000" :items-to-show="1.5"-->
      <carousel wrapAround :autoplay="5000" :items-to-show="2.3">
        <slide v-for="slide in trendingMovie" :key="slide">
          <div class="slider-card-container">
            <div class="slider-image-container">
              <img width="243.08" height="364.61" :src="`https://image.tmdb.org/t/p/original/${slide.poster_path}`" alt="movie poster">
            </div>
            <div class="slider-info-container">
              <div class="slider-info-inner-container">
                <h5>
                  ⭐ {{ slide.vote_average }}
                </h5>
                <h2>{{ slide.original_title }}</h2>
                <h3>{{ slide.release_date?.split('-')[0] }} <span class="slider-silver-dot"></span> {{parseGenre(slide.genre_ids)}} </h3>
                <p>
                 {{ slide.overview }}
                </p>
              </div>

            </div>
          </div>
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
export default {
  name: 'home',
  components: {
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
    emitSelectedSortBy(selected) {
      this.payloadQueryString.sort_by = selected
      this.filterDiscoverMovie()
    },
    emitSelectedGenre(arr){
      this.payloadQueryString.with_genres = arr.join(',')
      this.filterDiscoverMovie()
    },
    filterDiscoverMovie() {
      this.getDiscoverMovie(this.payloadQueryString)
    },
    onLoadMore() {
      this.payloadQueryString.page++
      this.filterDiscoverMovie()
      this.$nextTick(() => this.$el.querySelector(".discover").scrollIntoView({block: 'start', behavior: "smooth" }))
    },
    parseGenre(arr) {
      let sliderGenre =  this.genreList.find((genre)=> {
        return arr.includes(genre.id)
      })
      return sliderGenre?.name
    }
  },
  computed: {
    ...mapState([
      'genreList',
      'discoverMovie',
      'mvMovieCount',
      'trendingMovie'
    ])
  },
}
</script>

<style lang="scss">

.slider-card-container{
  display: flex;
  .slider-image-container{
    width: 243.08px;
    height: 364.61px;
    //background-color: lightgrey;
  }
  .slider-info-container{
    padding: 1em 0 1em 0;
    //max-height: 324.1px;
    .slider-info-inner-container{
      overflow: auto;
      padding: 1em 2em;
      max-width: 20em;
      height: 324.1px;
      background-color: #000000;
      overflow: auto;

      color: #FFFFFF;
      text-align: left !important;
      h5{
        padding: 0.4em 0;
        font-weight: 700;
        font-size: 18px;
      }
      h2{
        padding: .2em 0 .4em 0;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
      }
      h3{
        display: flex;
        align-items: center;
        padding: .2em 0 .8em 0;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        .slider-silver-dot{
          margin: 0 .5em 0 .5em;
          height: 6.48px;
          width: 6.48px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);;
          display: inline-block;
        }
      }
      p{
        //min-height: 14.5em;
        font-weight: 400;
        line-height: 18px;
        font-size: 12px;
      }
    }

  }
}
//carousel styling
.carousel__track > .carousel__slide--prev {
  opacity: 0.5;
}

.carousel__track > .carousel__slide--next {
  opacity: 0.5;
}
.carousel__pagination-button--active {
  width: 60px !important;
}
.carousel__prev,
.carousel__next {
  display: none !important;
  //background-color: var(--vc-nav-background-color);
  //border-radius: var(--vc-nav-width);
  //width: var(--vc-nav-width);
  //height: var(--vc-nav-width);
  //text-align: center;
  //font-size: calc(var(--vc-nav-width) * 2 / 3);
  //padding: 0;
  //color: var(--vc-nav-color);
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //position: absolute;
  //border: 0;
  //cursor: pointer;
}

.carousel__prev {
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
}

.carousel__next {
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
}
:root {
  /* Color */
  --vc-clr-primary: #E74C3C;
  --vc-clr-secondary: rgba(255, 255, 255, 0.5);;
  --vc-clr-white: #ffffff;

  /* Icon */
  --vc-icn-width: 1.2em;

  /* Navigation */
  --vc-nav-width: 30px;
  --vc-nav-color: #ffffff;
  --vc-nav-background-color: var(--vc-clr-primary);

  /* Pagination */
  --vc-pgn-width: 12px;
  --vc-pgn-height: 12px;
  --vc-pgn-margin: 10px;
  --vc-pgn-border-radius: 6px;
  --vc-pgn-background-color: var(--vc-clr-secondary);
  --vc-pgn-active-color: var(--vc-clr-primary);
}
.carousel__icon {
  width: var(--vc-icn-width);
  height: var(--vc-icn-width);
  fill: currentColor;
}
.carousel__slide {
  scroll-snap-stop: auto;
  flex-shrink: 0;
  margin: 0;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel {
  position: relative;
  text-align: center;
  box-sizing: border-box;
}

.carousel * {
  box-sizing: border-box;
}

.carousel__track {
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
}

.carousel__viewport {
  overflow: hidden;
}
.carousel__pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 3em;
}
.carousel__pagination-button {
  margin: var(--vc-pgn-margin);
  width: var(--vc-pgn-width);
  height: var(--vc-pgn-height);
  border-radius: var(--vc-pgn-height);
  border: 0;
  cursor: pointer;
  background-color: var(--vc-pgn-background-color);
}

.carousel__pagination-button--active {
  background-color: var(--vc-pgn-active-color);
}


</style>

<style lang="scss" scoped>
//src/assets/styles/carousel.css



.slider {
  //background-color: plum;
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
