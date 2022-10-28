<template>
  <div id="page-home">
    <top></top>

    <div class="width">
      <div class="language-switcher">
        <div class="left">
          <span class="note">Доброе утро!</span>
          <h3>BRIGHTON CAFE</h3>
        </div>

        <language-switcher></language-switcher>
      </div>

      <free-order></free-order>

      <h4>Что вы ищете?</h4>
      <div class="list">
        <nuxt-link to="/menu" class="item-img">
          <div>
            <img src="~/static/coffee.svg" />
          </div>
          Меню блюд - {{ allData.meals.body.length }}
        </nuxt-link>
        <nuxt-link to="/menu" class="item-img">
          <div>
            <img src="~/static/smile.svg" />
          </div>
          Оставить отзыв
        </nuxt-link>
        <nuxt-link to="/menu" class="item-img">
          <div>
            <img src="~/static/gallery.svg" />
          </div>
          Галлерея
        </nuxt-link>
        <nuxt-link to="/menu" class="item-img">
          <div>
            <img src="~/static/case.svg" />
          </div>
          Вакансии
        </nuxt-link>
      </div>
    </div>

    <footer-component></footer-component>
  </div>
</template>

<style lang="scss" scoped>
a {
  color: #000;
}

.width {
  .language-switcher {
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      h3 {
        margin-top: 4px;
      }
    }
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
  },
  created() {
    this.getData(["meals"]);
  },
};
</script>
