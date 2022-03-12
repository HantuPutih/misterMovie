<template>
  <article>
    <div class="img-backdrop">
      <img height="810" width="1440" src="" alt="backdrop">
      <div class="overview">
        <img height="330" width="220" src="" alt="image">
        <div>
          <h5 class="year">
            2020
          </h5>
          <h1 class="big-title">

          </h1>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: 'detailspage',
  mounted() {
    // this.getMovieDetails(this.$route.params.id)
  },
  methods: {
    ...mapActions([
      'getMovieDetails'
      ]

    )
  },
}
</script>

<style lang="scss" scoped>
.img-backdrop{
  background-color: yellow;
  height:810px;
  width:1440px;
}

</style>
