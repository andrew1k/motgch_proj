<template>
  <VProgressLinear indeterminate v-if="isSubmitting"/>
  <v-form @submit.prevent="submit">
    <v-card-text>
      <VTextField
        label="Ваше имя"
        v-model="firstName"
        :error-messages="firstNameError"
        @blur="firstNameBlur"
      />
      <VTextField
        label="Ваша фамилия"
        v-model="secondName"
        :error-messages="secondNameError"
        @blur="secondNameBlur"
      />
      <VTextField
        label="Дата рождения"
        type="date"
        v-model="birthDate"
        :error-messages="birthDateError"
        @blur="birthDateBlur"
      />
      <VTextField
        label="Ваш номер телефона"
        v-model="phoneNumber"
        prefix="+7"
        counter="10"
        :error-messages="phoneNumberError"
        @blur="phoneNumberBlur"
      />
    </v-card-text>
    <v-card-actions class="my-2">
      <VSpacer/>
      <v-btn type="submit">Сохранить</v-btn>
    </v-card-actions>
  </v-form>
</template>

<script setup>
import {storeToRefs} from 'pinia'
import {useAuthStore} from '@/stores/authStore'
import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
const authStore = useAuthStore()
const {dbUser} = storeToRefs(authStore)
const {appUpdateUserData} = authStore

const {handleSubmit, isSubmitting} = useForm()

const {value: firstName, errorMessage: firstNameError, handleBlur: firstNameBlur} = useField('firstName',
  yup
    .string()
    .min(2)
    .required('Это поле обязательно')
    .max(32),
  {
    validateOnValueUpdate:true,
    initialValue: dbUser.value.firstName
  }
)
const {value: secondName, errorMessage: secondNameError, handleBlur: secondNameBlur} = useField('secondName',
  yup
    .string()
    .min(2)
    .required('Это поле обязательно')
    .max(32),
  {
    validateOnValueUpdate:true,
    initialValue: dbUser.value.secondName
  }
)
const {value: phoneNumber, errorMessage: phoneNumberError, handleBlur: phoneNumberBlur} = useField('phoneNumber',
  yup
    .number()
    .required('Это поле обязательно'),
  {
    validateOnValueUpdate:true,
    initialValue: dbUser.value.phoneNumber
  }
)
const {value: birthDate, errorMessage: birthDateError, handleBlur: birthDateBlur} = useField('birthDate',
  yup
    .date()
    .required('Это поле обязательно'),
  {
    validateOnValueUpdate:true,
    initialValue: dbUser.value.birthDate
  }
)

const submit = handleSubmit(async values => {
  await appUpdateUserData({...values})
})
</script>