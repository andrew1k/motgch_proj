<template>
    <v-img :src="img">
        <div class="fill-height bottom-gradient d-flex align-end">
            <VCardTitle class="text-white" v-text="title"/>
        </div>
    </v-img>
    <VCardText v-for="(txt, i) in text" :key="i" v-text="txt"/>
    <v-card-actions>
        <VSpacer/>
        <VBtn :color="color" @click="$emit('togglerBtn')" v-text="btn"/>
    </v-card-actions>
</template>

<script setup>
import {defineProps, defineEmits} from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: Array,
    required: true,
  },
  img: {
    required: true,
  },
  color: {
    type: String,
    default: 'violet',
  },
  btn: {
    type: String,
    required: true,
  },
})
defineEmits(['togglerBtn'])
</script>

<style scoped>
.bottom-gradient {
    background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.7) 0%,
            transparent 90px
    );
}
</style>