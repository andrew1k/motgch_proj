<template>
  <v-card elevation="0" rounded="0" variant="text" class="mx-auto" max-width="500">
    <v-card class="ma-2">
      <VProgressLinear indeterminate v-if="isSubmitting"/>
      <v-card-text>
        Введите ваш email, который вы использовали при регистрации, и мы на вашу почту отправим ссылку для востановления
        пароля
        <v-form @submit.prevent="submit">
          <vTextField
            label="Email"
            type="email"
            v-model="email"
            :error-messages="eError"
            @blur="eBlur"
          />
          <v-card-actions>
            <VListItem to="/auth" subtitle="Войти" />
            <vSpacer/>
            <v-btn type="submit" :disabled="eError">Восстановить пароль</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script setup>
import {useAuthStore} from '@/stores/authStore'
import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
const {restorePassword} = useAuthStore()
const {handleSubmit, isSubmitting} = useForm()
const {value: email, errorMessage: eError, handleBlur: eBlur} = useField('email',
  yup.string().trim().email().required()
)

const submit = handleSubmit( async values => {
  await restorePassword({...values})
})
</script>