import Vue from "vue";
import Vuex from "vuex";
import apiRoutes from "../services/routes";

Vue.use(Vuex);

export default () =>
  new Vuex.Store({
    state: {
      globalElementId: "",
      allData: {
        meals: {
          method: "get",
          api: "meals",
          body: [],
        },
        categories: {
          method: "get",
          api: "categories",
          body: [],
        },
      },
    },
    getters: {
      modals: (state) => state.modals,
      allData: (state) => state.allData,
      globalElementId: (state) => state.globalElementId,
    },
    mutations: {
      setGlobalElementId(state, id) {
        state.globalElementId = id;
        console.log(id);
      },
      getData(state, data) {
        state.allData[data.key].body = data.value;
      },
      showMealsByCategorie(state, id) {
        for (let item of state.allData.categories.body) {
          item.active = false;
        }

        state.allData.categories.body.filter(
          (item) => item._id == id
        )[0].active = true;
      },
    },
    actions: {
      async getData({ commit, rootState, dispatch }, routes) {
        for (let item of routes) {
          let api = rootState.allData[item].api;

          if (
            !rootState.allData[item].body.length ||
            rootState.allData[item].length == 0
          ) {
            // IF EMPTY DATA
            await apiRoutes
              .get({
                api: api,
              })
              .then((res) => {
                let result = JSON.parse(JSON.stringify(res.data));

                if (item == "categories") {
                  for (let item of result) {
                    item.active = false;

                    for (let meal of this.state.allData.meals.body) {
                      if (item._id == meal.categoryId) {
                        item.meals.push(meal);
                      }
                    }
                  }

                  result[0].active = true;
                }

                console.log(result);

                commit("getData", { key: item, value: result });
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            console.log("Already here");
          }
        }
      },
    },
  });
