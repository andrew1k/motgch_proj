<template>
  <v-card-title class="mt-6">Жизнь церкви</v-card-title>
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

const newsfeedStore = useNewsfeedStore()
const {getNews} = newsfeedStore
onBeforeMount(() => {
  getNews()
})

const {news} = storeToRefs(newsfeedStore)

</script>