<template>
    <v-card-title class="mt-2">В это воскресенье</v-card-title>
    <v-card class="ma-2" v-if="isPending" variant="tonal">
        <VResponsive :aspect-ratio="16 / 9"/>
    </v-card>
    <v-scale-transition origin="center center">
        <v-card v-if="!isPending" to="/sunday" class="ma-2">
            <LiteYouTubeEmbed :id="sunday?.id" :title="sunday?.title"/>
        </v-card>
    </v-scale-transition>
    <VSkeletonLoader v-if="isPending" type="list-item-two-line" color="background"/>
    <v-scale-transition origin="left center">
        <v-card-text v-if="!isPending">
            <h4 class="font-weight-light" v-html="sunday?.title"/>
        </v-card-text>
    </v-scale-transition>
  <!--   ----------------------------------------------------------------------------------------------------------------------- Admin tool  -->
    <v-btn class="mx-2" v-if="isAdmin" @click="show = !show">Обновить ВС</v-btn>
    <v-card v-if="show" class="ma-2">
        <VTextField
                class="ma-2"
                v-model="title"
                label="Описание"
                hide-details
        />
        <QuillEditor v-model:content="text" content-type="html" />
        <VTextField
                class="ma-2"
                v-model="id"
                label="ID"
                hide-details
        />
        <v-card-actions>
            <VSpacer/>
            <v-btn @click="updateSunday({text, title, id})">Обновить</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import {useNewsfeedStore} from '@/stores/newsfeedStore'
import {storeToRefs} from 'pinia'
import {ref} from 'vue'
import {useAuthStore} from '@/stores/authStore'
import {useAppState} from '@/stores/appState'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const newsfeedStore = useNewsfeedStore()
const {updateSunday} = newsfeedStore
const {sunday} = storeToRefs(newsfeedStore)

const appState = useAppState()
const {isPending} = storeToRefs(appState)

const title = ref('')
const text = ref('')
const id = ref('')

const {isAdmin} = useAuthStore()
const show = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-fade-enter-active {
    transition: all 0.6s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>