<template>
  <div class="wrapper">
    <topbar/>
    <router-view />
    <Footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Topbar from "@/components/TopBar";
import Footer from "@/components/Footer";
export default {
  name: 'mistermovie',
  components: {
    Footer,
    Topbar
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700;900&display=swap');
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
body{
  background-color: #1e232a ;
}
.wrapper{
  width: 1440px;
  margin: auto;
}
* {
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color: white;
}
</style>
