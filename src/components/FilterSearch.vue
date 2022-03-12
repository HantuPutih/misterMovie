<template>
    <div class="discover-filter">
      <div class="sortBy">
        <label for="sortBy">Sort Result By</label>
      </div>
      <div class="sortBySelect">
        <select @input="inputSortBy" v-model="selectedSortBy" name="sortBy" id="sortBy">
          <option v-for="(item,idx) in sortBys" :value="item.value" :key="idx">{{item.name}}</option>
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
</template>

<script>

export default {
  name: 'filtersearch',
  data() {
    return {
      selectedGenre: [],
      selectedSortBy: 'popularity.asc',
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
            value: 'revenue.asc'
          },
          {
            name: 'Rating Descending',
            value: 'revenue.desc'
          },
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
  methods: {
    inputSortBy(){

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
