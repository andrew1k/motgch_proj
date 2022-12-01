<template>
  <v-card>
    <v-card-title>
      Connection Card
    </v-card-title>

    <v-card-text>
      All data we keep secure
    </v-card-text>
    <vDivider />
    <v-form>
      <v-select
        v-model="selectInput"
        variant="solo"
        clearable
        label="Выберите"
        :items="selectableItems"
        multiple
      />
      <v-textarea
        variant="solo"
        v-model="textareaInput"
        rows="1"
        auto-grow
        label="Впишите, всё, что считаете нужным"
        row-height="20"
      >

      </v-textarea>
      <v-card-actions>
        <vSpacer />
        <v-btn variant="elevated" elevation="2" @click="submitForm" @keydown.enter="submitForm">Отправить</v-btn>
      </v-card-actions>
    </v-form>
    <vDivider />
    <v-card-text>
      Learn more about our
      <router-link to="/privacyPolicy" class="text-cyan text-decoration-none">Privacy policy</router-link>
    </v-card-text>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'

const selectableItems = ref([
  `first time`,
  `Today i'm deciding to follow Jesus`,
  `I'm interested to getting baptized`,
  `Class 101`,
  `How church can help me grow`,
  `Join a small group`,
  `Consultation with psychologist`,
  `How can we pray for you?`,
  `Feedback`,
])

const selectInput = ref([])
const textareaInput = ref(null)

const submitForm = () => {
  console.log(selectInput.value)
  console.log(textareaInput.value)
}
</script>