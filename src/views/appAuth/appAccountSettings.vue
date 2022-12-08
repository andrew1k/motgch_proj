<template>
  <v-card max-width="800" class="mx-auto" variant="text">
    <v-toolbar density="comfortable">
      <v-btn prepend-icon="mdi-chevron-left" to="/">Настройки</v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tabs" align-tabs="center" density="comfortable">
          <v-tab
            v-for="tab in settingsTabs"
            :key="tab.tabValue"
            :value="tab.tabValue"
            :prepend-icon="tab.tabIcon"
          >
            {{ tab.tabName }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-window v-model="tabs">
      <v-window-item v-for="tab in settingsTabs" :key="tab.tabValue" :value="tab.tabValue">
        <component :is="tab.tabComponent"/>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import AccountSettings from '@/components/accountSettings/accountSettings.vue'
import AuthSettings from '@/components/accountSettings/authSettings.vue'

const tabs = ref(null)
const settingsTabs = ref([
  {
    tabValue: 'accountSettings',
    tabName: 'Базовые',
    tabIcon: 'mdi-account-outline',
    tabComponent: AccountSettings,
  }, {
    tabValue: 'authSettings',
    tabName: 'Авторизации',
    tabIcon: 'mdi-security',
    tabComponent: AuthSettings,
  },
])
</script>