<template>
  <StoriesFeed />
  <SundayCard/>
  <WeekEvents/>
  <NewsFeed />
</template>

<script setup>
import SundayCard from '@/views/home/components/sunday/sundayCard.vue'
import WeekEvents from '@/views/calendar/components/weekEvents.vue'
import NewsFeed from '@/views/home/components/news/newsFeed.vue'
import StoriesFeed from '@/views/home/components/stories/storiesFeed.vue'
</script>