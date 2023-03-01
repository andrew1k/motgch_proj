// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import {createVuetify} from 'vuetify'
import {VDataTable, VDataTableVirtual} from 'vuetify/lib/labs/VDataTable'
import {md3} from 'vuetify/blueprints'

export default createVuetify({
    blueprint: md3,
    defaults: {
      global: {},
      VCard: {
        elevation: 3,
        rounded: 'xl',
      },
      VBtn: {
        elevation: 0,
        variant: 'flat',
      },
      VTextField: {
        variant: 'outlined',
      }
    },
    components: {
      VDataTable, // Не забыть убрать, если с Virtual будет все ок
      VDataTableVirtual,
    },
    theme: {
      defaultTheme: 'mbvLightTheme',
      themes: {
        mbvLightTheme: {
          dark: false,
          colors: {
            background: '#f5f5f5',
            surface: '#ffffff',
            primary: '#032A49',
            secondary: '#CB9821',
            error: '#D28782',
            info: '#1B78AF',
            success: '#8B9D77',
            warning: '#EBC678',
            worship: '#df1f26',
            worshipSec: '#ee9623',
            fellowship: '#e28126',
            fellowshipSec: '#f9a926',
            discepleship: '#058341',
            discepleshipSec: '#97c93d',
            ministry: '#815125',
            ministrySec: '#d2873e',
            evangelism: '#2674bb',
            evangelismSec: '#0cbde8',
          },
        },
        mbvDarkTheme: {
          dark: true,
          colors: {
            background: '#999',
            surface: '#16161d',
            primary: '#0023d2', // primary color from logo
            secondary: '#ffa10d', // secondary color from logo
            error: '#ee1f26', //  worship color
            info: '#0cbde8', // gospel color
            success: '#97c93d', // learning color
            warning: '#f9a926', // communication color
          },
        },
      },
    },
  },
)
