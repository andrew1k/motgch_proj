<template>
  <router-link :to="{ name: 'newsPage', params: { id }}">
    <v-card class="ma-2">
      <VImg :src="img" />
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
  }
})
</script>