<template>
  <v-form ref="signupForm" v-model="isValid" lazy-validation>
    <vTextField
      required
      v-model="firstNameValue"
      :rules="textFieldRules"
      type="text"
      label="Ваше имя"
      density="comfortable"
      variant="outlined"
      class="my-3"
    />
    <vTextField
      required
      v-model="secondNameValue"
      :rules="textFieldRules"
      type="text"
      label="Ваша фамилия"
      density="comfortable"
      variant="outlined"
      class="my-3"
    />
    <vTextField
      required
      v-model="birthDateValue"
      type="date"
      label="Ваш день рождения"
      density="comfortable"
      variant="outlined"
      class="my-3"
    />
    <vTextField
      required
      v-model="emailValue"
      :rules="emailRules"
      type="email"
      label="Email"
      density="comfortable"
      variant="outlined"
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
    <vDivider />
    <v-card-actions>
      <vSpacer />
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

<script>
import {ref} from 'vue'
import store from '@/store'
import router from '@/router'

export default {
  setup() {
    const signupForm = ref()
    const isValid = ref(true)
    const showPassword = ref(false)

    const emailRules =  [
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
    let birthDateValue = ref('') // debug needed to be in storage yyyy/mm/dd
    let emailValue = ref('')
    let passwordValue = ref('')
    let personGenderValue = ref('male')
    let acceptCheckbox = ref(false)
    const onSignup = async () => {
      const toDB = {
        firstName:firstNameValue.value,
        secondName:secondNameValue.value,
        birthDate: birthDateValue.value,
        email: emailValue.value,
        password: passwordValue.value,
        personGender: personGenderValue.value,
      }
      await store.dispatch('auth/appSignup', toDB)
      await router.push('/')
    }

    return {
      signupForm,
      isValid,
      showPassword,
      emailRules,
      textFieldRules,
      passwordRules,
      firstNameValue,
      secondNameValue,
      birthDateValue,
      emailValue,
      passwordValue,
      personGenderValue,
      acceptCheckbox,
      onSignup
    }
  }
}
</script>

<style scoped>

</style>