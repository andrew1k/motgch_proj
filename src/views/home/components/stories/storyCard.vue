<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    eager
  >
    <template v-slot:activator="{ props }">
      <VCard
        class="ma-2 d-flex align-end"
        height="120"
        width="100"
        v-bind="props"
        :image="prevImg"
      >
        <h6 class="text-white ma-2" v-text="title"/>
      </VCard>
    </template>
    <v-card rounded="0" elevation="0">
      <v-toolbar color="surface" density="compact">
        <v-btn @click="dialog = false" prepend-icon="mdi-close">Закрыть</v-btn>
      </v-toolbar>
      <v-card-text class="ma-10">
        <v-card class="mx-auto" max-width="600">
          <v-carousel hide-delimiters progress="secondary" height="">
            <template v-slot:prev="{ props }">
              <VBtn variant="text" icon="mdi-chevron-left" @click="props.onClick"/>
            </template>
            <template v-slot:next="{ props }">
              <VBtn variant="text" icon="mdi-chevron-right" @click="props.onClick"/>
            </template>
            <v-carousel-item
              v-for="(img, i) in storyImgs"
              :key="i"
              cover
            >
              <v-img :src="img._storyImgUrl" :lazy-src="img._storyImgUrl">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <VProgressCircular indeterminate/>
                  </v-row>
                </template>
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import {defineProps, ref} from 'vue'

defineProps({
  title: {
    type: String,
    required: false,
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
// const progressValue = ref(0)
// const openDialog = () => {
//   dialog.value = true
//   setTimeout(() => dialog.value = false, props.storyImgs.length * 6 * 1000)
//   setInterval(() => {
//     progressValue.value++
//   }, props.storyImgs.length*6*10)
//   progressValue.value = 0
// }
</script>