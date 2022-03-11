<template>
  <div class="discover-filter-card-container">
    <div class="discover-filter">
      <div class="sortBy">
        <label for="sortBy">Sort Result By</label>
      </div>
      <div class="sortBySelect">
        <select name="sortBy" id="sortBy">
          <option v-for="(item,idx) in sortBys " :key="idx" value="volvo">{{item}}</option>
        </select>
      </div>
      <div class="genres">
        <h3>Genres</h3>
      </div>
      <div class="genresSelect" >
        <div v-for="(genre, idx) in genres" :key="idx">
          <input type="checkbox" :id="genre" class="mr-2" :value="genre" v-model="selectedGenre" />
          <label :for="genre">
            {{ genre }}
          </label>
        </div>
      </div>
    </div>

      <div class="discover-card">
        <div v-for="item in discoverMovie" :key="item" class="cards">
          <MovieCard :movie="item" />
        </div>
      </div>
  </div>
</template>

<script>
  import MovieCard from "@/components/MovieCard";
  import {mapActions,mapState} from "vuex";

export default {
  components: {MovieCard},

  name: 'FilterAndCard',
  data() {
    return {
      selectedGenre: [],
      sortBys:
        [
          'Popularity Ascending',
          'Popularity Descending',
          'Release Date Ascending',
          'Release Date Descending' ,
          'Rating Ascending',
          'Rating Descending'
        ],
      genres: [
        'Action',
        'Adventure',
        'Animation',
        'Comedy',
        'Crime',
        'Documentary',
        'Drama',
        'Family',
        'Fantasy',
        'History',
        'Horror'
      ]
    }
  },
  mounted() {
    let payload = {

    }
    this.getDiscoverMovie()
  },
  methods: {
    ...mapActions([
      'getDiscoverMovie'
    ]),
    onMovie() {
      console.log('masuk pak eko')
    }
  },
  computed: {
    ...mapState([
      'discoverMovie'
    ])
  },
}
</script>

<style lang="scss">
.discover-filter-card-container {
  margin-top: 50px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1.35fr 5.5fr;
  //5 coloums
  .discover-filter{
    height: 586px;
    border-radius: 8px;
    background: linear-gradient(180deg, #0E1723 0%, rgba(30, 35, 42, 0) 100%);

    .sortBy{
      display: flex;
      align-items: center;
      padding-left: 20px;
      height: 60px;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      letter-spacing: 0.1em;
      border-bottom: 1px solid #FFFFFF12
    }
    .sortBySelect{
      display: flex;
      align-items: center;
      padding-left: 20px;
      height: 80px;
      border-bottom: 1px solid #FFFFFF12
    }
    .genres{
      display: flex;
      align-items: center;
      padding-left: 20px;
      height: 50px;
      border-bottom: 1px solid #FFFFFF12
    }
    .genresSelect{
      margin-top: 20px;
      padding: 0 20px 0 20px;
      div{
        margin-bottom: 15px;

        //input:checked ~ .checkmark {
        //  background-color: red;
        //}
        input{
          float: right;
        }
        label{
          display: block;
          text-align: left;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          letter-spacing: 0em;
        }
      }
    }
  }
  .discover-card{
    display: flex;
    flex-wrap: wrap;
    .cards{
      width: 220px;
      margin: 0 .6em .7em 0.6em;
      .img-container{
        width: 220px;
        height: 330px;
        margin-bottom: 0.7em;
      }
      .card-sub{
        h5{
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          letter-spacing: 0em;
        }
        h6{
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          letter-spacing: 0em;
        }
      }
    }
  }
}

</style>
