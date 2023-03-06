<template>
  <v-toolbar density="compact" elevation="0" color="background">
    <v-btn prepend-icon="mdi-chevron-left" :color="toolbarColor" @click="$router.back()">{{ toolbarTitle }}</v-btn>
    <VSpacer />
    <slot name="rightSpace" />
  </v-toolbar>
</template>

<script setup>
import {defineProps} from 'vue'
defineProps({
  toolbarTitle: {
    type: String,
    required: true,
    default: 'Title'
  },
  toolbarColor: {
    type: String,
    default: 'background'
  }
})
</script>