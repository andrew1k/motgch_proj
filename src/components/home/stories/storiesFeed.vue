<template>
  <StoryCreationCard v-if="isAdmin" />
  <v-slide-group selected-class="bg-primary">
    <v-slide-group-item
      v-for="story in stories"
      :key="story.id"

    >
      <StoryCard :prev-img="story.previewImgUrl" />
    </v-slide-group-item>
  </v-slide-group>
</template>

<script setup>
import StoryCreationCard from '@/components/home/stories/storyCreationCard.vue'
import { useAuthStore } from '@/stores/authStore'
import { useNewsfeedStore } from '@/stores/newsfeedStore'
import {storeToRefs} from 'pinia'
import {onBeforeMount} from 'vue'
import StoryCard from '@/components/home/stories/storyCard.vue'

const { isAdmin } = useAuthStore()
const newsfeedStore = useNewsfeedStore()

const {getStories} = newsfeedStore
const {stories} = storeToRefs(newsfeedStore)

onBeforeMount(() => {
  getStories()
})
</script>