<template>
    <v-card-title class="mt-4" v-text="`Календарь`"/>
    <v-card class="ma-2">
      <CalendarComponent/>
    </v-card>
      <v-tabs v-model="tab" align-tabs="center">
        <v-tab value="allEvents">Все события</v-tab>
        <v-tab value="weekEvents">На неделю</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="allEvents">
          <AllEvents/>
        </v-window-item>
        <v-window-item value="weekEvents">
          <WeekEvents/>
        </v-window-item>
      </v-window>
</template>

<script setup>
import {ref} from 'vue'
import WeekEvents from '@/views/calendar/components/weekEvents.vue'
import CalendarComponent from '@/views/calendar/components/calendarComponent.vue'
import AllEvents from '@/views/calendar/components/allEvents.vue'

const tab = ref('allEvents')
</script>