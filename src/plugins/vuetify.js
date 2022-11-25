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
            surface: '#f6f6f6', //
            primary: '#556bd0', // primary color from logo
            secondary: '#ffcd7c', // secondary color from logo
            error: '#de4e53', //  worship color
            info: '#74b4ef', // gospel color
            success: '#5fc08e', // learning color
            warning: '#daa274', // communication color
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
