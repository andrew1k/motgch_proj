<template>
    <v-card class="ma-2" @click="show = !show">
      <v-img :src="img" class="align-end">
        <VCardTitle class="text-white" v-text="title"/>
      </v-img>
      <v-card-actions>
        <VCardTitle v-text="subtitle"/>
        <VSpacer/>
        <VIcon class="mx-4" :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"/>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <VDivider />
          <v-card-text>{{text}}</v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
</template>

<script setup>
import {ref, defineProps} from 'vue'

const show = ref(false)

defineProps({
  title: {
    type: String,
  },
  img: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  text: {
    type: String,
  },
})
</script>