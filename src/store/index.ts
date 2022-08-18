import { defineStore } from 'pinia'
import Nav from './modules/Nav'
import SiteInfo from './modules/SiteInfo'
import AuthorInfo from './modules/AuthorInfo'

export const useStore = defineStore('useStore', {
  state: () => {
    return {
      SiteInfo,
      showMobileNav: false,
      Nav,
      AuthorInfo,
    }
  },
  getters: {},
  actions: {
    changeMobileNavView(show: boolean) {
      this.showMobileNav = show
    },
  },
})
