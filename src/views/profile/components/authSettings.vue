<template>
  <v-card-title>
    Изменить email
  </v-card-title>
  <v-card-text>
    <v-form ref="changeEmail" v-model="isEmailValid" lazy-validation validate-on="blur">
      <vTextField
        v-model="email"
        :rules="emailRules"
        label="Введите новый email"
        variant="outlined"
        type="email"
        required
        class="my-3"
        hide-details
      />
    </v-form>
  </v-card-text>
  <v-card-actions>
    <vSpacer/>
    <v-btn
      @click="appUpdateEmail(email)"
      :disabled="!isEmailValid"
    >Обновить email
    </v-btn>
  </v-card-actions>
  <vDivider/>
  <v-card-title>
    Обновить пароль
  </v-card-title>
  <v-card-text>
    <v-form ref="changePassword" v-model="isPasswordValid" lazy-validation>
      <vTextField
        v-model="newPasswordValue"
        :rules="passwordRules"
        label="Новый пароль"
        variant="outlined"
        :append-inner-icon="showPassword ?'mdi-eye-off' : 'mdi-eye'"
        :type="showPassword ? 'text' : 'password'"
        @click:append-inner="showPassword = !showPassword"
        class="my-3"
        hide-details
      />
    </v-form>
  </v-card-text>
  <v-card-actions>
    <vSpacer/>
    <v-btn
      @click="appUpdatePassword(newPasswordValue)"
      :disabled="!isPasswordValid"
    >
      Обновить пароль
    </v-btn>
  </v-card-actions>
  <vDivider/>
  <v-card-title>
    Удалить аккаунт
  </v-card-title>
  <v-card-actions>
    <vCheckbox
      v-model="deleteAccountCheckbox"
      label="Я действительно хочу удалить аккаунт"
      hide-details
    />
  </v-card-actions>
  <v-card-actions>
    <vSpacer/>
    <v-btn :disabled="!deleteAccountCheckbox" color="error" @click="appDeleteAcc">Удалить аккаунт</v-btn>
  </v-card-actions>
</template>

<script setup>
import {ref} from 'vue'
import {useAuthStore} from '@/stores/authStore'
import {storeToRefs} from 'pinia'
const authStore = useAuthStore()
const {email} = storeToRefs(authStore)
const {appUpdateEmail, appUpdatePassword, appDeleteAcc} = authStore

const changeEmail = ref('')
const isEmailValid = ref(true)
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
</script>