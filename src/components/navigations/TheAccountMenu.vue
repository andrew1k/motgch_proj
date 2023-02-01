<template>
  <vBtn icon="mdi-account" id="accountMenu"/>
  <v-menu activator="#accountMenu">
    <v-card min-width="300">
      <v-list>
        <v-list-item :title="`${dbUser.firstName} ${dbUser.secondName}`" :subtitle="email" to="/profile">
          <template v-slot:append>
            <VIcon icon="mdi-account" color="primary"/>
          </template>
        </v-list-item>
        <vDivider/>
        <v-list-item title="Уведомления" density="comfortable">
          <template v-slot:append>
            <VIcon icon="mdi-bell" color="secondary"/>
          </template>
        </v-list-item>
        <VDivider />
        <v-list-item title="Пожертвования" to="/givingCard" density="comfortable">
          <template v-slot:append>
            <VIcon icon="mdi-gift"/>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script setup>
import {useAuthStore} from '@/stores/authStore'
import {storeToRefs} from 'pinia'

const authStore = useAuthStore()
const {email, dbUser} = storeToRefs(authStore)
</script>