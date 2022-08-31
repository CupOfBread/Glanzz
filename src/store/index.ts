import { defineStore } from 'pinia'
import Nav from './modules/Nav'
import SiteInfo from './modules/SiteInfo'
import AuthorInfo from './modules/AuthorInfo'
import Category from './modules/Category'

export const useStore = defineStore('useStore', {
  state: () => {
    return {
      SiteInfo,
      showMobileNav: false,
      Nav,
      AuthorInfo,
      Category,
    }
  },
  getters: {},
  actions: {
    changeMobileNavView(show: boolean) {
      this.showMobileNav = show
    },
  },
})
