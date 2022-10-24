<template>
  <div class="fill">
    <p class="plus">
      Бесплатная доставка <br />
      при первом заказе
    </p>
    <button>В меню</button>
    <img src="~/static/meal.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div {
  position: relative;
  button {
    margin-top: 20px;
  }
  img {
    right: -23px;
    top: -48px;
    position: absolute;
  }
}
</style>
