<template>
  <StoriesFeed />
  <SundayCard/>
  <WeekEvents/>
  <NewsFeed />
</template>

<script setup>
import SundayCard from '@/components/home/sundayCard.vue'
import WeekEvents from '@/components/calendar/weekEvents.vue'
import NewsFeed from '@/components/home/news/newsFeed.vue'
import StoriesFeed from '@/components/home/stories/storiesFeed.vue'
</script>