<template>
  <v-card
    class="ma-2"
    color="surface"
    rounded="pill"
    @click="show = !show"
  >
    <v-card-actions>
      <VCardItem :title="title" :subtitle="show ? subtitle : null"/>
      <VSpacer />
      <VIcon class="mx-3" :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
    </v-card-actions>
  </v-card>
  <v-expand-transition>
    <v-card
      v-show="show"
      variant="text"
      elevation="0"
      class="mx-2"
    >
      <VCardText v-text="text"/>
    </v-card>
  </v-expand-transition>
</template>

<script setup>
import {defineProps, ref} from 'vue'

const show = ref(false)
defineProps({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  text: {
    type: String,
  },
})
</script>