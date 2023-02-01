<template>
  <v-card max-width="800" variant="text" elevation="0" class="mx-auto">
    <v-card-title class="text-center" v-text="`Календарь`"/>
    <v-card class="ma-2" elevation="5" variant="elevated">
      <CalendarComponent/>
    </v-card>
      <v-tabs v-model="tab" align-tabs="center">
        <v-tab value="allEvents">Все события</v-tab>
        <v-tab value="weekEvents">На неделю</v-tab>
        <v-tab v-if="isAdmin" value="createEvent">Creale Event</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="allEvents">
          <AllEvents/>
        </v-window-item>
        <v-window-item value="weekEvents">
          <WeekEvents/>
        </v-window-item>
        <v-window-item value="createEvent">
          <CreateEventCard/>
        </v-window-item>
      </v-window>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import WeekEvents from '@/components/calendar/weekEvents.vue'
import CalendarComponent from '@/components/calendar/calendarComponent.vue'
import CreateEventCard from '@/components/calendar/createEventCard.vue'
import AllEvents from '@/components/calendar/allEvents.vue'
import {useAuthStore} from '@/stores/authStore'

const {isAdmin} = useAuthStore()

const tab = ref('allEvents')
</script>