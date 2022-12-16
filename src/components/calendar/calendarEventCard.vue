<template>
  <v-card variant="outlined" :title="eventTitle" :append-icon="mdi-account" :text="eventText" >
    <v-card-actions>
      <VSpacer />
      <v-btn @click="$emit('signToEvent')">Записаться</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
/* eslint-disable */
defineProps({
  eventTitle: {
    type: String,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
  },
  eventText: {
    type: String,
    required:false,
  }
})
defineEmits(['signToEvent'])
</script>