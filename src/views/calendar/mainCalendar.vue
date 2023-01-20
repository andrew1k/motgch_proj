<template>
  <v-card max-width="800" class="mx-auto" variant="text">
    <CalendarComponent />
  </v-card>
  <v-card max-width="800" class="mx-auto py-2" variant="text">
    <v-tabs v-model="tab" >
      <v-tab value="weekEvents">Week</v-tab>
      <v-tab value="userEvents">User</v-tab>
      <v-tab value="allEvents">All</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="weekEvents">
        <WeekEvents />
      </v-window-item>
      <v-window-item value="userEvents">
        <UserEvents />
      </v-window-item>
<!--      <v-window-item value="userEvents">-->
<!--        <UserEvents />-->
<!--      </v-window-item>-->
    </v-window>
  </v-card>
</template>

<script setup>
import UserEvents from '@/components/calendar/userEvents.vue'
import WeekEvents from '@/components/calendar/weekEvents.vue'
import CalendarComponent from '@/components/calendar/calendarComponent.vue'
import {ref} from 'vue'

const tab = ref('weekEvents')
</script>