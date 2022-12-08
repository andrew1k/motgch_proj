<template>
  <v-form ref="signupForm" v-model="isValid" lazy-validation>
    <vTextField
      required
      v-model="firstNameValue"
      :rules="textFieldRules"
      type="text"
      label="Имя"
      hint="Как вас зовут?"
      density="comfortable"
      variant="outlined"
      class="my-4"
    />
    <vTextField
      required
      v-model="secondNameValue"
      :rules="textFieldRules"
      type="text"
      label="Фамилия"
      hint="Скажите вашу фамилию?"
      density="comfortable"
      variant="outlined"
      class="my-4"
    />
    <vTextField
      required
      v-model="birthDateValue"
      type="date"
      label="День рождения"
      hint="Когда вы родитись?"
      density="comfortable"
      variant="outlined"
      class="my-4"
    />
    <vTextField
      required
      v-model="emailValue"
      :rules="emailRules"
      type="email"
      label="Email"
      hint="Напишите ваш действующий email"
      density="comfortable"
      variant="outlined"
      class="my-4"
    />
    <vTextField
      density="comfortable"
      v-model="passwordValue"
      :rules="passwordRules"
      label="Пароль"
      hint="Придумайте пароль"
      variant="outlined"
      :append-inner-icon="showPassword ?'mdi-eye-off' : 'mdi-eye'"
      :type="showPassword ? 'text' : 'password'"
      @click:append-inner="showPassword = !showPassword"
      class="my-4"
    />
    <v-radio-group
      density="compact"
      inline
      v-model="personGenderValue"
      label="Ваш пол"
    >
      <vRadio label="Мужской" value="male" class="ma-2"/>
      <vRadio label="Женский" value="female" class="ma-2"/>
    </v-radio-group>
    <vCheckbox
      density="comfortable"
      label="Согласен"
      v-model="acceptCheckbox"
    />

    <v-card-actions>
      <vSpacer/>
      <v-btn
        :disabled="!acceptCheckbox || !isValid"
        @click="onSignup"
        @keydown.enter="onSignup"
        color="primary"
        variant="flat"
      >
        Создать Аккаунт
      </v-btn>
    </v-card-actions>
  </v-form>
</template>

<script setup>
import {ref} from 'vue'
import store from '@/store'

const signupForm = ref()
const isValid = ref(true)
let showPassword = ref(false)

const emailRules = [
  v => !!v || 'Поле Email обязательно',
  v => /.+@.+\..+/.test(v) || 'Введите пральный Email',
  v => (v && v.length <= 32) || 'Поле email не может содержать больше 32 символов',
]
const textFieldRules = [
  v => !!v || 'Это поле обязательно',
  v => (v && v.length <= 32) || 'Это поле не может содержать больше 32 символов',
]
const passwordRules = [
  v => !!v || 'Поле Email обязательно',
  v => (v && v.length <= 32) || 'Поле для пароля не может содержать больше 32 символов',
  v => (v && v.length >= 6) || 'Пароль должен иметь не менее 6 символов',
]

let firstNameValue = ref('')
let secondNameValue = ref('')
let birthDateValue = ref('')
let emailValue = ref('')
let passwordValue = ref('')
let personGenderValue = ref()
let acceptCheckbox = ref(false)
const onSignup = async () => {
  const toDB = {
    firstName: firstNameValue.value,
    secondName: secondNameValue.value,
    birthDate: birthDateValue.value,
    email: emailValue.value,
    password: passwordValue.value,
    personGender: personGenderValue.value,
  }
  await store.dispatch('auth/appSignup', toDB)
}
</script>