<template>
  <article>
    <div class="slider">
      SLIDER
    </div>
    <div class="discover">
      <div class="discover-base">
        <div class="discover-header">
          <div class="orange-rect"></div>
          <h2>
            Discover Movies
          </h2>
          <div class="discover-my-movies">
            <p >My Movies</p>
            <p> 0 Movies</p>
          </div>
        </div>

        <div class="discover-filter-card-container">
          <div class="discover-filter">
            filter
          </div>
          <div class="discover-card">
            card
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>

export default {
  name: 'home',
}
</script>

<style lang="scss" scoped>
.slider {
  background-color: plum;
  position: absolute;
  width: 1440px;
  height: 428px;
  top: 122px;
}

.discover {
  position: relative;
  top: 530px;
  background: rgba(255, 255, 255, 0.05);
  width: 1440px;
  height: 333px;

  .discover-base{
    //padding: 90px 0px 0px 125px;
    width: 90%;
    position: relative;
    width: 1440px;
    z-index: 1;
    .discover-header {
      width: 100%;
      display: grid;
      .orange-rect {
        width: 112px;
        height: 6px;
        background: #E74C3C;
        grid-column: 1/3;
        grid-row: 1;
        margin-bottom: 1em;
      }
      h2{
        grid-column: 1/2;
        grid-row: 2/3;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 29px;

      }
      .discover-my-movies{
        grid-column: 3/4;
        grid-row: 2/3;
        display: flex;
        justify-content: right;
      }
    }

    .discover-filter-card-container {

    }
  }
}

</style>
