<template>
  <v-navigation-drawer
    v-model="drawer"
  >
    <v-list density="comfortable" nav>
      <vListItem prepend-icon="mdi-home" title="Главная" value="homePage" to="/"/>
      <vListItem prepend-icon="mdi-book-open" title="Studying" value="studyingPage"/>
      <vListItem prepend-icon="mdi-account-group" title="Материалы для МГ" value="materialsForSG"/>
      <vListItem prepend-icon="mdi-calendar" title="Календарь" value="calendar" to="/calendar"/>
      <vListItem prepend-icon="mdi-table" title="Управление" value="appUsers"/>
    </v-list>
  </v-navigation-drawer>

  <v-bottom-navigation density="comfortable" elevation="0" grow v-if="mdAndDown">
    <vBtn icon="mdi-home" to="/"/>
    <vBtn icon="mdi-calendar" to="/calendar"/>
    <vBtn icon="mdi-compass" to="/discover"/>
    <vBtn flat icon="mdi-menu" @click="drawer = !drawer"/>
  </v-bottom-navigation>
</template>

<script setup>
import {useDisplay} from 'vuetify'
import {ref} from 'vue'

const {mdAndDown} = useDisplay()
const drawer = ref(null)
</script>