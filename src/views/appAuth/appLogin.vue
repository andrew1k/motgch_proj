<template>
  <v-card max-width="500" class="mx-auto" elevation="5">
    <v-card-actions>
      <v-btn to="/login" disabled>Войти</v-btn>
      <v-btn to="/signup" color="warning">Создать аккаунт</v-btn>
    </v-card-actions>
    <vDivider/>
    <v-form ref="form" v-model="isValid" lazy-validation>
      <v-card-text>
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
      </v-card-text>
      <vDivider />
      <v-card-actions>
        <v-list-item
          density="compact"
          title="Забыли пароль?"
          @click="showRestoreEmail = !showRestoreEmail"
        />
        <vSpacer />
        <v-btn
          variant="flat"
          @click.prevent="onLogin"
          color="warning"
          type="submit"
          :disabled="!isValid"
        >
          Войти
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
  <v-card v-if="showRestoreEmail" max-width="500" class="mx-auto my-5" elevation="5">
    <v-card-title>
      Восстановить пароль
    </v-card-title>
    <vDivider />

    <v-form submit="restorePassword">
      <v-card-text>
        <vTextField
          density="comfortable"
          v-model="restoreEmailValue"
          label="Введите ваш Email"
          variant="outlined"
          type="email"
        />
      </v-card-text>
      <vDivider />
      <v-card-actions>
        <vSpacer />
        <v-btn color="warning" @click="restorePassword">Отправить</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>

import {ref} from 'vue'
import store from '@/store'

export default {
  setup() {
    const form = ref()
    const showPassword = ref(false)
    const showRestoreEmail = ref(false)
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
    }
    const restoreEmailValue = ref('')
    const restorePassword = () => {
      store.dispatch('auth/setUser')
    }
    return {
      showPassword,
      showRestoreEmail,
      emailValue, emailRules,
      isValid, form,
      passwordValue, passwordRules,
      restoreEmailValue,
      onLogin,
      restorePassword,
    }
  }
}
</script>

<style scoped>

</style>