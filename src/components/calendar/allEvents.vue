<template>
  <v-card-title v-if="userCalendarEvents.length" class="text-center">Все события в найшей церкви</v-card-title>
  <v-card-title v-if="!userCalendarEvents.length" class="text-center">Пока что нет новых событий</v-card-title>
<!--  <CalendarEventCard -->
<!--    event-id="" -->
<!--    event-time="" -->
<!--    event-title=""-->
<!--  />-->
</template>

<script setup>

// import CalendarEventCard from '@/components/calendar/calendarEventCard.vue'
</script>