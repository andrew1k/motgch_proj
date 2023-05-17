import { ru } from '@formkit/i18n'
import { createFloatingLabelsPlugin } from '@formkit/addons'
import '@formkit/addons/css/floatingLabels'

const config = {
  locales: { ru },
  locale: 'ru',
  theme: 'genesis',
  plugins: [
    createFloatingLabelsPlugin({
      useAsDefault: false
    })
  ]
}

export default config