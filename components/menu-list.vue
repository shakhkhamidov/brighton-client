<template>
  <div class="menu-list">
    <div class="list" v-if="data.length">
      <div
        class="item"
        v-for="item of data"
        :key="item.key"
        @click="openMeal(item._id)"
      >
        <img src="~/static/meal2.png" alt="" />

        <div class="text">
          <p class="plus title">{{ item.name_ru }}</p>
          <p class="description">{{ item.description_ru }}</p>
          <p class="plus price">
            {{ Number(item.price).toLocaleString() }}
            сум
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="margin"></div>
      <p class="plus">Скоро мы добавим сюда блюда...</p>
      <div class="margin"></div>
    </div>

    <div class="bg" v-if="openedMeal" @click="closeMeal()"></div>

    <transition name="transform-bottom-top" mode="out-in">
      <div class="modal modalOpenedMeal" v-if="openedMeal">
        <img src="~/static/top.png" alt="" />
        <h2>
          {{
            allData.meals.body.filter((item) => item._id == globalElementId)[0]
              .name_ru
          }}
          -
          {{
            Number(
              allData.meals.body.filter(
                (item) => item._id == globalElementId
              )[0].price
            ).toLocaleString()
          }}
          сум
        </h2>
        <p>
          {{
            allData.meals.body.filter((item) => item._id == globalElementId)[0]
              .description_ru
          }}
        </p>
        <button class="full" @click="closeMeal()">Закрыть</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: ["data"],
  computed: {
    ...mapGetters(["allData", "globalElementId"]),
  },
  data() {
    return {
      openedMeal: false,
    };
  },
  methods: {
    ...mapMutations(["setGlobalElementId"]),
    openMeal(id) {
      this.openedMeal = true;
      this.setGlobalElementId(id);
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  .item {
    width: calc(50% - 8px);
    margin: 0 0 12px 0;
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
