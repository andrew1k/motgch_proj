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
    <VTextField
      required
      v-model="phoneNumberValue"
      :rules="[
        v => v && v.length === 10 || 'Это поле должно иметь 10 символов',
        v => !!+v || 'Должно быть число']"
      prefix="+7"
      counter="10"
      variant="outlined"
      density="comfortable"
      type="text"
      label="Ваш номер телефона"
      hint="Без идентификатора страны(+7)"
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
    <v-checkbox
      density="comfortable"
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
                правилами обработки
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
import {useAuthStore} from '@/stores/authStore'

const { appSignup } = useAuthStore()

const signupForm = ref()
const isValid = ref(true)
let showPassword = ref(false)

const emailRules = [
  v => !!v || 'Поле Email обязательно',
  v => /.+@.+\..+/.test(v) || 'Введите правельный Email',
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
let phoneNumberValue = ref('')
let birthDateValue = ref('')
let emailValue = ref('')
let passwordValue = ref('')
let personGenderValue = ref()
let acceptCheckbox = ref(false)
const onSignup = async () => {
  await appSignup({
    firstName: firstNameValue.value,
    secondName: secondNameValue.value,
    birthDate: birthDateValue.value,
    email: emailValue.value,
    password: passwordValue.value,
    personGender: personGenderValue.value,
    phoneNumber: phoneNumberValue.value
  })
}

// Я даю своё согласие на обработку и хранение своих персональных данных в соответсвии с Федеральным законом РФ № 152-ФЗ Местной религиозной организации христиан  веры евангельской(пятидесятников) 'Церкви евангельских христиан в духе апостолов 'Миссия Благая весть'' ОГРН 1037858004964 от 30 января 2003г.
</script>