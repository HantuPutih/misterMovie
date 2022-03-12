<template>
  <footer class="footer-container">
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
  name: 'footerBottom',
}
</script>

<style lang="scss" scoped>

.footer-container{
  bottom:0;
  background-color: #15191e;
  height: 160px;
  width: 100%;
  display: grid;
  column-gap: 50px;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  color: #929292;
  text-align: center;
  grid-template-columns: repeat(3, 1fr);
}
</style>
