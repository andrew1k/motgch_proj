<template>
  <v-card-title class="mt-6">Жизнь церкви</v-card-title>
  <NewsCreationCard v-if="isAdmin" />
  <NewsCard
    v-for="item in news"
    :key="item.id"
    :title="item.title"
    :img="item.url"
    :leader-name="item.leaderName"
    :leader-url="item.leaderUrl"
    :id="item.id"
  />
</template>

<script setup>
import NewsCard from '@/views/home/components/news/newsCard.vue'
import {useNewsfeedStore} from '@/stores/newsfeedStore'
import {storeToRefs} from 'pinia'
import {onBeforeMount} from 'vue'
import NewsCreationCard from '@/views/home/components/news/newsCreationCard.vue'
import {useAuthStore} from '@/stores/authStore'

const newsfeedStore = useNewsfeedStore()
const {getNews} = newsfeedStore
onBeforeMount(() => {
  getNews()
})

const {news} = storeToRefs(newsfeedStore)
const {isAdmin} = useAuthStore()
</script>