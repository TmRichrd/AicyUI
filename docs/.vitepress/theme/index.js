import DefaultTheme from 'vitepress/theme'
import AicyIcon from '@aicy-ui/components/icon'
import '@aicy-ui/theme-chalk/src/index.scss'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(AicyIcon)
  }
}
