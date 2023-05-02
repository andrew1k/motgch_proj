<template>
    <v-card class="ma-2" elevation="0" rounded="0" variant="text">
        <VTextField
                class="ma-1"
                v-model="title"
                density="compact"
                label="Описание"
                hide-details
        />
        <VTextField
                class="ma-1"
                v-model="link"
                density="compact"
                label="link"
                hide-details
        />
        <VTextField
                class="ma-1"
                v-model="linkColor"
                density="compact"
                label="linkColor"
                hide-details
        />
        <VTextField
                class="ma-1"
                v-model="linkLabel"
                density="compact"
                label="linkLabel"
                hide-details
        />
        <VFileInput
                class="ma-1"
                variant="outlined"
                clearable
                label="Preview pic"
                hide-details
                density="compact"
                v-model="previewIgm"
        />
        <VFileInput
                class="ma-1"
                variant="outlined"
                multiple
                density="compact"
                clearable
                chips
                hide-details
                label="Story pics"
                v-model="storyImgs"
        />
        <v-card-actions>
            <VSpacer/>
            <v-btn variant="flat" @click="uploadStory(previewIgm, storyImgs, title, link, linkColor, linkLabel)">Upload story</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import {ref} from 'vue'
import {useNewsfeedStore} from '@/stores/newsfeedStore'

const previewIgm = ref(null)
const storyImgs = ref(null)
const title = ref('')
const link = ref('')
const linkColor = ref('')
const linkLabel = ref('')

const {uploadStory} = useNewsfeedStore()
</script>