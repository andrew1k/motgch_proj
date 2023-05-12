<template>
  <v-card-title class="text-center">Создать событие</v-card-title>
  <v-card class="ma-2" variant="text" elevation="0">
    <VTextField
      class="ma-1"
      density="comfortable"
      variant="solo"
      v-model="eventDate"
      label="Дата"
      type="date"
    />
    <VTextField
      class="ma-1"
      density="comfortable"
      variant="solo"
      v-model="eventTime"
      label="Время"
      type="time"
    />
    <VSelect
      class="ma-1"
      density="comfortable"
      variant="solo"
      v-model="eventColor"
      label="Цвет"
      :items="['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink', 'brown']"
    />
    <VTextField
      class="ma-1"
      density="comfortable"
      variant="solo"
      v-model="eventTitle"
      label="Заголовок"
      type="string"
    />
    <VTextField
      class="ma-1"
      density="comfortable"
      variant="solo"
      v-model="eventText"
      label="Текст"
      type="string"
    />
    <VSelect
      v-model="chipValues"
      variant="solo"
      class="ma-1"
      density="comfortable"
      :items="chipItems"
      chips
      label="Принадлежность"
      multiple
    />
    <VSelect
      v-model="chipIcon"
      variant="solo"
      class="ma-1"
      density="comfortable"
      :items="chipIcons"
      chips
      label="Иконка"
    />
    <v-card-actions>
      <VSpacer/>
      <v-btn @click="saveEventToDB({eventTitle,eventText,eventDate,eventColor,eventTime, chipValues, chipIcon})">Создать</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import {useCalendarEventsStore} from '@/stores/calendarStore'

const {saveEventToDB} = useCalendarEventsStore()

const chipItems = ref(['ministry', 'fellowship', 'discepleship', 'evangelism', 'worship', 'youth', 'first', 'second', 'third', 'fourth', 'baptism', 'firstMeeting'])
const chipIcons = ref(['mdi-heart', 'mdi-account-multiple', 'mdi-school', 'mdi-hand-heart', 'mdi-torch', 'mdi-run',])
const chipIcon = ref()
const chipValues = ref([])
const eventDate = ref('')
const eventTime = ref('')
const eventColor = ref('gray')
const eventTitle = ref('')
const eventText = ref('')
</script>