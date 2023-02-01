<template>
  <v-card max-width="1000" class="mx-auto mt-2 mb-6" variant="text" elevation="0">
    <SundayCard />
    <WeekEvents />
    <PurposesCard />
    <ConnectionCard />
  </v-card>
</template>

<script setup>
import SundayCard from '@/components/home/sundayCard.vue'
import WeekEvents from '@/components/calendar/weekEvents.vue'
import PurposesCard from '@/components/home/purposesCard.vue'
import ConnectionCard from '@/components/home/connectionCard.vue'
</script>