<template>
  <div class="menu-list">
    <div class="list">
      <div class="item" v-for="item of 12" :key="item.key" @click="openMeal()">
        <img src="~/static/meal2.png" alt="" />

        <div class="text">
          <p class="plus title">Шницель</p>
          <p class="description">С салатом и помидорами</p>
          <p class="plus price">70,000 сум</p>
        </div>
      </div>
    </div>

    <div class="bg" v-if="openedMeal" @click="closeMeal()"></div>

    <transition name="transform-bottom-top" mode="out-in">
      <div class="modal modalOpenedMeal" v-if="openedMeal">
        <img src="~/static/top.png" alt="" />
        <h2>Шницель - 40,000 сум</h2>
        <p>Яйцо, сосиски, блины, черный хлеб, икра овощная, горчица.</p>
        <button class="full">Закрыть</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openedMeal: false,
    };
  },
  methods: {
    openMeal() {
      this.openedMeal = true;
    },
    closeMeal() {
      this.openedMeal = false;
    },
  },
};
</script>

<style scoped lang="scss">
.bg {
  z-index: 4;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.55);
}
.modalOpenedMeal {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 24px 24px 31px;
  z-index: 5;
  border-radius: 24px 24px 0 0;
  img {
    height: 207px;
    border-radius: 8px;
    width: 100%;
    object-fit: cover;
    margin-bottom: 20px;
  }
  p {
    margin: 9px 0 31px;
  }
}
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
