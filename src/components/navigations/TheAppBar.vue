<template>
  <v-app-bar height="50" prominent flat color="cyan" >
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
  <v-navigation-drawer>

  </v-navigation-drawer>



</template>

<script>
import {firebaseAuth} from '@/firebase/firebase.config'
import store from '@/store'
import router from '@/router'
import { useDisplay } from 'vuetify'

export default  {
  setup() {
    const {mdAndDown} = useDisplay()

    const profileName = firebaseAuth.currentUser.displayName
    const email = firebaseAuth.currentUser.email

    const onLogout = async () => {
      await store.dispatch('auth/appLogout')
      await router.push('/home')
    }
    return {
      profileName, email,
      onLogout,
      mdAndDown,
    }
  }
}
</script>

<style scoped>

</style>