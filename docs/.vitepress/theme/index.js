import DefaultTheme from 'vitepress/theme'
import AicyIcon from '@aicy-ui/components/icon'
import AicyButton from '@aicy-ui/components/button'
import '@aicy-ui/theme-chalk/src/index.scss'
import "./index.css"
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(AicyIcon)
    app.use(AicyButton)
  }
}
