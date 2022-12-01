<template>
  <v-app-bar
    height="50"
    prominent
    elevation="1"
    flat
  >
    <vSpacer v-if="!mdAndDown"/>
    <v-app-bar-title>
      <v-btn to="/" variant="plain">
        MotGCh
      </v-btn>
    </v-app-bar-title>
    <vSpacer/>
    <vBtn icon="mdi-gift" to="/givingCard"/>
    <vBtn icon="mdi-account" id="accountMenu"/>
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
          <vDivider/>
          <v-list-item title="Настройки" to="/settings" density="comfortable"/>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
import {firebaseAuth} from '@/firebase/firebase.config'
import store from '@/store'
import {useDisplay} from 'vuetify'
import router from '@/router'


const {mdAndDown} = useDisplay()
const profileName = firebaseAuth.currentUser.displayName
const email = firebaseAuth.currentUser.email

const onLogout = async () => {
  await store.dispatch('auth/appLogout')
  await router.push('/auth')
}
</script>