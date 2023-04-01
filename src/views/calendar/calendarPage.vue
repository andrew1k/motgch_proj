<template>
  <v-card class="ma-2" rounded="xl">
    <CalendarComponent />
  </v-card>
  <CreateEventCard v-if="isAdmin"/>
  <AllEvents/>
</template>

<script setup>
import CalendarComponent from '@/views/calendar/components/calendarComponent.vue'
import AllEvents from '@/views/calendar/components/allEvents.vue'
import CreateEventCard from '@/views/calendar/components/createEventCard.vue'
import {useAuthStore} from '@/stores/authStore'

const {isAdmin} = useAuthStore()
</script>