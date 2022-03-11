<template>
  <div class="img-container">
    <img @click="onMovie" lazy height="330" width="220" :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="movie.title">
  </div>
  <div class="card-sub">
    <h5>{{movie.title}}</h5>
    <h6>{{movie.release_date|| '-'}}</h6>
  </div>
</template>

<script>

export default {
  name: 'moviecard',
  props: {
    movie: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    onMovie() {
      console.log('masuk pak eko')
    }
  }
}
</script>

<style lang="scss">


</style>
