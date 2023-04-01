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
      VCardActions:{
        VBtn: {
          variant: 'outlined'
        }
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
      themes: {
        mbvLight: {
          dark: false,
          colors: {
            background: '#f4f4f4 ', // f5f5f5
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
        mbvDark: {
          dark: true,
          colors: {
            background: '#282828',
            surface: '#181818', // 264653
            primary: '#66707A',
            // primary: '#2a9d8f',
            secondary: '#505860',
            // secondary: '#f4a261',
            error: '#501820',
            // error: '#e76f51',
            info: '#66707A',
            // info: '#0cbde8',
            success: '#97c93d',
            warning: '#e9c46a',
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
      },
    },
  },
)
