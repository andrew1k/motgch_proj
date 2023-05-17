<template>
  <v-card class="ma-2" :to="{ name: 'newsPage', params: { id }}">
    <v-container class="ma-0 pa-0">
      <v-row>
        <v-col cols="4">
          <v-card elevation="0">
            <VImg :src="img" eager/>
          </v-card>
        </v-col>
        <v-col cols="8" class="d-flex flex-column">
          <VCardTitle class="ma-0 px-0 pt-1" v-text="title"/>
          <v-card-actions class="mx-0 pa-0 mt-auto">
            <v-card-subtitle class="ma-0 pa-0">{{new Date(+id).toLocaleDateString()}}</v-card-subtitle>
            <VSpacer/>
            <VIcon class="mx-3" icon="mdi-chevron-right"/>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
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