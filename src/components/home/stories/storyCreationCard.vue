<template>
  <v-card class="ma-2">
    <VFileInput
      clearable
      variant="solo"
      label="Preview pic"
      hide-details
      class="ma-2"
      v-model="previewIgm"
    />
    <VFileInput
      multiple
      clearable
      chips
      variant="solo"
      class="ma-2"
      hide-details
      label="Story pics"
      v-model="storiesPics"
    />
    <v-card-actions>
      <VSpacer />
      <v-btn variant="flat" >Опубликовать</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'

const previewIgm = ref(null)
const storiesPics = ref(null)
</script>