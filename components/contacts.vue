<template>
  <div>
    <h4>Наши контакты:</h4>
    <div class="wrapper">
      <div class="item-img">
        <div>
          <img src="~/static/phone.svg" alt="" />
        </div>
        +998 (99) 113-31-13
      </div>
      <div class="social">
        <a href="#"><img src="~/static/twitter.svg" alt="" /></a>
        <a href="#"><img src="~/static/linkedin.svg" alt="" /></a>
        <a href="#"><img src="~/static/youtube.svg" alt="" /></a>
        <a href="#"><img src="~/static/facebook.svg" alt="" /></a>
        <a href="#"><img src="~/static/instagram.svg" alt="" /></a>
      </div>
    </div>
    <button class="full">Заказать доставку</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
div {
  .social {
    display: flex;
    justify-content: space-between;
    a {
      background-color: var(--bg);
      border-radius: 100px;
      height: 58px;
      width: 58px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
