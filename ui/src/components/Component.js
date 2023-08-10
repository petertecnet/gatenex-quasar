import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'gatenex',

  setup () {
    return () => h(QBadge, {
      class: 'gatenex',
      label: 'gatenex'
    })
  }
}
