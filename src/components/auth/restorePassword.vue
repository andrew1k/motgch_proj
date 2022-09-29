<template>
<v-form ref="restorePasswordForm" v-model="isValidRestorePassword" lazy-validation>
  <vTextField
    density="comfortable"
    v-model="restoreEmailValue"
    :rules="emailRules"
    label="Email"
    variant="outlined"
    type="email"
    required
    class="my-3"
  />
</v-form>
  <v-btn
    :disabled="!isValidRestorePassword"
    @click="restorePassword"
    @keydown.enter="restorePassword"
    color="primary"
    variant="flat"
  >Восстановить пароль</v-btn>
</template>

<script>
import {ref} from 'vue'
import store from '@/store'

export default {
  setup() {
    let restoreEmailValue = ref('')
    const emailRules = [
      v => !!v || 'Поле Email обязательно',
      v => /.+@.+\..+/.test(v) || 'Введите пральный Email',
      v => (v && v.length <= 32) || 'Поле email не может содержать больше 32 символов',
    ]
    const restorePasswordForm = ref()
    const isValidRestorePassword = ref(true)
    const restorePassword =  async () => {
      await store.dispatch('auth/restorePassword', {email: restoreEmailValue.value})
    }
    return {
      restoreEmailValue,
      restorePassword,
      restorePasswordForm,
      isValidRestorePassword,
      emailRules
    }
  }
}
</script>

<style scoped>

</style>