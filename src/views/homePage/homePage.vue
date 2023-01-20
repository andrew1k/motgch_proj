<!--<template>-->
<!--  <v-card max-width="1000" class="mx-auto pa-1" variant="text">-->
<!--    <v-row>-->
<!--      <v-col cols="12" sm="12" md="8">-->
<!--        <v-card flat max-width="800" class="mx-auto" variant="text">-->
<!--          <WeekEvents v-if="wCalEvnts"/>-->
<!--          <UiSpinner v-else/>-->
<!--        </v-card>-->
<!--      </v-col>-->
<!--      <v-col cols="12" sm="12" md="4">-->
<!--        <v-card variant="text">-->
<!--          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi explicabo molestias mollitia placeat quo rem-->
<!--          sint sit velit veritatis vero?-->
<!--        </v-card>-->
<!--      </v-col>-->
<!--    </v-row>-->
<!--    <v-row class="px-2">-->
<!--      <v-col-->
<!--        class="pa-1"-->
<!--        cols="6"-->
<!--        v-for="card in cardsOnHomePage"-->
<!--        :key="card.cardRoute"-->
<!--      >-->
<!--        <v-card-->
<!--          class="py-2 text-black"-->
<!--          flat-->
<!--          :to="card.cardRoute"-->
<!--          :color="card.cardColor"-->
<!--          :append-icon="card.cardIcon"-->
<!--          :subtitle="card.cardName"-->
<!--        >-->
<!--        </v-card>-->
<!--      </v-col>-->
<!--    </v-row>-->
<!--  </v-card>-->
<!--</template>-->

<!--<script setup>-->
<!--import {ref} from 'vue'-->
<!--import WeekEvents from '@/components/calendar/weekEvents.vue'-->
<!--import {useCalendarEventsStore} from '@/stores/calendarEventsStore'-->
<!--import UiSpinner from '@/components/ui/uiSpinner.vue'-->

<!--const {wCalEvnts} = useCalendarEventsStore()-->


<!--const cardsOnHomePage = ref([-->
<!--  {-->
<!--    cardName: 'Sunday',-->
<!--    cardIcon: 'mdi-broadcast',-->
<!--    cardRoute: '/sunday',-->
<!--    cardColor: 'info',-->
<!--  }, {-->
<!--    cardName: 'Connection',-->
<!--    cardIcon: 'mdi-human-greeting',-->
<!--    cardRoute: '/connection',-->
<!--    cardColor: 'success',-->
<!--  }, {-->
<!--    cardName: 'Notes',-->
<!--    cardIcon: 'mdi-note',-->
<!--    cardRoute: '/myNotes',-->
<!--    cardColor: 'primary',-->
<!--  }, {-->
<!--    cardName: 'Giving',-->
<!--    cardIcon: 'mdi-hand-heart',-->
<!--    cardRoute: '/givingCard',-->
<!--    cardColor: 'warning',-->
<!--  }, {-->
<!--    cardName: 'Calendar',-->
<!--    cardIcon: 'mdi-calendar',-->
<!--    cardRoute: '/calendar',-->
<!--    cardColor: 'brown',-->
<!--  }, {-->
<!--    cardName: 'Discover',-->
<!--    cardIcon: 'mdi-compass',-->
<!--    cardRoute: '/discover',-->
<!--    cardColor: 'error',-->
<!--  },-->
<!--])-->

<!--</script>-->

<template>
  <v-card max-width="1000" class="mx-auto pa-1" variant="text">
    <v-card-title>Some welcome text</v-card-title>
  </v-card>
  <v-card max-width="1000" class="mx-auto my-1">
    <SundayPage />
  </v-card>
  <v-card max-width="1000" class="mx-auto my-1">
    <ConnectionCard />
  </v-card>
</template>

<script setup>
import SundayPage from '@/components/forHomePage/sundayPage.vue'
import ConnectionCard from '@/components/forHomePage/connectionCard.vue'
</script>