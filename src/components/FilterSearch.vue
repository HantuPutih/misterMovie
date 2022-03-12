<template>
    <div class="discover-filter">
      <div class="sortBy">
        <label for="sortBy">Sort Result By</label>
      </div>
      <div class="sortBySelect">
        <select @change="inputSortBy" v-model="selectedSortBy" name="sortBy" id="sortBy">
          <option v-for="(item,idx) in sortBys" :value="item.value" :key="idx">{{item.name}}</option>
        </select>
      </div>
      <div class="genres">
        <h3>Genres</h3>
      </div>
      <div class="genresSelect" >
        <div v-for="(genre, idx) in genres" :key="idx">
          <input @change="inputGenre" type="checkbox" :id="genre.name" class="mr-2" :value="genre.id" v-model="selectedGenre" />
          <label :for="genre.name">
            {{ genre.name }}
          </label>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'filtersearch',
  data() {
    return {
      selectedGenre: [],
      selectedSortBy: 'popularity.desc',
      sortBys:
        [
          {
            name: 'Popularity Ascending',
            value: 'popularity.asc'
          },
          {
            name: 'Popularity Descending',
            value: 'popularity.desc'
          },
          {
            name: 'Release Date Ascending',
            value: 'release_date.asc'
          },
          {
            name: 'Release Date Descending',
            value: 'release_date.desc'
          },
          {
            name: 'Rating Ascending',
            value: 'vote_count.asc'
          },
          {
            name: 'Rating Descending',
            value: 'vote_count.desc'
          },
        ],
      genres: [
        {
          "id": 28,
          "name": "Action"
        },
        {
          "id": 12,
          "name": "Adventure"
        },
        {
          "id": 16,
          "name": "Animation"
        },
        {
          "id": 35,
          "name": "Comedy"
        },
        {
          "id": 80,
          "name": "Crime"
        },
        {
          "id": 99,
          "name": "Documentary"
        },
        {
          "id": 18,
          "name": "Drama"
        },
        {
          "id": 10751,
          "name": "Family"
        },
        {
          "id": 14,
          "name": "Fantasy"
        },
        {
          "id": 36,
          "name": "History"
        },
        {
          "id": 27,
          "name": "Horror"
        },
        // {
        //   "id": 10402,
        //   "name": "Music"
        // },
        // {
        //   "id": 9648,
        //   "name": "Mystery"
        // },
        // {
        //   "id": 10749,
        //   "name": "Romance"
        // },
        // {
        //   "id": 878,
        //   "name": "Science Fiction"
        // },
        // {
        //   "id": 10770,
        //   "name": "TV Movie"
        // },
        // {
        //   "id": 53,
        //   "name": "Thriller"
        // },
        // {
        //   "id": 10752,
        //   "name": "War"
        // },
        // {
        //   "id": 37,
        //   "name": "Western"
        // }
      ]
    }
  },
  methods: {
    inputSortBy(){
      this.$emit('emitSelectedSortBy', this.selectedSortBy)
    },
    inputGenre(){
      this.$emit('emitSelectedGenre', this.selectedGenre)
    }
  }
}
</script>

<style lang="scss" scoped>
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

</style>
