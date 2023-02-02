<template>
  <VCheckbox
    :label="checkTitle"
    :value="checkValue"
    :color="checkColor"
    v-model="checked"
    class="pa-0"
    density="compact"
    hide-details
  />
  <v-expand-transition>
    <v-card
      v-show="checked"
      variant="text"
      elevation="0"
    >
      <slot name="bottomCard" />
    </v-card>
  </v-expand-transition>
</template>

<script setup>
import {defineProps, ref} from 'vue'

const checked = ref(false)

defineProps({
  checkTitle: {
    type: String,
  },
  checkValue: {
    type: String,
  },
  checkColor: {
    type: String,
  },
})
</script>