<template>
  <v-card-text>user</v-card-text>
  <v-card
    v-for="event in allCalEvnts"
    :key="event.id"
    variant="outlined"
    :title="event.title"
    :subtitle="event.start.slice(0, 10)"
    :text="event.text"
  >
    <v-card-actions>
      <VSpacer />
      <v-btn @click="signToEvent(event)">Октрыть</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {useCalendarEventsStore} from '@/stores/calendarEventsStore'

const {allCalEvnts} = useCalendarEventsStore()


const signToEvent = (event) => {
  console.log(event.id)
}

</script>