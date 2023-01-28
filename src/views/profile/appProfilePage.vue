<template>
  <v-card max-width="800" class="mx-auto" variant="text">
    <v-card-actions>
        <VAvatar icon="mdi-account" color="black" size="90" class="my-1 mx-2" @click="changeAvatar" variant="outlined"/>
        <v-card-item>
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
        </v-card-item>
    </v-card-actions>
    <v-slide-y-transition>
      <AccountSettings v-if="accSettingsToggler"/>
    </v-slide-y-transition>
    <v-tabs v-model="tab" align-tabs="center">
      <v-tab value="saves">Сохранения</v-tab>
      <v-tab value="auth">Настройки</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="saves">
        <UserSaves />
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
import AccountSettings from '@/components/profile/accountSettings.vue'
import AuthSettings from '@/components/profile/authSettings.vue'
import {ref} from 'vue'
import UserSaves from '@/components/profile/userSaves.vue'

const authStore = useAuthStore()
const { dbUser } = storeToRefs(authStore)

let accSettingsToggler = ref(false)

const tab = ref('auth')

const changeAvatar = () => {
  alert('comming soon')
}
</script>