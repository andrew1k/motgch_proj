<template>
  <v-card-title class="mt-6">Жизнь церкви</v-card-title>
  <NewsCreationCard v-if="isAdmin" />
<!--                                            Skeleton Cards                -->
    <v-card class="ma-2" v-if="isPending">
        <v-container class="ma-0 pa-0">
            <v-row>
                <v-col cols="4">
                    <v-card elevation="0">
                        <VSkeletonLoader type="image" />
                    </v-card>
                </v-col>
                <v-col cols="8" class="d-flex flex-column">
                    <VSkeletonLoader type="list-item" />
                </v-col>
            </v-row>
        </v-container>
    </v-card>
    <v-card class="ma-2" v-if="isPending">
        <v-container class="ma-0 pa-0">
            <v-row>
                <v-col cols="4">
                    <v-card elevation="0">
                        <VSkeletonLoader type="image" />
                    </v-card>
                </v-col>
                <v-col cols="8" class="d-flex flex-column">
                    <VSkeletonLoader type="list-item" />
                </v-col>
            </v-row>
        </v-container>
    </v-card>
<!--                                             News Cards                  -->
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
import {useAppState} from '@/stores/appState'

const newsfeedStore = useNewsfeedStore()
const {getNews} = newsfeedStore
onBeforeMount(() => {
  getNews()
})

const {news} = storeToRefs(newsfeedStore)
const {isAdmin} = useAuthStore()

const appState = useAppState()
const {isPending} = storeToRefs(appState)
</script>