import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/reset.scss'
import axios from 'axios'
import Nprogress from 'nprogress'
import cookies from 'js-cookie'
import 'nprogress/nprogress.css'


// request拦截
const app=createApp(App)
app.config.globalProperties.$cookies = cookies
app.config.globalProperties.$http = axios


axios.interceptors.request.use(config => {
  config.headers.Authorization = cookies.get('token')
  Nprogress.start()
  return config
})

// response拦截
axios.interceptors.response.use(
  res => {
    const response = res.data
    Nprogress.done()
    return response
  },
  error => {
    console.log(error)
  }
)

app.use(store).use(router).mount('#app')
