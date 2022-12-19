<template>
  <v-card
    v-for="event in events"
    :key="event.id"
    variant="outlined"
    :title="event.title"
    :subtitle="event.start.slice(0, 10)"
    :text="event.text"
  >
    <v-card-actions>
      <VSpacer />
      <v-btn @click="signToEvent(event)">Записаться</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {computed} from 'vue'
import store from '@/store'

const signToEvent = (event) => {
  console.log(event.id)
}

const events = computed(() => store.state.calendar.events)
</script>