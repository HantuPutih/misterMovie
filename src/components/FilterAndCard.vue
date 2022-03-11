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
        <div v-for="item in 14" :key="item" class="cards">
          <img lazy height="330"  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054" alt="freedom">
          <div>
            <h5>wonder woman</h5>
            <h6>2020</h6>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'FilterAndCard',
  data() {
    return {
      selectedGenre: [],
      sortBys:
        [
          'Popularity',
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
  }
}
</script>

<style lang="scss" scoped>
.discover-filter-card-container {
  margin-top: 50px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1.5fr 5fr;
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
    background-color: plum;
    .cards{
      margin: 5px;
    }
  }
}

</style>
