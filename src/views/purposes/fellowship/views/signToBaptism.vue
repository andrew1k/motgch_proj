<template>
    <v-form class="ma-2">
      <v-radio-group class="mt-4" label="Где вы произнесли молитву покаяния?" density="comfortable" color="error" hide-details>
        <VRadio label="в Церкви Миссия Благая Весть" value="MBVchurch" />
        <VRadio label="в другой Церкви" value="otherChurch" />
        <VRadio label="еще не произносил (а)" value="none" />
      </v-radio-group>
      <VDivider />
      <v-radio-group class="my-1" label="Проходили вы семинар ШАГ1 «Общение» ?" density="comfortable" color="secondary" hide-details>
        <VRadio label="Да" value="Yes" />
        <VRadio label="Нет" value="No" />
      </v-radio-group>
      <VDivider />
      <v-radio-group  class="my-1" label="У вас есть вопрос по водному крещению?" density="comfortable" color="info" hide-details>
        <VRadio label="Нет вопросов, только жду информации где будет крещение и что надо для этого." value="NoQuestions" />
        <VRadio label="Да, есть вопросы, свяжитесь со мной" value="HaveQuestion" />
      </v-radio-group>
      <VDivider />
      <v-radio-group  class="my-1" label="Как ответить Вам на заполненную анкету?" density="comfortable" color="success" hide-details>
        <VRadio label="What's App" value="WhatsApp" />
        <VRadio label="Telegram" value="Telegram" />
        <VRadio label="По телефону" value="Phone" />
      </v-radio-group>
    </v-form>
  <v-card-actions>
    <VBtn icon="mdi-chevron-left" color="fellowship" density="comfortable" @click="$emit('goBack')"/>
    <VSpacer/>
    <v-btn color="fellowship" @click="signToBaptism">Записаться на крещение</v-btn>
  </v-card-actions>
</template>

<script setup>
import {defineEmits} from 'vue'

const signToBaptism = () => {
  console.log('signToBaptism')
}

defineEmits(['goBack'])
</script>