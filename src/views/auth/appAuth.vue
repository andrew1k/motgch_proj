<template>
  <v-card variant="text" max-width="500" class="mx-auto" elevation="0">
    <v-tabs v-model="toggleForm" density="comfortable" align-tabs="center">
      <v-tab value="login">Войти</v-tab>
      <v-tab value="signup">Создать аккаунт</v-tab>
    </v-tabs>
    <v-card class="ma-2">
      <v-card-text>
        <v-window v-model="toggleForm">
          <v-window-item value="login">
            <LoginForm/>
          </v-window-item>
          <v-window-item value="signup">
            <SignupForm/>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script setup>
import LoginForm from '@/views/auth/components/LoginForm.vue'
import SignupForm from '@/views/auth/components/SignupForm.vue'
import {ref} from 'vue'

const toggleForm = ref('login')
</script>