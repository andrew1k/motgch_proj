<template>
  <StoryCreationCard v-if="isAdmin" />
  <v-slide-group selected-class="bg-primary">
    <v-slide-group-item
      v-for="n in 5"
      :key="n"
      v-slot="{ isSelected, toggle, selectedClass }"
    >
      <v-card
        color="grey-lighten-1"
        :class="['ma-2', selectedClass]"
        height="100"
        width="100"
        @click="toggle"
      >
        <div class="d-flex fill-height align-center justify-center">
          <v-scale-transition>
            <v-icon
              v-if="isSelected"
              color="white"
              icon="mdi-close-circle-outline"
            ></v-icon>
          </v-scale-transition>
        </div>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'
import StoryCreationCard from '@/components/home/stories/storyCreationCard.vue'
const { isAdmin } = useAuthStore()
</script>