<template>
  <div class="slider-card-container">
    <div class="slider-image-container">
      <img width="243.08" height="364.61" :src="`https://image.tmdb.org/t/p/original/${slide.poster_path}`" alt="movie poster">
    </div>
    <div class="slider-info-container">
      <div class="slider-info-inner-container">
        <h5>
          <img width="15" height="15" src=".././assets/star.svg" alt="star"> {{ slide.vote_average }}
        </h5>
        <h2>{{ slide.original_title }}</h2>
        <h3>{{ slide.release_date?.split('-')[0] }} <span class="slider-silver-dot"></span> {{parseGenre(slide.genre_ids)}} </h3>
        <p>
          {{ slide.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'carouselcard',
  props: {
    slide: {
      type: Object,
      default:() => {}
    }
  },
  methods: {
    parseGenre(arr) {
      let sliderGenre = this.genreList.find((genre)=> {
        return arr.includes(genre.id)
      })
      return sliderGenre?.name
    }
  },

  computed: {
    ...mapState([
      'genreList',
    ])
  },

}
</script>

<style lang="scss" scoped>
.slider-card-container{
  display: flex;
  .slider-image-container{
    width: 243.08px;
    height: 364.61px;
  }
  .slider-info-container{
    padding: 1em 0 1em 0;
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
        font-weight: 400;
        line-height: 18px;
        font-size: 12px;
      }
    }

  }
}
</style>