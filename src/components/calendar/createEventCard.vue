<template>
  <v-card-title class="text-center">Create Event</v-card-title>
  <v-card class="my-2" variant="text" elevation="0">
    <VTextField
      class="ma-1"
      density="comfortable"
      variant="solo"
      v-model="eventDate"
      label="Date"
      type="date"
    />
    <VTextField
      class="ma-1"
      density="comfortable"
      variant="solo"
      v-model="eventTime"
      label="Time"
      type="time"
    />
    <VSelect
      class="ma-1"
      density="comfortable"
      variant="solo"
      v-model="eventColor"
      label="Color"
      :items="['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink']"
    />
    <VTextField
      class="ma-1"
      density="comfortable"
      variant="solo"
      v-model="eventTitle"
      label="Title"
      type="string"
    />
    <VTextField
      class="ma-1"
      density="comfortable"
      variant="solo"
      v-model="eventText"
      label="Text"
      type="string"
    />
    <VSelect
      v-model="chipValues"
      variant="solo"
      class="ma-1"
      density="comfortable"
      :items="chipItems"
      chips
      label="Chips"
      multiple
    />
    <v-card-actions>
      <VSpacer/>
      <v-btn variant="outlined" @click="saveEventToDB({eventTitle,eventText,eventDate,eventColor,eventTime, chipValues})">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import {useCalendarEventsStore} from '@/stores/calendarStore'

const {saveEventToDB} = useCalendarEventsStore()

const chipItems = ref(['pray', 'ministry', 'fellowship', 'discepleship', 'evangelism', 'worship', 'youth'])
const chipValues = ref([])
const eventDate = ref('')
const eventTime = ref('')
const eventColor = ref('gray')
const eventTitle = ref('')
const eventText = ref('')
</script>