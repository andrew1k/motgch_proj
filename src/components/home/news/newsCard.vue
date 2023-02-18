<template>
  <v-card class="ma-2" >
    <v-img :src="img" class="align-end" @click="show = !show">
      <VCardTitle class="text-white" v-text="title"/>
    </v-img>
    <v-card-actions @click="show = !show">
      <VCardTitle v-text="subtitle" />
      <VSpacer/>
      <VIcon class="mx-4" :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"/>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <VDivider/>
        <v-card-text>{{ text }}</v-card-text>
        <v-card-actions>
          <VSpacer />
          <slot name="deleteBtnSpace"/>
        </v-card-actions>
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