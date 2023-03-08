<template>
  <v-card class="ma-2" rounded="xl">
    <CalendarComponent />
  </v-card>
  <AllEvents/>
</template>

<script setup>
import CalendarComponent from '@/views/calendar/components/calendarComponent.vue'
import AllEvents from '@/views/calendar/components/allEvents.vue'

</script>