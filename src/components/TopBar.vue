<template>
  <header class="nav-bar">
    <img height="31" src=".././assets/moovietime-logo.svg" alt="moovietime logo">
    <div class="search-input">
      <img height="28" src=".././assets/movie-icon.svg" alt="moovietime logo">
      <input type="text" placeholder="Find movie">
      <img class="search-logo" height="15" src=".././assets/search-icon.svg" alt="moovietime logo">
    </div>
    <div class="nav-container">
      <router-link class="categories" to="/"> <img height="20" src=".././assets/grid-icon.svg" alt="moovietime logo">CATEGORIES</router-link>
      <div class="dropdown-menu">
        <router-link v-for="categorie in categories" :key="categorie" to="/">{{categorie}}</router-link>
      </div>
      <router-link class="movies" to="/">MOVIES</router-link>
      <router-link class="shows" to="/">TV SHOWS</router-link>
      <router-link class="login" to="/">LOGIN</router-link>
    </div>
    <div class="spacer"></div>
  </header>
</template>

<script>

export default {
  name: 'topbar',
  data() {
    return {
      categories: ['ACTION', 'ADVENTURE', 'ANIMATION', 'COMEDY','CRIME', 'DOCUMENTARY', 'DRAMA', 'FAMILY', 'FANTASY', 'HISTORY', 'HORROR'],
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar{
  height: 66px;
  width: 100%;
  background-color: #292e35;
  display: grid;
  img{
    grid-column: 3/4;
  }
  align-items: center;

  .search-input{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #24282e;
    height: 36px;
    grid-column: 4/10;

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
      margin-top: 35em;
      min-width: 153px;
      z-index: 1;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
      border-radius: 6px;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      letter-spacing: 0em;
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

  .nav-container:hover .dropdown-menu {
    visibility: visible;
    opacity: 1;
    transition: all .3s linear;
  }
  .spacer{
    grid-column: 14/16;
  }


}

</style>
