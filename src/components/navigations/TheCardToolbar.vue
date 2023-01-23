<template>
  <v-toolbar density="comfortable" elevation="0" :color="toolbarColor">
    <v-btn prepend-icon="mdi-chevron-left"  @click="$router.back()">{{ toolbarTitle }}</v-btn>
    <VSpacer />
    <slot name="rightSpace"></slot>
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
    default: 'white'
  }
})
</script>