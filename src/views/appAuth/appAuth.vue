<template>
  <v-card max-width="500" class="mx-auto">
    <v-tabs v-model="toggleForm" density="comfortable" align-tabs="center">
      <v-tab value="login">Войти</v-tab>
      <v-tab value="signup">Создать аккаунт</v-tab>
    </v-tabs>
    <vDivider />
    <v-card-text>
      <v-window v-model="toggleForm">
        <v-window-item value="login"><LoginForm /></v-window-item>
        <v-window-item value="signup"><SignupForm /></v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
import LoginForm from '@/components/auth/LoginForm'
import SignupForm from '@/components/auth/SignupForm'
import {ref} from 'vue'

const toggleForm = ref('login')
</script>