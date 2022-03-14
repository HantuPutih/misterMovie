<template>
  <header :class="`nav-bar ${this.$route.name === 'details' ? 'transparent-nav' : ''}`">
    <div class="navbar-inner">
      <img @click="gohome" height="31" src=".././assets/moovietime-logo.svg" alt="moovietime logo">
      <div class="search-input">
        <img height="28" src=".././assets/movie-icon.svg" alt="moovietime logo">
        <SimpleTypeahead
          id="typeahead_id"
          placeholder="Find movie"
          :items="searhItems"
          :minInputLength="1"
          :itemProjection="(item)=> item.title"
          @selectItem="onSelect"
          @onInput="getItems"
          @onBlur="blurAutoComplete"
        >
        </SimpleTypeahead>
        <img @click="onSearch" class="search-logo" height="15" src=".././assets/search-icon.svg" alt="moovietime logo">
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
import _ from 'lodash'
export default {
  name: 'topbar',
  components: {
    // Autocomplete
    SimpleTypeahead
  },
  data() {
    return {
      categories: ['ACTION', 'ADVENTURE', 'ANIMATION', 'COMEDY','CRIME', 'DOCUMENTARY', 'DRAMA', 'FAMILY', 'FANTASY', 'HISTORY', 'HORROR'],
     searhItems: [],
    }
  },
  mounted() {
    if (this.$route.name === 'details') {
      console.log(this.$route.name)
    }
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
    getItems(searchValue) {
      // _.debounce(() => {
      //   // if (searchValue.input) {
      //     console.log(searchValue.input)
      //     console.log('Debounce!')
      //   // }
      // }, 0)
      if (searchValue.input) {
        this.searchMovie(searchValue.input).then((_) => {
          this.searhItems = this.searchResult
        })
      }
    },
    gohome() {
      this.$router.push('/')
    },
    // onSearch() {
    //   console.log('de')
    //   _.debounce(() => {
    //   if (this.searchBox) {
    //   console.log(this.searchBox)
    //   console.log('Debounce!')
    //   }
    //   }, 2000)
    //
    // }
  }
}
</script>

<style lang="scss">

.simple-typeahead[data-v-04d98098] {
  position: relative;
  width: 100%;
}
.simple-typeahead > input[data-v-04d98098] {
  margin-bottom: 0;
}
.simple-typeahead .simple-typeahead-list[data-v-04d98098] {
  position: absolute;
  width: 120%;
  left: -10%;
  border: none;
  max-height: 400px;
  overflow-y: auto;
  border-bottom: 0.1rem solid #1E232B;
  z-index: 9;
  color: #E5E5E5;
  border-radius: 0px 0px 8px 8px;
}
.simple-typeahead .simple-typeahead-list .simple-typeahead-list-header[data-v-04d98098] {
  background-color: #1E232B;
  padding: 0.6rem 1rem;
  border-bottom: 0.1rem solid #1E232B;
  border-left: 0.1rem solid #1E232B;
  border-right: 0.1rem solid #1E232B;
}
.simple-typeahead .simple-typeahead-list .simple-typeahead-list-footer[data-v-04d98098] {
  background-color: #1E232B;
  padding: 0.6rem 1rem;
  border-left: 0.1rem solid #1E232B;
  border-right: 0.1rem solid #1E232B;
}
.simple-typeahead .simple-typeahead-list .simple-typeahead-list-item[data-v-04d98098] {
  cursor: pointer;
  background-color: #1E232B;
  padding: 0.6rem 1rem;
  border-bottom: 0.1rem solid #1E232B;
  border-left: 0.1rem solid #1E232B;
  border-right: 0.1rem solid #1E232B;
}
.simple-typeahead .simple-typeahead-list .simple-typeahead-list-item[data-v-04d98098]:last-child {
  border-bottom: none;
}
.simple-typeahead .simple-typeahead-list .simple-typeahead-list-item.simple-typeahead-list-item-active[data-v-04d98098] {
  background-color: #1E232B;
}

.transparent-nav{
  //z-index: 0;
  //position: fixed;
  //top: 0;
  //opacity: 0.5;
}

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
      justify-content: space-evenly;
      align-items: center;
      background-color: #24282e;
      height: 36px;
      grid-column: 4/10;
      .simple-typeahead{
        width: 85%;
        color: #E5E5E5;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        border: none;
        background-color: transparent;
        height: 36px;
        border-radius: 4px;
      }
      input[type=text]{
        width: 85%;
        color: #E5E5E5;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        border: none;
        background-color: transparent;
        height: 36px;
        border-radius: 4px;
      }

      input[type=text]:focus {
        outline: none;
      }
      ::placeholder {
        color: #E5E5E5;
        font-size: 16px;
        letter-spacing: 0.1em;
      }

      .search-logo{
        cursor: pointer;
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
