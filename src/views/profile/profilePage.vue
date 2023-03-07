<template>
  <v-card class="ma-2">
    <v-card-actions>
      <v-avatar color="background" size="90" class="my-1 mx-2" @click="changeAvatar">
        <VIcon size="40" icon="mdi-account"/>
      </v-avatar>
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
import AccountSettings from '@/views/profile/components/accountSettings.vue'
import AuthSettings from '@/views/profile/components/authSettings.vue'
import {ref} from 'vue'
import UserSaves from '@/views/profile/components/userSaves.vue'

const authStore = useAuthStore()
const { dbUser } = storeToRefs(authStore)

let accSettingsToggler = ref(false)

const tab = ref('auth')

const changeAvatar = () => {
  alert('comming soon')
}
</script>