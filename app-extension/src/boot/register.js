import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-gatenex'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
