import { createStore } from 'vuex'

export default createStore({
  state: {
    info: 'Glanzz',
    showMobileNav: false,
  },
  mutations: {
    changeMobileNavView(state, show) {
      state.showMobileNav = show
    },
  },
  actions: {},
  getters: {},
  modules: {},
})
