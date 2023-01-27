<template>
  <v-card-title v-if="weekCalendarEvents.length" class="text-center">События на этой неделе</v-card-title>
  <v-card-title v-if="!weekCalendarEvents.length" class="text-center">На этой неделе нет событий</v-card-title>
  <CalendarEventCard
    v-for="evnt in weekCalendarEvents"
    :key="evnt.id"
    :event-title="evnt.title"
    :event-text="evnt.text"
    :event-time="evnt.start"
    :event-color="evnt.color"
    :event-id="evnt.id"
    @sign-btn="signToEvent(evnt)"
  />
</template>

<script setup>
import {useCalendarEventsStore} from '@/stores/calendarStore'
import {storeToRefs} from 'pinia'
import {onBeforeMount} from 'vue'
import CalendarEventCard from '@/components/calendar/calendarEventCard.vue'
const calendarEventsStore = useCalendarEventsStore()
const {getCalendarEvents, signToEvent, } = calendarEventsStore
onBeforeMount(() => {
  getCalendarEvents()
})

const {weekCalendarEvents} = storeToRefs(calendarEventsStore)


</script>