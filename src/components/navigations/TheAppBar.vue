<template>
  <v-app-bar
    height="50"
    prominent
    elevation="1"
    flat
  >
    <v-app-bar-title>
      <v-btn to="/" variant="plain">
        MotGCh
      </v-btn>
    </v-app-bar-title>
    <vSpacer/>
    <vBtn icon="mdi-gift" to="/givingCard"/>
    <vBtn icon="mdi-account" id="accountMenu"/>
    <v-menu activator="#accountMenu">
      <v-card min-width="300">
        <v-list>
          <v-list-item :title="`${dbUser.firstName} ${dbUser.secondName}`" :subtitle="email">
            <template v-slot:append>
              <LogoutBtn />
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
import LogoutBtn from '@/components/auth/logoutBtn.vue'
import { useAuthStore } from '@/stores/authStore'
import {storeToRefs} from 'pinia'

const authStore = useAuthStore()
const { email, dbUser } = storeToRefs(authStore)
</script>