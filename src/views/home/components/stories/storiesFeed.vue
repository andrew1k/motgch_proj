<template>
    <v-card min-height="140" variant="text" elevation="0" rounded="0">
        <v-slide-group v-if="isPending">
            <v-slide-group-item>
                <v-card height="120" width="100" class="ma-2">
                    <VSkeletonLoader/>
                </v-card>
                <v-card height="120" width="100" class="ma-2">
                    <VSkeletonLoader/>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
        <Transition name="slide-fade" mode="out-in">
            <v-slide-group v-show="!isPending" v-model="model" selected-class="bg-primary" center-active>
                <v-slide-group-item
                        v-for="story in stories"
                        :key="story.id"
                >
                    <StoryCard :title="story.title" :link="story.link" :link-label="story.linkLabel" :link-color="story.linkColor"
                               :prev-img="story.previewImgUrl" :story-imgs="story.storyImages" :color="story.color"/>
                </v-slide-group-item>
            </v-slide-group>
        </Transition>
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

<style scoped>
.slide-fade-enter-active {
    transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(15px);
    opacity: 0;
}
</style>