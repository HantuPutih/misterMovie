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
        <div v-for="(genre, idx) in genreList" :key="idx">
          <input @change="inputGenre" type="checkbox" :id="genre.name" class="mr-2" :value="genre.id" v-model="selectedGenre" />
          <label :for="genre.name">
            {{ genre.name }}
          </label>
        </div>
      </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'filtersearch',
  data() {
    return {
      selectedGenre: [],
      selectedSortBy: 'vote_average.desc',
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
            value: 'vote_average.asc'
          },
          {
            name: 'Rating Descending',
            value: 'vote_average.desc'
          },
        ],
    }
  },
  computed: {
    ...mapState([
      'genreList'
    ])
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
    padding-left: 0.9em;
    height: 80px;
    border-bottom: 1px solid #FFFFFF12;
    select {
      //margin: 40px;
      padding: 0.7em;
      border: none;
      border-radius: 4px;
      background: #2F363F;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
      color: #E5E5E5;
      font-family: 'Montserrat';
    }
    select:focus{
      outline: none;
    }
    option{
      border-radius: 0 0 4px 4px;
      background: #111419;
      color: white;
    }
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
