<template>
  <v-form ref="loginForm" v-model="isValid" lazy-validation @keydown.enter="onLogin">
    <vTextField
      density="comfortable"
      v-model="emailValue"
      :rules="emailRules"
      label="Email"
      variant="outlined"
      type="email"
      required
      class="my-3"
      hint="Введите ваш email"
    />
    <vTextField
      density="comfortable"
      v-model="passwordValue"
      :rules="passwordRules"
      label="Пароль"
      variant="outlined"
      :append-inner-icon="passwordEye ?'mdi-eye-off' : 'mdi-eye'"
      :type="passwordEye ? 'text' : 'password'"
      @click:append-inner="passwordEye = !passwordEye"
      class="my-3"
      hint="Введите ваш пароль"
    />
  </v-form>
  <v-card-actions>
    <v-list-item density="comfortable" to="/restorePassword">
      забыли пароль?
    </v-list-item>
    <vSpacer/>
    <v-btn
      variant="flat"
      @click.prevent="onLogin"
      color="primary"
      type="submit"
      :disabled="!isValid"
    >
      Войти
    </v-btn>
  </v-card-actions>
</template>

<script setup>
import {ref} from 'vue'
import store from '@/store'
import router from '@/router'

let passwordEye = ref(false)
const loginForm = ref()
const isValid = ref(true)
let emailValue = ref('')
const emailRules = [
  v => !!v || 'Поле Email обязательно',
  v => /.+@.+\..+/.test(v) || 'Введите правельный Email',
  v => (v && v.length <= 32) || 'Поле email не может содержать больше 32 символов',
]
let passwordValue = ref('')
const passwordRules = [
  v => !!v || 'Это поле обязательно',
  v => (v && v.length <= 32) || 'Поле для пароля не может содержать больше 32 символов',
  v => (v && v.length >= 6) || 'Пароль должен иметь не менее 6 символов',
]
const onLogin = async () => {
  await store.dispatch('auth/appLogin', {email: emailValue.value, password: passwordValue.value})
  await router.push('/')
}
</script>