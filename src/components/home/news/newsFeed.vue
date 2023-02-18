<template>
  <v-card-title class="mt-6">Новости церкви</v-card-title>
  <NewsCreationCard v-if="isAdmin" />
  <news-card
    v-for="item in news"
    :key="item.id"
    :title="item.title"
    :subtitle="item.subtitle"
    :img="item.url"
    :text="item.text"
  >
    <template #deleteBtnSpace>
      <v-btn variant="flat" @click="deleteNewsItem(item.id)">Удалить</v-btn>
    </template>
  </news-card>
</template>

<script setup>
import NewsCard from '@/components/home/news/newsCard.vue'
import NewsCreationCard from '@/components/home/news/newsCreationCard.vue'
import {useNewsfeedStore} from '@/stores/newsfeedStore'
import {storeToRefs} from 'pinia'
import {useAuthStore} from '@/stores/authStore'
import {onBeforeMount} from 'vue'

const newsfeedStore = useNewsfeedStore()
const {getNews, deleteNewsItem} = newsfeedStore
onBeforeMount(() => {
  getNews()
})

const {news} = storeToRefs(newsfeedStore)

const {isAdmin} = useAuthStore()
</script>