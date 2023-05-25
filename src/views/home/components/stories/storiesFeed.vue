<template>
    <v-card min-height="140" variant="text" elevation="0" rounded="0" class="mx-1">
        <v-slide-group v-if="isPending">
            <v-slide-group-item>
                <v-card height="130" width="110" class="my-2 mx-1">
                    <VSkeletonLoader/>
                </v-card>
                <v-card height="130" width="110" class="my-2 mx-1">
                    <VSkeletonLoader/>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
        <v-scale-transition origin="left center">
            <v-slide-group v-show="!isPending" v-model="model" selected-class="bg-primary" center-active>
                <v-slide-group-item
                        v-for="story in stories"
                        :key="story.id"
                >
                    <StoryCard :title="story.title" :link="story.link" :link-label="story.linkLabel" :link-color="story.linkColor"
                               :prev-img="story.previewImgUrl" :story-imgs="story.storyImages" :color="story.color"/>
                </v-slide-group-item>
            </v-slide-group>
        </v-scale-transition>
    </v-card>
    <StoryCreationCard v-if="isAdmin"/>
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