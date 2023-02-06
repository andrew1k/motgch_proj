<template>
  <v-card variant="text" elevation="0" rounded="0" max-width="600" class="mx-auto">
    <v-card class="ma-2">
      <v-img :src="img" class="align-end">
        <VCardTitle class="text-white" v-text="title"/>
      </v-img>
      <v-card-actions @click="show = !show">
        <VCardText v-text="subtitle"/>
        <VSpacer/>
        <VIcon class="mx-4" :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"/>
        <!--      <VBtn :append-icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show">{{ show ? 'меньше' : 'больше'}}</VBtn>-->
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <VDivider/>
          <VCardText>{{text}}</VCardText>
        </div>
      </v-expand-transition>
    </v-card>
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