<template>
  <div id="page-menu">
    <top></top>

    <div class="width">
      <h1>Меню</h1>
    </div>

    <div class="scroll" v-if="allData.categories.body.length">
      <span
        :class="{ active: item.active }"
        v-for="item of allData.categories.body"
        :key="item.key"
        @click="showMealsByCategorie(item._id)"
        >{{ item.name_ru }}</span
      >
    </div>
    <span v-else>Loading...</span>
    <div
      class="width"
      v-if="allData.meals.body.length && allData.categories.body.length"
    >
      <menu-list
        :data="
          allData.categories.body.filter((item) => item.active == true)[0].meals
        "
      ></menu-list>
    </div>
    <span v-else>Loading...</span>

    <footer-component></footer-component>
  </div>
</template>

<style scoped lang="scss">
.scroll {
  margin: 9px 0 12px;
  overflow: scroll;
  display: flex;
  white-space: nowrap;
  padding-bottom: 12px;
  &::-webkit-scrollbar {
    display: none;
  }
  span {
    margin-right: 6px;
    display: inline-block;
    font-weight: 700;
    &.active {
      background-color: var(--yellow);
      color: #000 !important;
    }
    border-radius: 100px;
    padding: 10px 16px;
    color: var(--dark-grey);
  }
}
</style>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters(["allData"]),
  },
  methods: {
    ...mapActions(["getData"]),
    ...mapMutations(["showMealsByCategorie"]),
  },
  created() {
    this.getData(["meals", "categories"]);
  },
};
</script>
