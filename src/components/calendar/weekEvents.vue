<template>
    <v-list  density="compact">
      <v-list-item
        v-for="evnt in wCalEvnts"
        :key="evnt.id"
        nav
      >
        <v-list-item-action>
          <v-list-item-title>{{ evnt.title }}</v-list-item-title>
        <VSpacer/>
        <v-btn @click="signToEvent(evnt)" variant="text">Sign in</v-btn>
        </v-list-item-action>
        <v-list-item-subtitle>{{evnt.start.slice(0, 10)}}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
</template>

<script setup>
import {useCalendarEventsStore} from '@/stores/calendarEventsStore'

const {wCalEvnts} = useCalendarEventsStore()


const signToEvent = (evnt) => {
  console.log(evnt.id)
}
</script>