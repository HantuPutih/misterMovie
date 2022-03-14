<template>
  <footer class="footer-container">
    <div class="footer-limit">
      <div class="c1">
        ©  2022 MoovieTime. All rights reserved.
      </div>
      <div class="c2">
        <img src=".././assets/moovietime-logo-grey.svg" alt="movie icon">
      </div>
      <div class="c3">
        Made with vue 3
      </div>
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
  width: 100%;
  background-color: #15191e;
  width: 100%;
  display: flex;
  justify-content: center;
  .footer-limit{
    width: 1440px;
    bottom:0;
    background-color: #15191e;
    height: 160px;
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

}
</style>
