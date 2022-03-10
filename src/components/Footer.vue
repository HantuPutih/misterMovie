<template>
  <footer class="footer">
    <div class="c1">
      ©  2022 MoovieTime. All rights reserved.
    </div>
    <div class="c2">
      <img src=".././assets/moovietime-logo-grey.svg" alt="movie icon">
    </div>
    <div class="c3">
      Made with vue 3
    </div>
  </footer>
</template>

<script>

export default {
  name: 'footer',
}
</script>

<style lang="scss" scoped>

.footer{
  position:absolute;
  bottom:0;
  background-color: #15191e;
  height: 160px;
  width: 1440px;
  display: grid;
  column-gap: 50px;
  //display: flex;
  align-items: center;
  //justify-content: space-evenly;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  color: #929292;
  .c1 {
    grid-column: 1/2;
    text-align: center;
    //grid-template-columns: repeat(4, 1fr);
  }
  .c2 {
    grid-column:  2/3;
    text-align: center;
    //grid-template-columns: repeat(4, 1fr);


  }
  .c3 {
    grid-column:  3/4;
    text-align: center;
    //grid-template-columns: repeat(4, 1fr);


  }
}
</style>
