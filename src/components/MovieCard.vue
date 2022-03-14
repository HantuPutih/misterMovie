<template>
  <div  class="img-container">
    <div class="rating-overlay">
      <img height="330" width="220" :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="movie.title">
      <div class="rating-overlay-text">
        {{movie.vote_average}}
      </div>
    </div>
    <div class="card-overlay">
      <div class="card-rating">⭐ {{movie.vote_average}}</div>
      <div class="card-genre">
        <h4 v-for="(genre,idx) in movieGenre" :key="idx">{{genre.name}}</h4>
      </div>
      <div class="card-btn">
        <button @click="onMovie" class="btn-view">
          VIEW
        </button>
        <br>
        <button @click="onAdd" class="btn-add">
          {{addText}}
        </button>
      </div>
    </div>
  </div>
  <div class="card-sub">
    <h5>{{movie.title}}</h5>
    <h6>{{movie.release_date.split('-')[0]|| '-'}}</h6>
  </div>
</template>

<script>
import { mapState} from "vuex";

export default {
  name: 'moviecard',
  props: {
    movie: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      movieGenre: [],
      addText: 'ADD'
    }
  },
  methods: {
    onAdd() {
      this.addText = 'ADDED'
      this.$store.commit('COUNT_PLUS_MY_MOVIE_COUNT')
    },
    onMovie() {
      // console.log('masuk')
      this.$router.push(`/details/${this.movie.id}`)
    },

  },
  computed:{
    ...mapState([
      'genreList'
    ])
  },
  mounted() {
    this.movieGenre = this.genreList.filter((genre)=> {
      return this.movie.genre_ids.includes(genre.id)
    })
  }
}
</script>

<style lang="scss" scoped>
.img-container{
  position: relative;
  width: 220px;
  height: 330px;
  margin-bottom: 0.7em;
  transition: .3s ease;
  background: #000000CC;

  .rating-overlay{
    position: relative;
    .rating-overlay-text{
      background: rgba(30, 35, 43, 0.8);
      position: absolute;
      top: 0;
      right: 0;

      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      color: #E5E5E5;
      width: 48px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }


  .card-overlay {
    transition: .3s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    .card-rating{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 29px;
      height: 5em;
    }
    .card-genre{
      padding-top: 0.5em;
      overflow: auto;
      height: 5em;
      h4{
        margin-bottom: 0.2em;
        text-align: center;

      }
    }
    .card-btn{
      height: 6em;
      align-items: center;
      .btn-view{
        cursor: pointer;
        color: white;
        height: 32px;
        width: 107px;
        background: #FF0000;
        border-radius: 32px;
        border: none;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        margin-bottom: 1em;
      }
      .btn-add{
        background-color: transparent;
        color: #FFFFFF;
        width: 107px;
        height: 32px;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 32px;

        cursor: pointer;
      }
      .btn-add:focus {
        font-size: 12px;
        font-weight: 700;

        transition: 0.3s ease-in;
        color: #155129;
        background-color: #A9FFC6;
      }
    }
  }
}
.card-sub{
  h5{
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0;
  }
  h6{
    color: #929292;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
  }
}
.img-container:hover img{
  opacity: 0.2;
  transition: .3s ease;
}
.img-container:hover .card-overlay {
  opacity: 1;
}
.img-container:hover .rating-overlay .rating-overlay-text {
 opacity: 0.5;
}
</style>
