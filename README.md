# Team of Mission of the Gospel Church in Saint-Petersburg, Russia

For backend discover  [Firebase Documentation](https://firebase.google.com/docs?authuser=0&hl=en)

- [Firestore Database](https://firebase.google.com/docs/firestore?hl=en&authuser=0) - for data storage
- [Firebase Storage](https://firebase.google.com/docs/storage?hl=en&authuser=0) - for files & pics storage 
- [Firebase Authentification](https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0) - for auth service
- [Firebase Cloud messaging](https://firebase.google.com/docs/cloud-messaging/js/client?authuser=0&hl=en) - for push notifications

For mobile dev - [Ionic Capacitor Library](https://capacitorjs.com/) & capacitor plugins:

- [App](https://capacitorjs.com/docs/apis/app)
- [Android](https://capacitorjs.com/docs/android)
- [iOS](https://capacitorjs.com/docs/ios)
- [local-notifications](https://capacitorjs.com/docs/apis/local-notifications)
- [push-notifications](https://capacitorjs.com/docs/apis/push-notifications)
- [assets](https://www.npmjs.com/package/@capacitor/assets)
- [status-bar](https://capacitorjs.com/docs/apis/status-bar)

For store - [Pinia](https://pinia.vuejs.org/) in setup api & [composables](https://vuejs.org/guide/reusability/composables.html) 

as router - [official vue router v4](https://router.vuejs.org/guide/) 

It uses [composition API](https://vuejs.org/guide/introduction.html#composition-api)

& [Vuetify Components Lib](https://next.vuetifyjs.com/en/getting-started/release-notes/)

### Project setup
```
// instalation
npm install
yarn install

// Compiles and hot-reloads for development
npm run serve
yarn run serve

// Compiles and minifies for production
npm run build
yarn run build

// Lints and fixes files
npm run lint
yarn run lint

// Update dependencies
yarn upgrade
yarn upgrade package@version
```

It uses material design 3 version with almost all req rules 

Дальше на русском(коменты для себя и тех, кому потом буду объяснять структуру)
App принимает в себя layouts и уже в них добавляются базовые нав компоненты и <RouterView />
- Auth - для авторизации и имеет router guard при isAuted = false всё перенаправляется сюда
- Main - для home, calendar и discover страниц
- card, news и profile - узко и только для конкретных видов страниц

Все страницы имеющиеся в router хранятся в views и компоненты принадлежащие к этим страницам в директории(components) в этой странице

В корневой components хранятся глобальные компоненты
