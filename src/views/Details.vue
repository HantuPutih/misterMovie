<template>
  <article>
    <div id="top-nav" class="img-backdrop">
      <img height="480" width="1440" :src="`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`" alt="backdrop">
    </div>
      <div class="gray-info-bar"></div>
    <div class="overview-wrapper">
      <div class="overview">
        <div class="movie-img-container">
          <img height="330" width="220" :src="`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`" alt="image">
        </div>
        <div class="title-container">
          <h4 class="year">
            {{movieDetails.release_date?.split('-')[0]}}
          </h4>
          <h1 class="big-title">
            {{movieDetails.original_title}}
          </h1>
          <h6  class="genre">
            {{movieGenre}}
          </h6>
        </div>
        <div class="movie-info">
          <div class="rating">
            <img width="30" height="30" src=".././assets/star.svg" alt="star"> &nbsp; {{movieDetails.vote_average}}
          </div>
          <div class="movie-info-text right-border user-score">
            <p class="sub-title">USER SCORE</p>
            <p class="sub-content">{{movieDetails.vote_count}} votes</p>
          </div>
          <div class="movie-info-text  right-border status">
            <p class="sub-title">STATUS</p>
            <p class="sub-content">{{movieDetails.status || '-'}}</p>
          </div>
          <div class="movie-info-text  right-border lang">
            <p class="sub-title">LANGUAGE</p>
            <p class="sub-content">{{movieDetails.spoken_languages?.length ? movieDetails.spoken_languages[0].english_name : '-'}}</p>
          </div>
          <div class="movie-info-text  right-border budget">
            <p class="sub-title">BUDGET</p>
            <p class="sub-content">${{thousandSeparator(movieDetails.budget) || '-'}}</p>
          </div>
          <div class="movie-info-text production">
            <p class="sub-title">PRODUCTION</p>
            <p class="sub-content text-production">{{movieDetails.production_companies?.length ? movieDetails.production_companies[0].name : '-'}}</p>
          </div>
        </div>
        <div class="movie-overview">
          <h5 class="overview-title">
            OVERVIEW
          </h5>
          <p class="overview-text">
            {{movieDetails.overview}}
          </p>
        </div>
      </div>
      <div class="reviews">
        <div class="reviews-title">
          <h2>REVIEWS</h2>
        </div>
        <div class="review-container">
          <div v-for="(review, idx) in movieReviews" :key="idx" class="review-card">
            <ReviewCard :review="review" />
          </div>
        </div>

      </div>
    </div>

    <div class="recomendation-movies">
      <h3>
        RECOMMENDATION MOVIES
      </h3>
      <div class="discover-card">
        <div v-for="item in movieRecommendation" :key="item" class="cards">
          <Moviecard :movie="item" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Moviecard from "@/components/MovieCard";
import ReviewCard from "@/components/ReviewCard";

export default {
  name: 'detailspage',
  components: {Moviecard,
    ReviewCard},
  data() {
    return {
      movieGenre: [],
    }
  },
  mounted() {
    this.getMovieDetails(this.$route.params.id).then((_)=> {
      this.movieGenre = this.movieDetails.genres?.map(el => el.name).join(', ')
    })
    this.getMovieRecommendation(this.$route.params.id)
    this.getMovieReviews(this.$route.params.id)
  },
  watch: {
    '$route.params.id': {
      deep: true,
      immediate: true,
      handler() {
        if (this.$route.name === 'details') {
          this.getMovieDetails(this.$route.params.id)
          this.getMovieRecommendation(this.$route.params.id)
          this.getMovieReviews(this.$route.params.id)
          this.$nextTick(() => this.$el.querySelector(".img-backdrop").scrollIntoView({block: 'start', behavior: "smooth" }))
        }
      }
    }
  },

  computed:{
    ...mapState([
      'movieDetails',
      'movieRecommendation',
      'movieReviews'
    ])
  },

  methods: {
    ...mapActions([
        'getMovieDetails',
        'getMovieRecommendation',
        'getMovieReviews'
      ]),
    thousandSeparator(num = 0){
      if (num) {
        let num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join() +'.00';
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.img-backdrop{
  //margin-top: -80px;
  height:480px;
  width:1440px;
  //background: rgba(0, 0, 0, 0.1) url("https://image.tmdb.org/t/p/original//srYya1ZlI97Au4jUYAktDe3avyA.jpg");
  //background-size: 1440px 400px;
  img{
    opacity: 0.2;
    //background: rgba(0, 0, 0, 0.1);
    object-fit: cover;
    object-position: 0 0;
  }

}
.gray-info-bar{
  width: 1440px;
  height: 80px;
  background: rgba(0, 0, 0, 1);
  margin-top: -80px;
  margin-bottom: 30.5em;
}
.overview-wrapper{
  z-index: 2;
  .overview{
    margin-top: -49.5em;
    margin-bottom: 20.5em;
    align-items: center;
    padding: 100px;
    display: grid;
    gap: 1em;
    grid-template-rows: 6.2em 6.2em 6.2em;
    grid-template-columns: 250px 2fr 0.3fr;
    grid-template-areas: "movie-img-container title-container ."
                         "movie-img-container movie-info ."
                         "movie-img-container movie-overview .";
    .movie-img-container {
      margin-left: 2em;
      filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));
      background-color: gray;
      height:330px;
      width:220px;
      grid-area: movie-img-container;
    }
    .title-container{
      margin-left: 1em;
      grid-area: title-container;
      h4{
        font-weight: 500;
        font-size: 18px;
        color: #FFFFFF;
      }
      h1{
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        color: #E5E5E5;
      }
      h6{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #FFFFFF;
      }
    }
    .movie-info{
      grid-area: movie-info;
      display: grid;
      grid-template-columns: repeat(6, 8.5em);
      grid-template-rows: 1fr;
      .rating{
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: 36px;
        color: #E5E5E5;

      }
      .movie-info-text{
        display: flex;
        justify-content: center;

        flex-direction: column;
        padding-left: 1em;
        .sub-title{
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
        }
        .sub-content{
          font-style: normal;
          font-weight: 500;
          font-size: 13px;
          color: #FFFFFF;
          text-transform: uppercase;
          overflow: auto;
          max-height: 100px;
        }
      }
      .right-border{
        border-right: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
    .movie-overview{
      grid-area: movie-overview;
      margin-left: 1em;
      .overview-title{
        font-weight: 600;
        font-size: 14px;
        color: #FF0000;
      }
      .overview-text{
        line-height: 170%;
        font-weight: 400;
        font-size: 14px;
        color: #000000;
        overflow: auto;
      }
    }
  }
  .reviews{
    margin-top: -34.5em;
    background-color: white;
    padding: 10em 130px 5em 130px;
    .reviews-title{
    margin-bottom: 1em;
      h2{
        font-size: 14px;
        font-weight: 600;
        color: #FF0000;
      }
    }
    .review-container{
      display: grid;
      gap: 3em;
      grid-template-columns: 1fr 1fr;
      .review-card{
        min-height: 259px;
        width: 520px;
        background: #F9F9F9;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
        border-radius: 14px;
        padding: 25px;
      }
    }
  }
}

.recomendation-movies {
  padding: 3em 7em 3em 7em;
  height: 29em;
  h3{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 5em;
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
</style>
