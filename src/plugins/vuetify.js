// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify,  } from 'vuetify'



// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme:  {
    defaultTheme: 'mbvLightTheme',
    themes: {
      mbvLightTheme: {
        dark: false,
        colors: {
            background: '#fff',
            surface: '#eee', //
            primary: '#0023d2', // primary color from logo
            secondary: '#ffa10d', // secondary color from logo
            error: '#df1f26', //  worship color
            info: '#2674bb', // gospel color
            success: '#058341', // learning color
            warning: '#e28126', // communication color
        },
      },
      mbvDarkTheme: {
        dark: true,
        colors: {
          background: '#16161d',
          surface: '#999',
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
