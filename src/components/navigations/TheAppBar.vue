<template>
  <v-app-bar
    height="50"
    prominent
    elevation="1"
    flat
     >
    <vSpacer v-if="!mdAndDown"/>
    <v-app-bar-title>
      MotGCh
    </v-app-bar-title>
    <vSpacer />
    <vBtn icon="mdi-gift" />
    <vBtn icon="mdi-account" id="accountMenu" />
    <vSpacer v-if="!mdAndDown"/>
    <v-menu activator="#accountMenu">
      <v-card min-width="300">
        <v-list>
          <v-list-item :title="profileName" :subtitle="email">
            <template v-slot:append>
              <vBtn
                icon="mdi-logout"
                flat
                @click="onLogout"
              />
            </template>
          </v-list-item>
          <vDivider />
          <v-list-item title="Настройки" to="/settings" density="comfortable"/>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
  <v-navigation-drawer
    :floating="mdAndUp"
    :permanent="mdAndUp"
    bottom
  >
    <v-list density="comfortable" nav>
      <vListItem prepend-icon="mdi-home" title="Главная" value="homePage" to="/"/>
      <vListItem prepend-icon="mdi-book-open" title="Studying" value="studyingPage"/>
      <vListItem prepend-icon="mdi-account-group" title="Материалы для МГ" value="materialsForSG"/>
      <vListItem prepend-icon="mdi-calendar" title="Календарь" value="calendar" to="/calendar" />
      <vListItem prepend-icon="mdi-table" title="Управление" value="appUsers"/>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {firebaseAuth} from '@/firebase/firebase.config'
import store from '@/store'
import router from '@/router'
import { useDisplay } from 'vuetify'
import {ref} from 'vue'

export default  {
  setup() {
    const {md ,mdAndDown, mdAndUp, lgAndUp} = useDisplay()

    const profileName = firebaseAuth.currentUser.displayName
    const email = firebaseAuth.currentUser.email

    const drawer = ref(true)
    const rail = ref(true)

    const onLogout = async () => {
      await store.dispatch('auth/appLogout')
      await router.push('/home')
    }
    return {
      profileName, email,
      onLogout,
      mdAndDown,
      mdAndUp,
      md,
      lgAndUp,
      drawer,
      rail,
    }
  }
}
</script>

<style scoped>

</style>