<template>
  <VProgressLinear indeterminate v-if="isSubmitting"/>
  <v-form @submit.prevent="submit" class="mt-2">
    <vTextField
      label="Имя"
      v-model="firstName"
      :error-messages="firstNameError"
      @blur="firstNameBlur"
    />
    <vTextField
      label="Фамилия"
      v-model="secondName"
      :error-messages="secondNameError"
      @blur="secondNameBlur"
    />
    <VTextField
      label="Ваш номер телефона"
      v-model="phoneNumber"
      :error-messages="phoneNumberError"
      @blur="phoneNumberBlur"
      prefix="+7"
      counter="10"
    />
    <vTextField
      label="День рождения"
      v-model="birthDate"
      :error-messages="birthDateError"
      @blur="birthDateBlur"
      type="date"
    />
    <vTextField
      label="Email"
      v-model="email"
      :error-messages="eError"
      @blur="eBlur"
      />
    <vTextField
      label="Пароль"
      v-model="password"
      :error-messages="pError"
      @blur="pBlur"
      :type="showPassword ? 'text' : 'password'"
      :append-inner-icon="showPassword ?'mdi-eye-off' : 'mdi-eye'"
      @click:append-inner="showPassword = !showPassword"
    />
    <v-radio-group
      label="Ваш пол"
      v-model="personGender"
      :error-messages="personGenderError"
      @blur="personGenderBlur"
      inline
    >
      <vRadio label="Мужской" value="male" />
      <vRadio label="Женский" value="female" />
    </v-radio-group>
    <v-checkbox
      v-model="acceptCheckbox"
    >
      <template v-slot:label>
        <div>
          Я согласен с
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <a
                target="_blank"
                href="https://mbv.spb.ru/agreement/"
                v-bind="props"
                @click.stop
              >
                Политикой конфиденциальности
              </a>
            </template>
            Откроется в новом браузерном окне
          </v-tooltip>
          персональных данных
        </div>
      </template>
    </v-checkbox>
    <v-card-actions>
      <vSpacer/>
      <v-btn type="submit" :disabled="!acceptCheckbox">Создать Аккаунт</v-btn>
    </v-card-actions>
  </v-form>
</template>

<script setup>
import {ref} from 'vue'
import {useAuthStore} from '@/stores/authStore'
import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import {useNotificationsStore} from '@/stores/notificationsStore'

const {appSignup} = useAuthStore()

let showPassword = ref(false)
let acceptCheckbox = ref(false)


const {handleSubmit, isSubmitting} = useForm()
const {value: firstName, errorMessage: firstNameError, handleBlur: firstNameBlur} = useField('firstName',
  yup
    .string()
    .min(2)
    .required('Это поле обязательно')
    .max(32)
)
const {value: secondName, errorMessage: secondNameError, handleBlur: secondNameBlur} = useField('secondName',
  yup
    .string()
    .min(2)
    .required('Это поле обязательно')
    .max(32)
)
const {value: phoneNumber, errorMessage: phoneNumberError, handleBlur: phoneNumberBlur} = useField('phoneNumber',
  yup
    .number()
    .required('Это поле обязательно')
)
const {value: birthDate, errorMessage: birthDateError, handleBlur: birthDateBlur} = useField('birthDate',
  yup
    .date()
    .required('Это поле обязательно')
)
const {value: email, errorMessage: eError, handleBlur: eBlur} = useField('email',
  yup
    .string()
    .trim()
    .required('Поле email должно быть заполненно')
    .email('Введите валдный email')
)
const {value: password, errorMessage: pError, handleBlur: pBlur} = useField('password',
  yup
    .string()
    .trim()
    .required('Это поле должно быть заполненно')
    .min(6,'Это поле должно иметь не менее 6 символов')
    .max(32, 'Не должно иметь более 32 символов')
)
const {value: personGender, errorMessage: personGenderError, handleBlur: personGenderBlur} = useField('personGender',
  yup.string().required('Это поле обязательно')
)

const {requestNotificationsPermissons} = useNotificationsStore()

const submit = handleSubmit(async values => {
  await appSignup({...values})
  await requestNotificationsPermissons()
})
</script>