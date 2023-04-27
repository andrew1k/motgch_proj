<template>
    <v-slide-group v-model="model" selected-class="bg-primary" center-active>
        <StoryCreationCard v-if="isAdmin"/>
        <v-slide-group-item v-if="isPending">
            <v-card height="120" width="100" class="ma-2">
                <VSkeletonLoader />
            </v-card>
            <v-card height="120" width="100" class="ma-2">
                <VSkeletonLoader />
            </v-card>
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
import {useAppState} from '@/stores/appState'

const newsfeedStore = useNewsfeedStore()
const {getStories} = newsfeedStore
const {stories} = storeToRefs(newsfeedStore)

const appState = useAppState()
const {isPending} = storeToRefs(appState)

onBeforeMount(() => {
  getStories()
})

const model = ref(null)
const {isAdmin} = useAuthStore()
</script>