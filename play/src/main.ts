import { createApp } from 'vue'
import App from './App.vue'
import AicyIcon from '@aicy-ui/components/icon'
import AicyTree from '@aicy-ui/components/tree'
import AicyButton from '@aicy-ui/components/button'
import '@aicy-ui/theme-chalk/src/index.scss'
const app = createApp(App)
const plugins = [AicyIcon, AicyTree, AicyButton]
plugins.forEach(plugin => {
  app.use(plugin)
})
app.mount('#app')
