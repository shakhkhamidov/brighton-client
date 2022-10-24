<template>
  <div class="list">
    <div class="item" v-for="item of 12" :key="item.key">
      <img src="~/static/meal2.png" alt="" />

      <div class="text">
        <p class="plus title">Шницель</p>
        <p class="description">С салатом и помидорами</p>
        <p class="plus price">70,000 сум</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
div {
  .item {
    margin: 0 8px 12px 0;
    border-radius: 10px;
    background-color: var(--bg);
    &:nth-child(2n) {
      margin-right: 0;
    }
    .text {
      padding: 11px 14px;
      .title,
      .price {
        font-weight: 700;
      }
      .description {
        color: var(--dark-grey);
        margin: 4px 0 15px;
      }
    }
    img {
      width: 100%;
      object-fit: cover;
      height: 110px;
      border-radius: 8px;
    }
  }
}
</style>
