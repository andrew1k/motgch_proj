<template>
  <v-form ref="accountSettings" v-model="isValid" lazy-validation validate-on="blur">
    <v-card-text>
      <VTextField
        v-model="firstNameValue"
        :rules="textFieldRules"
        type="text"
        label="Ваше имя"
        density="comfortable"
        variant="underlined"
        class="my-3"
      />
      <VTextField
        v-model="secondNameValue"
        :rules="textFieldRules"
        type="text"
        label="Ваша фамилия"
        density="comfortable"
        variant="underlined"
        class="my-3"
      />
      <VTextField
        type="date"
        variant="underlined"
        label="Дата рождения"
        v-model="birthDateValue"
        :rules="[v => !!v || 'Это поле обязательно']"
        class="my-3"
      />
      <VTextField
        v-model="phoneNumberValue"
        :rules="[v => v && v.length === 10 || 'Это поле должно иметь 10 символов', v => !!+v || 'Должно быть число',]"
        prefix="+7"
        counter="10"
        variant="underlined"
        type="text"
        label="Ваш номер телефона"
      />
    </v-card-text>
    <v-card-actions class="my-2">
      <VSpacer/>
      <v-btn
        @click.prevent="saveData"
        type="submit"
        :disabled="!isValid"
      >Сохранить
      </v-btn>
    </v-card-actions>
  </v-form>
</template>

<script setup>
import {ref} from 'vue'
import store from '@/store'

const textFieldRules = [
  v => !!v || 'Это поле обязательно',
  v => (v && v.length <= 32) || 'Это поле не может содержать больше 32 символов',
]
const accountSettings = ref()
const isValid = ref(true)
const appUser = store.state.settings.appUser
const firstNameValue = ref(appUser.firstName)
const secondNameValue = ref(appUser.secondName)
const birthDateValue = ref(appUser.birthDate)
const phoneNumberValue = ref(appUser.phoneNumber)
const saveData = () => {
  const toDB = {
    firstName: firstNameValue.value,
    secondName: secondNameValue.value,
    birthDate: birthDateValue.value,
    phoneNumber: phoneNumberValue.value,
  }
    console.log(toDB)
}
</script>