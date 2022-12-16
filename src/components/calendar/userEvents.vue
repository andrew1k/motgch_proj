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
<!--  <v-list lines="three" density="comfortable">-->
<!--    <v-list-item-->
<!--      v-for="event in events"-->
<!--      :key="event.id"-->
<!--    >-->
<!--      <v-list-item-action>-->
<!--        <v-list-item-title>{{ event.title }}</v-list-item-title>-->
<!--      <VSpacer/>-->
<!--      <v-btn @click="signToEvent(event)" variant="text">Sign in</v-btn>-->
<!--    </v-list-item-action>-->
<!--      <v-list-item-subtitle>{{event.start}}</v-list-item-subtitle>-->
<!--      {{event.text}}-->
<!--      <VDivider/>-->
<!--    </v-list-item>-->
<!--  </v-list>-->
</template>

<script setup>
import {computed} from 'vue'
import store from '@/store'

const signToEvent = (event) => {
  console.log(event.id)
}

const events = computed(() => store.state.calendar.events)
</script>