<template>
  <v-card max-width="500" class="mx-auto" elevation="5">
    <v-card-actions>
      <v-btn :disabled="toggleForm === 'login'" color="primary" @click="toggleForm = 'login'">Войти</v-btn>
      <v-btn color="primary" :disabled="toggleForm === 'signup'" @click="toggleForm = 'signup'">Создать аккаунт</v-btn>
      <vSpacer />
      <v-btn color="dark" :disabled="toggleForm === 'restore'" @click="toggleForm = 'restore'">Забыли пароль?</v-btn>
    </v-card-actions>
    <vDivider />
      <v-card-text>
        <loginForm v-if="toggleForm === 'login'" />
        <signupForm v-if="toggleForm === 'signup'" />
        <restorePassword v-if="toggleForm ==='restore'"/>
      </v-card-text>
  </v-card>
</template>

<script>
import {ref} from 'vue'
import loginForm from '@/components/auth/LoginForm'
import signupForm from '@/components/auth/SignupForm'
import restorePassword from '@/components/auth/restorePassword'

export default {
  setup() {
    const toggleForm = ref('login')
    return {
      toggleForm
    }
  },
  components: {
    loginForm,
    signupForm,
    restorePassword
  }
}
</script>

<style scoped>

</style>