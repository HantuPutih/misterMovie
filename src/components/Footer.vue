<template>
  <footer class="footer">
    <div>
      ©  2022 MoovieTime. All rights reserved.
    </div>
    <div>
      <img src=".././assets/moovietime-logo-grey.svg" alt="movie icon">
    </div>
    <div>
      Made with VUE 3
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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  color: #929292;
}
</style>
