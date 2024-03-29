// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import {createVuetify} from 'vuetify'
import {VDataTable, VDataTableVirtual} from 'vuetify/lib/labs/VDataTable'
import {VSkeletonLoader} from 'vuetify/lib/labs/VSkeletonLoader'
import {md3} from 'vuetify/blueprints'

export default createVuetify({
    blueprint: md3,
    defaults: {
      global: {},
      VCard: {
        elevation: 4,
        rounded: 'xl',
      },
      VCardActions:{
        VBtn: {
          variant: 'flat',
          size: 'large'
        }
      },
      VBtn: {
        elevation: 0,
        variant: 'flat',
      },

      VChipGroup: {
        variant: 'flat',
      },
      VChip: {
        size: 'large',
        rounded: 'pill',
        pill: true,
      },
      VTextField: {
        variant: 'outlined'
      },VTextarea: {
        variant: 'outlined'
      },
    },
    components: {
      VDataTable,
      VDataTableVirtual,
      VSkeletonLoader,
    },
    theme: {
      themes: {
        mbvLight: {
          dark: false,
          colors: {
            background: '#f4f4f4', // f5f5f5
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
            background: '#1C1B1F',
            surface: '#49454F', // 264653
            primary: '#D0BCFF',
            // primary: '#2a9d8f',
            secondary: '#CCC2DC',
            // secondary: '#f4a261',
            error: '#F2B8B5',
            // error: '#e76f51',
            info: '#4F378B',
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
