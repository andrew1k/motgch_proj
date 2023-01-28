<template>
  <v-card-title v-if="userCalendarEvents.length" class="text-center">События на которые вы записаны</v-card-title>
  <v-card-title v-if="!userCalendarEvents.length" class="text-center">Нет событий, на которые вы записаны</v-card-title>
  <CalendarEventCard
    v-for="evnt in userCalendarEvents"
    :key="evnt.id"
    :event-title="evnt.title"
    :event-text="evnt.text"
    :event-time="evnt.start"
    :event-color="evnt.color"
    :event-id="evnt.id"
    @unsign-btn="unsignToEvent(evnt)"
  />
</template>

<script setup>
import {useCalendarEventsStore} from '@/stores/calendarStore'
import {storeToRefs} from 'pinia'
import CalendarEventCard from '@/components/calendar/calendarEventCard.vue'
const calendarEventsStore = useCalendarEventsStore()
const { userCalendarEvents } = storeToRefs(calendarEventsStore)
const { getUserEvents, unsignToEvent } = calendarEventsStore
getUserEvents()
</script>