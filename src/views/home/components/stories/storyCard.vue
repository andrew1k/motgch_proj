<template>
    <v-dialog
            v-model="dialog"
            fullscreen
            eager
            transition="dialog-top-transition"
    >
        <template v-slot:activator="{ props }">
            <v-card
                    class="my-2 mx-1"
                    height="130"
                    width="110"
                    v-bind="props"
                    :image="prevImg"
                    :color="color"
                    :variant="color ? 'outlined' : 'elevated'"
                    elevation="3"
            >
                <div class="fill-height bottom-gradient d-flex align-end">
                    <h4 class="text-white ma-2" v-text="title"/>
                </div>
            </v-card>
        </template>
        <v-card rounded="0" class="bg-transparent" elevation="0">

            <v-card-text class="mt-9">
                <v-card class="mx-auto" max-width="600">
                    <v-toolbar color="surface" density="compact">
                        <v-btn @click="dialog = false" :color="linkColor" prepend-icon="mdi-close">Закрыть</v-btn>
                        <VSpacer/>
                        <v-btn :color="linkColor" variant="tonal" v-if="linkLabel" :to="link">{{ linkLabel }}</v-btn>
                    </v-toolbar>
                    <v-carousel hide-delimiters :progress="storyImgs.length > 1 ? linkColor : false" height="">

                        <template v-slot:prev="{ props }">
                            <VBtn variant="text" size="x-large" icon="mdi-chevron-left" class="ml-n6"
                                  @click="props.onClick"/>
                        </template>
                        <template v-slot:next="{ props }">
                            <VBtn variant="text" size="x-large" icon="mdi-chevron-right" class="mr-n6"
                                  @click="props.onClick"/>
                        </template>
                        <v-carousel-item
                                v-for="(img, i) in storyImgs"
                                :key="i"
                                cover
                        >
                            <v-img :src="img._storyImgUrl" eager>
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
  color: {
    required: false,
    type: String,
  },
  link: {
    required: false,
    type: String,
  },
  linkLabel: {
    required: false,
    type: String,
  },
  linkColor: {
    required: false,
    default: 'secondary',
    type: String,
  },
})

const dialog = ref(false)
</script>

<style scoped>
.bottom-gradient {
    background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.5) 0%,
            transparent 120px
    );
}
</style>