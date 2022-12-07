<template>
  <v-card max-width="800" class="mx-auto" variant="text">
    <MainCalendarComponent />
  </v-card>
  <v-card max-width="800" class="mx-auto py-2" variant="text">
    <UserEvents />
  </v-card>
</template>

<script setup>
import MainCalendarComponent from '@/components/calendar/mainCalendarComponent.vue'
import UserEvents from '@/components/calendar/userEvents.vue'
</script>