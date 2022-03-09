<template>
  <div class="nav-bar">
    <img height="35" src=".././assets/moovietime-logo.svg" alt="moovietime logo">
    <div class="search-input">
      <img height="28" src=".././assets/movie-icon.svg" alt="moovietime logo">
      <input type="text" placeholder="Find Movie">
      <img class="search-logo" height="20" src=".././assets/search-icon.svg" alt="moovietime logo">
    </div>
<!--    <div class="nav-container">-->
      <router-link class="categories" to="/"> <img height="20" src=".././assets/grid-icon.svg" alt="moovietime logo">CATEGORIES</router-link>
      <router-link class="movies" to="/">MOVIES</router-link>
      <router-link class="shows" to="/">TV SHOWS</router-link>
      <router-link class="login" to="/">LOGIN</router-link>
<!--    </div>-->
  </div>
</template>

<script>

export default {
  name: 'topbar',
}
</script>

<style lang="scss" scoped>
.nav-bar{
  height: 66px;
  width: 100vw;
  background-color: #292e35;
  display: grid;
  img{
    grid-column: 2/3;
  }
  align-items: center;

  .search-input{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #24282e;
    height: 36px;
    grid-column: 3/7;

    input[type=text]{
      width: 85%;
      color: #E5E5E5;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      border: none;
      background-color: #24282e;
      height: 36px;
      border-radius: 4px;
    }

    input[type=text]:focus {
      outline: none;
    }

    .search-logo{
      cursor: pointer;
    }
  }
  .categories{
    margin-left: 55px;
    grid-column: 7/8;
    align-items: center;
  }
  .movies{
    grid-column: 9/10;
  }
  .shows {
    grid-column: 11/12;
  }
  .login{
    grid-column: 12/13;
  }
  //.nav-container{
  //  grid-column: 6/12;
  //  display: flex;
  //  justify-content: space-between;
  //}


}

</style>
