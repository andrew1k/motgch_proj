<template>
  <v-card-title>
    Изменить email
  </v-card-title>
<v-card-text>
  <v-form ref="changeEmail" v-model="isEmailValid" lazy-validation>
    <vTextField
      v-model="emailValue"
      :rules="emailRules"
      label="Введите новый email"
      variant="underlined"
      type="email"
      required
      class="my-3"
    />
  </v-form>
</v-card-text>
  <v-card-actions>
    <vSpacer />
    <v-btn
      @click="updateEmail"
      :disabled="!isEmailValid"
    >Обновить email</v-btn>
  </v-card-actions>
  <vDivider />
  <v-card-title>
    Обновить пароль
  </v-card-title>
  <v-card-text>
    <v-form ref="changePassword" v-model="isPasswordValid" lazy-validation>
      <vTextField
        v-model="newPasswordValue"
        :rules="passwordRules"
        label="Новый пароль"
        variant="underlined"
        :append-icon="showPassword ?'mdi-eye-off' : 'mdi-eye'"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        class="my-3"
      />
    </v-form>
  </v-card-text>
  <v-card-actions>
    <vSpacer />
    <v-btn
      @click="updatePassword"
      :disabled="!isPasswordValid"
    >
      Обновить пароль
    </v-btn>
  </v-card-actions>
  <vDivider />
  <v-card-title>
    Удалить аккаунт
  </v-card-title>
  <v-card-actions>
    <vCheckbox
      v-model="deleteAccountCheckbox"
      label="Я действительно хочу удалить аккаунт"
    />
  </v-card-actions>
  <v-card-actions>
    <vSpacer/>
    <v-btn :disabled="!deleteAccountCheckbox" color="error" @click="deleteAccount">Удалить аккаунт</v-btn>
  </v-card-actions>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    const changeEmail = ref('')
    const isEmailValid = ref(true)
    const emailValue = ref('')
    const emailRules = [
      v => !!v || 'Поле Email обязательно',
      v => /.+@.+\..+/.test(v) || 'Введите пральный Email',
      v => (v && v.length <= 32) || 'Поле email не может содержать больше 32 символов',
    ]

    const changePassword = ref('')
    const isPasswordValid = ref(true)
    const newPasswordValue = ref('')
    const passwordRules = [
      v => !!v || 'Поле Email обязательно',
      v => (v && v.length <= 32) || 'Поле для пароля не может содержать больше 32 символов',
      v => (v && v.length >= 6) || 'Пароль должен иметь не менее 6 символов',
    ]
    const showPassword = ref(false)
    const deleteAccountCheckbox = ref(false)

    const updateEmail = () => {
      console.log(emailValue.value)
    }
    const updatePassword = () => {
      console.log(newPasswordValue.value)
    }
    const deleteAccount = () => {

    }
    return {
      changeEmail,
      isEmailValid,
      emailValue,
      emailRules,
      updateEmail,
      changePassword,
      isPasswordValid,
      newPasswordValue,
      passwordRules,
      showPassword,
      updatePassword,
      deleteAccountCheckbox,
      deleteAccount
    }
  }
}
</script>

<style scoped>

</style>