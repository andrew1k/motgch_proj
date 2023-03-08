<template>
  <VCard
    class="ma-2 d-flex align-end"
    height="150"
    width="100"
    @click="openDialog"
    :image="prevImg"
  >
    <h6 class="text-white ma-2" v-text="title"/>
  </VCard>
  <v-dialog v-model="dialog" fullscreen>
    <v-carousel
      hide-delimiters
      :show-arrows="false"
      class="h-100"
      cycle
    >
<!--      <template v-slot:prev="{ props }">-->
<!--&lt;!&ndash;        <VBtn variant="text" icon="mdi-chevron-left" @click="props.onClick" />&ndash;&gt;-->
<!--      </template>-->
<!--      <template v-slot:next="{ props }">-->
<!--&lt;!&ndash;        <VBtn variant="text" icon="mdi-chevron-right" @click="props.onClick" />&ndash;&gt;-->
<!--      </template>-->
      <v-carousel-item
        v-for="(img, i) in storyImgs"
        :key="i"
        :src="img._storyImgUrl"
      >
        <VProgressLinear :model-value="progressValue" class="w-100" color="secondary"/>
        <VBtn color="white" variant="text" @click="dialog = false" icon="mdi-close" />
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>

<script setup>
import {defineProps, ref} from 'vue'

const props = defineProps({
  title: {
    type: String,
    required:false,
  },
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
const progressValue = ref(0)
const openDialog = () => {
  dialog.value = true
  setTimeout(() => dialog.value = false, props.storyImgs.length * 6 * 1000)
  setInterval(() => {
    progressValue.value++
  }, props.storyImgs.length*6*10)
  progressValue.value = 0
}
</script>