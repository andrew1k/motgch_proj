<template>
  <v-card max-width="800" class="mx-auto" variant="text">
    <v-toolbar density="comfortable">
      <v-btn prepend-icon="mdi-chevron-left" @click="$router.go(-1)">Аккаунт</v-btn>
    </v-toolbar>
    <v-row>
      <v-col cols="3">
        <VAvatar icon="mdi-account" color="orange" size="90" class="my-1 mx-3" @click="changeAvatar"/>
      </v-col>
      <v-col cols="9">

        <v-card-title class="mt-2" @click="accSettingsToggler = !accSettingsToggler">
          {{ dbUser.firstName + ' ' + dbUser.secondName }}
          <VIcon icon="mdi-pencil" size="x-small"/>
        </v-card-title>
        <v-card-subtitle>
          {{ dbUser.birthDate }}
        </v-card-subtitle>
        <v-card-subtitle>
          {{ '+7' + dbUser.phoneNumber }}
        </v-card-subtitle>
      </v-col>
    </v-row>
    <v-slide-y-transition>
      <AccountSettings v-if="accSettingsToggler"/>
    </v-slide-y-transition>
    <v-tabs v-model="tab" align-tabs="center">
      <v-tab value="events">События</v-tab>
      <v-tab value="auth">Настройки</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="events">
        <UserEvents />
      </v-window-item>
      <v-window-item value="auth">
        <AuthSettings />
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script setup>
import {useAuthStore} from '@/stores/authStore'
import {storeToRefs} from 'pinia'
import AccountSettings from '@/components/accountSettings/accountSettings.vue'
import AuthSettings from '@/components/accountSettings/authSettings.vue'
import {ref} from 'vue'
import UserEvents from '@/components/calendar/userEvents.vue'

const authStore = useAuthStore()
const { dbUser } = storeToRefs(authStore)

const accSettingsToggler = ref(false)

const tab = ref('events')

const changeAvatar = () => {
  alert('comming soon')
}
</script>