<template>
  <v-img :src="img" class="align-end">
    <VCardTitle class="text-white" v-text="title"/>
  </v-img>
  <VCardText v-for="(txt, i) in text" :key="i" v-text="txt"/>
  <v-card-actions>
    <VSpacer/>
    <VBtn variant="flat" elevation="0"  :color="color" @click="$emit('togglerBtn')" v-text="btn"/>

  </v-card-actions>
</template>

<script setup>
import {defineProps, defineEmits} from 'vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: Array,
    required: true
  },
  img: {
    required: true
  },
  color: {
    type:String,
    default: 'violet'
  },
  btn: {
    type: String,
    required: true
  }
})
defineEmits(['togglerBtn'])
</script>