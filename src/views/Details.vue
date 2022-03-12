<template>
  <article>
    <div class="img-backdrop">
      <img height="810" width="1440" src="" alt="backdrop">
      <div class="overview">
        <div class="movie-img-container">
          <img height="330" width="220" src="" alt="image">
        </div>
        <div class="title-container">
          <h4 class="year">
            2020
          </h4>
          <h1 class="big-title">
            Wonder Woman 1984
          </h1>
          <h6 class="genre">
            Fantasy, Action, Adventure
          </h6>
        </div>
        <div class="movie-info">
          <div class="rating">
            ⭐ &nbsp; 7.0
          </div>
          <div class="user-score">
            <p>user score</p>
            <p>3333 votes</p>
          </div>
          <div class="status">
            <p>STATUS</p>
            <p>REELEASED</p>
          </div>
          <div class="lang">
            <p>LANGUAGE</p>
            <p>english</p>
          </div>
          <div class="bugdet">
            <p>BUDGET</p>
            <p>$200.000.000.000</p>
          </div>
          <div class="production">
            <p>PRODUCTION</p>
            <p>DC Entertainment</p>
          </div>
        </div>
        <div class="movie-overview">
          <h5 class="overview-title">
            OVERVIEW
          </h5>
          <p class="overview-text">
            Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.
          </p>
        </div>
      </div>

<!--      <div class="reviews">-->
<!--        <div class="reviews-title">-->
<!--          <h2>REVIEWS</h2>-->
<!--        </div>-->
<!--        <div class="review-card">-->
<!--          <div class="profile-container">-->
<!--            <div class="profile">-->
<!--              <div class="profile-img">-->
<!--                img-->
<!--              </div>-->
<!--              <h5>-->
<!--                SWITCH.-->
<!--              </h5>-->
<!--              <h6>-->
<!--                December 18, 2020-->
<!--              </h6>-->
<!--            </div>-->
<!--            <div class="review-rating">-->
<!--              ⭐ 7.0-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="reviewer-text">-->
<!--            <p>-->
<!--              It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </article>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: 'detailspage',
  mounted() {
    // this.getMovieDetails(this.$route.params.id)
  },
  methods: {
    ...mapActions([
      'getMovieDetails'
      ]

    )
  },
}
</script>

<style lang="scss" scoped>
.img-backdrop{
  background-color: plum;
  //height:810px;
  width:1440px;
  .overview{
    margin-top: 300px;
    display: grid;
    gap: 10px;
    grid-template-areas: ". title-container title-container"
                         " movie-img-container movie-info movie-info"
                         ". movie-overview movie-overview";
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 0.5fr 1fr;
    .movie-img-container {
      background-color: red;
      height:330px;
      width:220px;
      grid-area: movie-img-container;
    }
    .title-container{
      background-color: #E74C3C;
      grid-area: title-container;
    }
    .movie-info{
      grid-area: movie-info;
      background-color: #A9FFC6;
      display: flex;
    }
    .movie-overview{
      grid-area: movie-overview;
      background-color: yellowgreen;
    }
  }
}

</style>
