<template>
  <topbar/>
  <router-view />
  <Footer/>
</template>

<script>

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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap');
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  background-color: #1e232a;
  height:100vh;
  margin:0;


  display:flex;
  flex-direction: column;
  color: #E5E5E5;
}

article{
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
