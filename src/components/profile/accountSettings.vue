<template>
  <v-form ref="accountSettings" v-model="isValid" lazy-validation validate-on="blur">
    <v-card-text>
      <VTextField
        v-model="dbUser.firstName"
        :rules="textFieldRules"
        type="text"
        label="Ваше имя"
        variant="outlined"
        class="my-3"
      />
      <VTextField
        v-model="dbUser.secondName"
        :rules="textFieldRules"
        type="text"
        label="Ваша фамилия"
        variant="outlined"
        class="my-3"
      />
      <VTextField
        type="date"
        variant="outlined"
        label="Дата рождения"
        v-model="dbUser.birthDate"
        :rules="[v => !!v || 'Это поле обязательно']"
        class="my-3"
      />
      <VTextField
        v-model="dbUser.phoneNumber"
        :rules="[v => v && v.length === 10 || 'Это поле должно иметь 10 символов', v => !!+v || 'Должно быть число',]"
        prefix="+7"
        counter="10"
        variant="outlined"
        type="text"
        label="Ваш номер телефона"
      />
    </v-card-text>
    <v-card-actions class="my-2">
      <VSpacer/>
      <v-btn
        @click.prevent="appUpdateUserData({
        firstName: dbUser.firstName,
        secondName: dbUser.secondName,
        birthDate: dbUser.birthDate,
        phoneNumber: dbUser.phoneNumber})"
        type="submit"
        :disabled="!isValid"
      >Сохранить
      </v-btn>
    </v-card-actions>
  </v-form>
</template>

<script setup>
import {ref} from 'vue'
import {storeToRefs} from 'pinia'
import {useAuthStore} from '@/stores/authStore'
const authStore = useAuthStore()
const {dbUser} = storeToRefs(authStore)
const {appUpdateUserData} = authStore

const textFieldRules = [
  v => !!v || 'Это поле обязательно',
  v => (v && v.length <= 32) || 'Это поле не может содержать больше 32 символов',
]
const accountSettings = ref()
const isValid = ref(true)
</script>