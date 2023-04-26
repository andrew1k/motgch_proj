<template>
    <v-slide-group v-model="model" selected-class="bg-primary" center-active>
        <v-slide-group-item>
            <StoryCreationCard v-if="isAdmin"/>
        </v-slide-group-item>
        <v-slide-group-item
                v-for="story in stories"
                :key="story.id"
        >
            <StoryCard :title="story.title" :link="story.link" :link-label="story.linkLabel"
                       :prev-img="story.previewImgUrl" :story-imgs="story.storyImages" :color="story.color"/>
        </v-slide-group-item>
    </v-slide-group>
</template>

<script setup>
import {useNewsfeedStore} from '@/stores/newsfeedStore'
import {storeToRefs} from 'pinia'
import {onBeforeMount, ref} from 'vue'
import StoryCard from '@/views/home/components/stories/storyCard.vue'
import StoryCreationCard from '@/views/home/components/stories/storyCreationCard.vue'
import {useAuthStore} from '@/stores/authStore'

const newsfeedStore = useNewsfeedStore()
const {getStories} = newsfeedStore
const {stories} = storeToRefs(newsfeedStore)

onBeforeMount(() => {
  getStories()
})

const model = ref(null)
const {isAdmin} = useAuthStore()
</script>