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
          <v-card-text class="ma-0 px-0">
            <h2 class="mx-3" v-html="title"/>
            <VCardItem :prepend-avatar="leaderUrl" :title="leaderName" subtitle="25 min ago"/>
          </v-card-text>
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