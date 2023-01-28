<template>
  <v-card-title v-if="allCalendarEvents.length" class="text-center">Все события в найшей церкви</v-card-title>
  <v-card-title v-if="!allCalendarEvents.length" class="text-center">Пока что нет новых событий</v-card-title>
  <CalendarEventCard
    v-for="evnt in allCalendarEvents"
    :key="evnt.id"
    :event-title="evnt.title"
    :event-text="evnt.text"
    :event-time="evnt.start"
    :event-color="evnt.color"
    :event-id="evnt.id"
    @sign-btn="signToEvent(evnt)"
    @unsign-btn="unsignToEvent(evnt)"
  >
    <template #deleteBtnSpace>
      <v-btn prepend-icon="mdi-close" color="error" v-if="uid === 'BtjBK22cDLNULFOqNUbLYH2jzCn2'" variant="flat" @click="deleteEvent(evnt)">Delete</v-btn>
    </template>
  </CalendarEventCard>
</template>

<script setup>
import CalendarEventCard from '@/components/calendar/calendarEventCard.vue'
import {useCalendarEventsStore} from '@/stores/calendarStore'
import {storeToRefs} from 'pinia'
import {useAuthStore} from '@/stores/authStore'

const calendarEventsStore = useCalendarEventsStore()
const {allCalendarEvents} = storeToRefs(calendarEventsStore)
const {signToEvent, unsignToEvent, deleteEvent} = calendarEventsStore

const {uid} = useAuthStore()
</script>