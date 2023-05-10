<template>
    <v-form class="ma-2">
      <v-radio-group v-model="repentance" class="mt-4" label="Где вы произнесли молитву покаяния?" density="comfortable" color="error" hide-details>
        <VRadio label="в Церкви Миссия Благая Весть" value="в Церкви Миссия Благая Весть" />
        <VRadio label="в другой Церкви" value="в другой Церкви" />
        <VRadio label="еще не произносил (а)" value="еще не произносил (а)" />
      </v-radio-group>
      <VDivider />
      <v-radio-group v-model="step1" class="my-1" label="Проходили вы семинар ШАГ1 «Общение» ?" density="comfortable" color="secondary" hide-details>
        <VRadio label="Да" value="Да" />
        <VRadio label="Нет" value="Нет" />
      </v-radio-group>
      <VDivider />
      <v-radio-group v-model="question" class="my-1" label="У вас есть вопрос по водному крещению?" density="comfortable" color="info" hide-details>
        <VRadio label="Нет вопросов, только жду информации где будет крещение и что надо для этого." value="Нет вопросов, только жду информации где будет крещение и что надо для этого." />
        <VRadio label="Да, есть вопросы, свяжитесь со мной" value="Да, есть вопросы, свяжитесь со мной" />
      </v-radio-group>
      <VDivider />
      <v-radio-group v-model="answer"  class="my-1" label="Как ответить Вам на заполненную анкету?" density="comfortable" color="success" hide-details>
        <VRadio label="What's App" value="WhatsApp" />
        <VRadio label="Telegram" value="Telegram" />
        <VRadio label="По телефону" value="По телефону" />
      </v-radio-group>
    </v-form>
  <v-card-actions>
    <VSpacer/>
    <v-btn color="fellowship" @click="sendForm('fellowship', {repentance, step1, question, answer}, 'Записаться на крещение')">Записаться на крещение</v-btn>
  </v-card-actions>
</template>

<script setup>
import {ref} from 'vue'
import {useFormsStore} from '@/stores/formsStore'

const answer = ref()
const question = ref()
const step1 = ref()
const repentance = ref()
const {sendForm} = useFormsStore()
</script>