// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify,  } from 'vuetify'
import {VDataTable, VDataTableVirtual} from 'vuetify/lib/labs/VDataTable'
import { md3 } from 'vuetify/blueprints'


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  defaults: {
    global: {

    },
    VCard: {
      elevation: 5
    },
    VBtn: {
      elevation: 0,
      color: 'black',
    },
  },
  components: {
    VDataTable, // Не забыть убрать, если с Virtual будет все ок
    VDataTableVirtual
  },
  theme:  {
    defaultTheme: 'mbvLightTheme',
    themes: {
      mbvLightTheme: {
        dark: false,
        colors: {
            background: '#f6f6f6',
            surface: '#fff', //
            primary: '#7c7dc0', // primary color from logo
            secondary: '#ffcd7c', // secondary color from logo
            error: '#de4e53', //  worship color
            info: '#74b4ef', // evangelism color
            success: '#5fc08e', // discipleship color
            warning: '#daa274', // fellowship color
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
      }
    }
  }
  }
)
