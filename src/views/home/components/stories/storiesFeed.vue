<template>
  <v-slide-group v-model="model" selected-class="bg-primary" center-active>
    <v-slide-group-item
      v-for="story in stories"
      :key="story.id"
      v-slot="{ isSelected, toggle, selectedClass }"
    >
      <v-card
        class="ma-2 d-flex align-end"
        :class="[selectedClass]"
        :width="isSelected ? 300 : 100"
        :height="isSelected ? 450 : 150"
        :image="story.previewImgUrl"
        @click="toggle"
      >
          <h5 class="text-white ma-2" v-text="story.title" v-if="!isSelected"/>
      </v-card>
      <!--      <StoryCard :title="story.title" :prev-img="story.previewImgUrl" :story-imgs="story.storyImages" />-->
    </v-slide-group-item>
  </v-slide-group>
  {{ model }}
</template>

<script setup>
import {useNewsfeedStore} from '@/stores/newsfeedStore'
import {storeToRefs} from 'pinia'
import {onBeforeMount, ref} from 'vue'
// import StoryCard from '@/views/home/components/stories/storyCard.vue'

const newsfeedStore = useNewsfeedStore()
const {getStories} = newsfeedStore
const {stories} = storeToRefs(newsfeedStore)

onBeforeMount(() => {
  getStories()
})

const model = ref(null)
</script>