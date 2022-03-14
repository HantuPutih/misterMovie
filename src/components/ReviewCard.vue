<template>
  <div class="profile-container">
    <div class="profile">
      <div class="profile-img">
        <img width="50"  height="50" :src="review.author_details.avatar_path?.slice(1, review.author_details.avatar_path.length-1)" alt="pp">
      </div>
      <div class="name-container">
        <h5>
          {{review.author_details.username}}
        </h5>
        <h6>
          {{parseDate(review.created_at)}}
        </h6>
      </div>
    </div>
    <div class="review-rating">
      ⭐
      <h3>
        {{review.author_details.rating || 0}}
      </h3>
    </div>
  </div>
  <div class="reviewer-text">
    <p>
      {{parseReview(review.content)}}
    </p>
  </div>
</template>

<script>

export default {
  name:'reviewcard',
  props: {
    review: {
      type: Object,
      default: () => {}
    }
  },
  methods:{
    parseDate(date) {
      return date
    },
    parseReview(review){
      return review?.slice(0, 600) + ' ...'
    }
  }

}


</script>

<style lang="scss" scoped>
.profile-container{
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  .profile{
    display: flex;
    .profile-img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: lightgrey;
      img{
        border-radius: 50%;
      }
    }
    .name-container{
      padding: .8em;
      h5{
        font-size: 14px;
        font-weight: 700;
        color: #1E232A;
      }
      h6{
        font-weight: 400;
        font-size: 12px;
        color:#666666;

      }
    }
  }
  .review-rating{
    display: flex;
    background: rgba(196, 196, 196, 0.28);
    border-radius: 7px;
    padding: 0.2em 0.5em;
    h3{
      font-size: 36px;
      font-weight: 600;
      line-height: 44px;
      color: #000000;
    }
  }
}

.reviewer-text{
  font-size: 13px;
  font-style: italic;
  font-weight: 400;
  line-height: 20px;
  color: #000000;
}
</style>