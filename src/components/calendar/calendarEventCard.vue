<template>
  <v-card
    class="ma-2"
    elevation="5"
    @click="show = !show"
    variant="outlined"
    :color="eventColor"
  >
    <v-card-actions>
      <v-card-title class="text-black">{{eventTitle}}</v-card-title>
    <v-spacer></v-spacer>
    <VBtn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
  </v-card-actions>
  </v-card>
  <v-expand-transition>
    <v-card
      v-show="show"
      variant="text"
      class="ma-2 mx-auto"
      max-width="500"
    >
      <v-card-actions>
        <VCardItem :title="eventTitle" :subtitle="eventTime" />
        <VSpacer />
        <v-btn variant="outlined" @click="$emit('signToEvent')">Записаться</v-btn>
      </v-card-actions>
      <VCardText v-text="eventText + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eaque ipsam quisquam, reiciendis sapiente vel.'" />
    </v-card>
  </v-expand-transition>
</template>

<script setup>
import {ref, defineProps, defineEmits} from 'vue'

const show = ref(false)


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
  },
  eventColor: {
    type: String,
  }
})
defineEmits(['signToEvent'])
</script>