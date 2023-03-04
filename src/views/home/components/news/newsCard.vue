<template>
  <router-link :to="{ name: 'newsPage', params: { id }}" class="text-decoration-none">
    <v-card class="ma-2">
      <div class="d-flex">
        <div>
          <v-avatar size="125" rounded="xl" class="ma-2">
            <VImg :src="img"/>
          </v-avatar>
        </div>
        <div class="d-flex flex-column">
          <VCardTitle class="align-start" v-html="title" />
          <VCardItem class="mt-auto" :prepend-avatar="leaderUrl" :title="leaderName" subtitle="21.02 в 12:30"/>
        </div>
      </div>
    </v-card>
  </router-link>
</template>

<script setup>
import {defineProps} from 'vue'

defineProps({
  title: {
    type: String,
  },
  img: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  leaderName: {
    type: String,
  },
  leaderUrl: {
    type: String,
  },
})
</script>