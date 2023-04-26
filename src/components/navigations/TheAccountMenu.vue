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
<!--        <v-list-item title="Уведомления" to="/notifications">-->
<!--          <template v-slot:append>-->
<!--            <VIcon icon="mdi-bell" color="secondary"/>-->
<!--          </template>-->
<!--        </v-list-item>-->
<!--        <VDivider />-->
        <v-list-item title="Пожертвование" to="/giving">
          <template v-slot:append>
            <VIcon icon="mdi-gift"/>
          </template>
        </v-list-item>
        <VDivider />
        <v-list-item title="Тема" @click="handleTheme">
          <template v-slot:append>
            <VIcon icon="mdi-lightbulb-on"/>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script setup>
import {useAuthStore} from '@/stores/authStore'
import {storeToRefs} from 'pinia'
import {useAppState} from '@/stores/appState'

const {handleTheme} = useAppState()
const authStore = useAuthStore()
const {email, dbUser} = storeToRefs(authStore)
</script>