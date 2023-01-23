<template>
  <v-card-title class="text-center">Create Event</v-card-title>
  <v-card class="my-2">
    <VTextField
      class="mt-1"
      density="compact"
      variant="outlined"
      v-model="eventDate"
      label="Date"
      type="date"
    />
    <VTextField
      density="compact"
      variant="outlined"
      v-model="eventTime"
      label="Time"
      type="time"
    />
    <VSelect
      density="compact"
      variant="outlined"
      v-model="eventColor"
      label="Color"
      :items="['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink']"
      :hint="eventColor"
    />
    <VTextField
      density="compact"
      variant="outlined"
      v-model="eventTitle"
      label="Title"
      type="string"
    />
    <VTextField
      density="compact"
      variant="outlined"
      v-model="eventText"
      label="Text"
      type="string"
    />
    <v-card-actions>
      <VSpacer/>
      <v-btn @click="saveEventToDB({eventTitle,eventText,eventDate,eventColor,eventTime})">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import {useCalendarEventsStore} from '@/stores/calendarEventsStore'

const {saveEventToDB} = useCalendarEventsStore()

const eventDate = ref('')
const eventTime = ref('')
const eventColor = ref('gray')
const eventTitle = ref('')
const eventText = ref('')
</script>