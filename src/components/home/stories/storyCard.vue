<template>
  <VCard
    :class="['ma-2',]"
    height="100"
    width="100"
    @click="openDialog"
    :image="prevImg"
  />
  <v-dialog v-model="dialog" fullscreen >

    <v-carousel
      hide-delimiters
      cycle
      progress="secondary"
      show-arrows="false"
      class="h-screen"
    >

      <template v-slot:prev="{ props }">
        <VBtn variant="text" icon="mdi-chevron-left" @click="props.onClick" />
      </template>
      <template v-slot:next="{ props }">
        <VBtn variant="text" icon="mdi-chevron-right" @click="props.onClick" />
      </template>





      <v-carousel-item
        v-for="(img, i) in storyImgs"
        :key="i"
        :src="img._storyImgUrl"
      >
        <VBtn color="white" variant="text" @click="dialog = false" icon="mdi-close" />
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>

<script setup>
import {defineProps, ref} from 'vue'




const props = defineProps({
  prevImg: {
    required: true,
    type: String,
  },
  storyImgs: {
    required: true,
    type: Array,
  },
})

const dialog = ref(false)
const openDialog = () => {
  dialog.value = true
  setTimeout(() => dialog.value = false, props.storyImgs.length * 6 * 1000)
}
</script>