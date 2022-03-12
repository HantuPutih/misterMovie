<template>
  <article>
    <div class="img-backdrop">
      <img  lazy height="400" width="1440" :src="`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`" alt="backdrop">
    </div>
      <div class="gray-info-bar"></div>
    <div class="overview-wrapper">
      <div class="overview">
        <div class="movie-img-container">
          <img lazy height="330" width="220" :src="`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`" alt="image">
        </div>
        <div class="title-container">
          <h4 class="year">
            {{movieDetails.release_date?.split('-')[0]}}
          </h4>
          <h1 class="big-title">
            {{movieDetails.original_title}}
          </h1>
          <h6 class="genre">
            Fantasy, Action, Adventure
          </h6>
        </div>
        <div class="movie-info">
          <div class="rating">
            ⭐ {{movieDetails.vote_average}}
          </div>
          <div class="movie-info-text user-score">
            <p class="sub-title">user score</p>
            <p class="sub-content">{{movieDetails.vote_count}} votes</p>
          </div>
          <div class="movie-info-text status">
            <p class="sub-title">STATUS</p>
            <p class="sub-content">{{movieDetails.status}}</p>
          </div>
          <div class="movie-info-text lang">
            <p class="sub-title">LANGUAGE</p>
            <p v-for="(lang,idx) in movieDetails.spoken_languages" :key="idx" class="sub-content">{{lang.english_name}}</p>
          </div>
          <div class="movie-info-text bugdet">
            <p class="sub-title">BUDGET</p>
            <p class="sub-content">${{thousandSeparator(movieDetails.budget)}}</p>
          </div>
          <div class="movie-info-text production">
            <p class="sub-title">PRODUCTION</p>
            <p class="sub-title">PRODUCTION</p>
<!--            <p v-for="(company, idx) in movieDetails.production_companies" :key="idx" class="sub-content text-production">{{company.name}}</p>-->
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
        <div class="review-card">
          <div class="profile-container">
            <div class="profile">
              <div class="profile-img">
              </div>
              <div class="name-container">
                <h5>
                  SWITCH.
                </h5>
                <h6>
                  December 18, 2020
                </h6>
              </div>
            </div>
            <div class="review-rating">
              ⭐
              <h3>
                7.0
              </h3>
            </div>
          </div>
          <div class="reviewer-text">
            <p>
              It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="recomendation-movies">
      <h3>
        RECOMMENDATION MOVIES
      </h3>

    </div>
  </article>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: 'detailspage',
  mounted() {
    this.getMovieDetails(this.$route.params.id)
  },
  computed:{
    ...mapState([
      'movieDetails'
    ])
  },
  methods: {
    ...mapActions([
      'getMovieDetails'
      ]
    ),
    thousandSeparator(num = 0){
      if (num) {
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return num_parts.join(",");
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.img-backdrop{
  height:810px;
  width:1440px;
  //background: rgba(0, 0, 0, 0.1) url("https://image.tmdb.org/t/p/original//srYya1ZlI97Au4jUYAktDe3avyA.jpg");
  background-size: 1440px 400px;
  img{
    z-index: 0;
    opacity: 0.2;
    object-fit: cover;
    object-position: 0px 0px;
    //background: rgba(0, 0, 0, 0.2);
  }

}
.gray-info-bar{
  width: 1440px;
  height: 80px;
  //background-color: transparent;
  background: rgba(0, 0, 0, 1);
  margin-top: -30.5em;
  margin-bottom: 30.5em;
}
.overview-wrapper{
  z-index: 99;
  //margin-top: 30em;
  //  margin-bottom: 30.5em;
  //background-color: #FFFFFF;
  opacity: 1;


  .overview{
    margin-top: -49.5em;
    margin-bottom: 20.5em;
    align-items: center;
    padding: 100px;
    display: grid;
    gap: 1em;
    grid-template-rows: 1fr 1fr 1fr;
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
      margin-left: 1em;
      grid-area: movie-info;
      display: flex;
      justify-content: space-between;
      .rating{
        font-weight: 600;
        font-size: 36px;
        color: #E5E5E5;
      }
      .movie-info{
        .sub-title{
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
        }
        .sub-title{
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          color: #FFFFFF;
        }
      }
      .status{

      }
      .lang{

      }
      .bugdet{

      }
      .production{
        .text-production{
          overflow: auto;
        }
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

        line-height: 200%;
        font-weight: 400;
        font-size: 14px;
        color: #000000;
        padding-right: 15em;
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
    .review-card{
      height: 259px;
      width: 550px;
      background: #F9F9F9;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
      border-radius: 14px;
      padding: 25px;

      .profile-container{
          display: flex;
          justify-content: space-between;
        margin-bottom: 1em;
        .profile{
          display: flex;
          .profile-img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: lightgrey;
          }
          .name-container{
            padding: .8em;
            h5{
              font-size: 14px;
              font-weight: 700;
              color: #1E232A;
            }
            h6{
              font-weight: 400;
              font-size: 12px;
              color:#666666;

            }
          }
        }
        .review-rating{
          display: flex;
          background: rgba(196, 196, 196, 0.28);
          border-radius: 7px;
          padding: 0.2em 0.5em;
          h3{
            font-size: 36px;
            font-weight: 600;
            line-height: 44px;
            color: #000000;
          }
        }
      }

      .reviewer-text{
        font-size: 13px;
        font-style: italic;
        font-weight: 400;
        line-height: 20px;
        color: #000000;
      }
    }
  }
}

.recomendation-movies {
  height: 33em;
}
</style>
