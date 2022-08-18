import { createStore } from 'vuex'
import Nav from './modules/Nav'
import SiteInfo from './modules/SiteInfo'
import AuthorInfo from './modules/AuthorInfo'

export default createStore({
  state: {
    siteInfo: SiteInfo,
    showMobileNav: false,
    nav: Nav,
    authorInfo: AuthorInfo,
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
