<template>
  <v-card-title class="text-center">События на этой неделе</v-card-title>
  <v-card class="ma-2" v-if="weekCalendarEvents.length === 0" elevation="5">
    <v-card-title class="text-center">На этой неделе нет событий</v-card-title>
  </v-card>
  <CalendarEventCard
    v-for="evnt in weekCalendarEvents"
    :key="evnt.id"
    :event-title="evnt.title"
    :event-text="evnt.text"
    :event-time="evnt.start"
    :event-color="evnt.color"
    @sign-to-event="signToEvent(evnt)"
  />
</template>

<script setup>
import {useCalendarEventsStore} from '@/stores/calendarEventsStore'
import {storeToRefs} from 'pinia'
import {onBeforeMount} from 'vue'
import CalendarEventCard from '@/components/calendar/calendarEventCard.vue'
const calendarEventsStore = useCalendarEventsStore()
const {getCalendarEvents} = calendarEventsStore
onBeforeMount(() => {
  getCalendarEvents()
})

const {weekCalendarEvents} = storeToRefs(calendarEventsStore)

// eslint-disable-next-line no-unused-vars
const signToEvent = (evnt) => {
  console.log(evnt.id)
}
</script>









<!--    :title="evnt.title"-->
<!--    :subtitle="`${evnt.start.slice(0, 10)} В ${evnt.start.slice(11)}`"-->
