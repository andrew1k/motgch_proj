<template>
    <v-form ref="loginForm" v-model="isValid" lazy-validation>
      <vTextField
        density="comfortable"
        v-model="emailValue"
        :rules="emailRules"
        label="Email"
        variant="outlined"
        type="email"
        required
        class="my-3"
      />
      <vTextField
        density="comfortable"
        v-model="passwordValue"
        :rules="passwordRules"
        label="Пароль"
        variant="outlined"
        :append-icon="showPassword ?'mdi-eye-off' : 'mdi-eye'"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        class="my-3"
      />
    </v-form>
    <vSpacer />
    <v-btn
      variant="flat"
      @click.prevent="onLogin"
      @keydown.enter="onLogin"
      color="primary"
      type="submit"
      :disabled="!isValid"
    >
      Войти
    </v-btn>
</template>

<script>
import {ref} from 'vue'
import store from '@/store'
import router from '@/router'

export default {
  setup() {
    const showPassword = ref(false)
    const loginForm = ref()
    const isValid= ref(true)
    let emailValue = ref('')
    const emailRules = [
      v => !!v || 'Поле Email обязательно',
      v => /.+@.+\..+/.test(v) || 'Введите пральный Email',
      v => (v && v.length <= 32) || 'Поле email не может содержать больше 32 символов',
    ]
    let passwordValue = ref('')
    const passwordRules = [
      v => !!v || 'Поле Email обязательно',
      v => (v && v.length <= 32) || 'Поле для пароля не может содержать больше 32 символов',
      v => (v && v.length >= 6) || 'Пароль должен иметь не менее 6 символов',
    ]
    const onLogin = async () => {
      await store.dispatch('auth/appLogin', {email: emailValue.value, password: passwordValue.value})
      await router.push('/')
    }
    return {
      showPassword,
      loginForm,
      isValid,
      emailValue,
      emailRules,
      passwordValue,
      passwordRules,
      onLogin,
    }
  }
}
</script>