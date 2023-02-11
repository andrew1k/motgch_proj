<template>
  <VCard
    :class="['ma-2',]"
    height="100"
    width="100"
    @click="dialog = !dialog"
    :image="prevImg"
  />
  <v-dialog v-model="dialog" fullscreen>
    <v-card rounded="0">
      <v-card-actions>
        <VBtn icon="mdi-close" @click="dialog = !dialog"/>
      </v-card-actions>
      <v-card-title>dialog dfasdfasdfasdfasd sdafasdf</v-card-title>
    </v-card>
  </v-dialog>
</template>

<script setup>
import {defineProps, ref} from 'vue'

const dialog = ref(false)

defineProps({
  prevImg: {
    required: true,
    type: String,
  },
})
</script>