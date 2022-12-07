<template>
  <v-card max-width="1000" class="mx-auto pa-1" variant="text">
    <v-row>
      <v-col cols="12" sm="12" md="8">
        <v-card flat max-width="800" class="mx-auto" variant="text">
            <WeekEvents />
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <v-card flat>
          <v-responsive :aspect-ratio="4">
            Question of the Day or Daily Verse
          </v-responsive>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="px-2">
      <v-col
        class="pa-1"
        cols="6"
        v-for="card in cardsOnHomePage"
        :key="card.cardRoute"
      >
        <v-card
          class="py-2 text-black"
          flat
          :to="card.cardRoute"
          :color="card.cardColor"
          :append-icon="card.cardIcon"
          :subtitle="card.cardName"
        >
        </v-card>
      </v-col>
    </v-row>

  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import WeekEvents from '@/components/calendar/weekEvents.vue'

const cardsOnHomePage = ref([
  {
    cardName: 'Sunday',
    cardIcon: 'mdi-broadcast',
    cardRoute: '/sunday',
    cardColor: 'info',
  }, {
    cardName: 'Connection',
    cardIcon: 'mdi-human-greeting',
    cardRoute: '/connection',
    cardColor: 'success',
  }, {
    cardName: 'Notes',
    cardIcon: 'mdi-note',
    cardRoute: '/myNotes',
    cardColor: 'primary',
  }, {
    cardName: 'Giving',
    cardIcon: 'mdi-hand-heart',
    cardRoute: '/givingCard',
    cardColor: 'warning',
  }, {
    cardName: 'Calendar',
    cardIcon: 'mdi-calendar',
    cardRoute: '/calendar',
    cardColor: 'brown',
  }, {
    cardName: 'Discover',
    cardIcon: 'mdi-compass',
    cardRoute: '/discover',
    cardColor: 'error',
  },
])

</script>