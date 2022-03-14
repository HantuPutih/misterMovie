<template>
  <header class="nav-bar">
    <div class="navbar-inner">
      <img @click="goHome" height="31" src=".././assets/moovietime-logo.svg" alt="moovietime logo">
      <div class="search-input">
        <img height="28" src=".././assets/movie-icon.svg" alt="moovietime logo">
        <SimpleTypeahead
          id="typeahead_id"
          placeholder="Find movie"
          :items="searchItems"
          :minInputLength="1"
          :itemProjection="(item)=> item.title"
          @selectItem="onSelect"
          @onInput="getItems"
          @onBlur="blurAutoComplete"
        >
        </SimpleTypeahead>
        <img class="search-logo" height="15" src=".././assets/search-icon.svg" alt="moovietime logo">
      </div>
      <div class="nav-container">
        <div class="hover-dropdown">
          <router-link class="categories" to="/">
            <img height="20" src=".././assets/grid-icon.svg" alt="moovietime logo">
            CATEGORIES
          </router-link>
          <div class="dropdown-menu">
            <router-link v-for="genre in genreList" :key="genre" to="/">{{genre.name}}</router-link>
          </div>
        </div>
        <router-link class="movies" to="/">MOVIES</router-link>
        <router-link class="shows" to="/">TV SHOWS</router-link>
        <router-link class="login" to="/">LOGIN</router-link>
      </div>
      <div class="spacer"></div>
    </div>
  </header>
</template>

<script>

import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';
import SimpleTypeahead from 'vue3-simple-typeahead'
import {mapActions, mapState} from "vuex";

export default {
  name: 'topbar',
  components: {
    // Autocomplete
    SimpleTypeahead
  },
  data() {
    return {
     searchItems: [],
    }
  },
  mounted() {
    this.getMoviesGenre()
  },
  computed: {
    ...mapState([
      'searchResult',
      'genreList'
    ])
  },
  methods: {
    ...mapActions([
      'searchMovie',
      'getMoviesGenre'
    ]),
    onSelect(e) {
      this.$router.push(`/details/${e.id}`)
    },
    blurAutoComplete(){

    },
    debounce(func, timeout = 1){
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
      };
    },
    getItems(searchValue) {
      if (searchValue.input) {
        this.searchMovie(searchValue.input).then((_) => {
          this.searchItems = this.searchResult
        })
      }
    },
    goHome() {
      this.$router.push('/')
    },
  }
}
</script>
<style lang="scss">
@import '.././assets/style/typeahead.scss';
</style>

<style lang="scss" scoped>
.nav-bar{
  background-color: #292e35;
  width: 100%;
  display: flex;
  justify-content: center;
  .navbar-inner{
    height: 66px;
    width: 1440px;
    display: grid;
    img{
      grid-column: 3/4;
      cursor: pointer;
    }
    align-items: center;

    .search-input{
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #24282e;
      height: 36px;
      grid-column: 4/10;

      img{
        padding: 0 .5em 0 .5em;
      }
      .search-logo{
        padding-right: 1em;
        cursor: default;
      }
    }
    .nav-container{
      align-items: center;
      font-size: 14px;
      grid-column: 11/14;
      display: flex;
      justify-content: space-between;
      position: relative;

      .dropdown-menu{
        visibility: hidden;
        opacity: 0;
        position: absolute;
        background-color: white;
        margin-top:1em;
        min-width: 153px;
        z-index: 1;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
        border-radius: 6px;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 0;
        transition: all .3s linear;

        a{
          color: black;
          padding: 10px 16px;
          text-decoration: none;
          display: block;

        }
      }

      .categories{
        display: flex;
        align-items: center;
        img{
          margin-right: 1em;
        }
      }
    }

    .hover-dropdown:hover .dropdown-menu {
      visibility: visible;
      opacity: 1;
      transition: all .3s linear;
    }
    .spacer{
      grid-column: 14/16;
    }
  }


}

</style>
