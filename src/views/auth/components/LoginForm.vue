<template>
  <VProgressLinear indeterminate v-if="isSubmitting"/>
  <v-form @submit.prevent="submit" class="mt-2">
    <vTextField
      label="Email"
      type="email"
      v-model="email"
      :error-messages="eError"
      @blur="eBlur"
    />
    <vTextField
      label="Пароль"
      :type="passwordEye ? 'text' : 'password'"
      v-model="password"
      :error-messages="pError"
      @blur="pBlur"
      :append-inner-icon="passwordEye ?'mdi-eye-off' : 'mdi-eye'"
      @click:append-inner="passwordEye = !passwordEye"
    />
    <v-card-actions>
      <VListItem to="/restorePassword" subtitle="забыли пароль?"/>
      <vSpacer/>
      <v-btn type="submit" :disabled="!!eError || !!pError">Войти</v-btn>
    </v-card-actions>
  </v-form>
</template>

<script setup>
import {ref} from 'vue'
import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import {useAuthStore} from '@/stores/authStore'
import {useNotificationsStore} from '@/stores/notificationsStore'
const { appLogin } = useAuthStore()

const passwordEye = ref(false)

const {handleSubmit, isSubmitting} = useForm()
const {value: email, errorMessage: eError, handleBlur: eBlur} = useField('email',
  yup
    .string()
    .trim()
    .required('Поле email должно быть заполненно')
    .email('Введите валдный email'),
)
const {value: password, errorMessage: pError, handleBlur: pBlur} = useField('password',
  yup
    .string()
    .trim()
    .required('Это поле должно быть заполненно')
    .min(6,'Это поле должно иметь не менее 6 символов')
    .max(32, 'Не должно иметь более 32 символов')
)

const {requestNotificationsPermissions} = useNotificationsStore()

const submit = handleSubmit(async values => {
  await appLogin({...values})
  await requestNotificationsPermissions()
})
</script>