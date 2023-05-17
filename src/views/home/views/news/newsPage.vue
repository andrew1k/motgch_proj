<template>
    <v-toolbar color="background" density="compact">
        <VBtn variant="text" prepend-icon="mdi-chevron-left" @click="$router.push('/')">Назад</VBtn>
    </v-toolbar>
    <v-card class="ma-2">
        <VImg :src="newsItem?.url"/>
    </v-card>
    <v-card class="ma-2">
        <VCardTitle class="font-weight-bold" v-html="newsItem?.title"/>
        <VCardSubtitle v-html="newsItem?.subtitle"/>
        <component :is="leader"/>
        <VCardText v-html="newsItem?.text"/>
    </v-card>
    <v-card v-if="newsItem?.form" class="ma-2 pa-2" elevation="0" rounded="0" variant="text">
        <FormKit type="form" @submit="sendForm('forms',{...forma}, newsItem.title)" :actions="false" v-model="forma">
            <FormKitSchema :schema="newsItem?.formSchema" />
            <v-card-actions>
                <VSpacer />
                <VBtn type="submit">Отправить</VBtn>
            </v-card-actions>
        </FormKit>
    </v-card>
</template>

<script setup>
import {defineProps, onBeforeMount, computed, ref} from 'vue'
import {useNewsfeedStore} from '@/stores/newsfeedStore'
import {storeToRefs} from 'pinia'
import AlHo from '@/components/leaders/AlHo.vue'
import DaDm from '@/components/leaders/DaDm.vue'
import DmDm from '@/components/leaders/DmDm.vue'
import MBV from '@/components/leaders/MBV.vue'
import ViGo from '@/components/leaders/ViGo.vue'
import TaSt from '@/components/leaders/TaSt.vue'
import AnKo from '@/components/leaders/AnKo.vue'
import {useFormsStore} from '@/stores/formsStore'

const newsfeedStore = useNewsfeedStore()
const {getNewsItem} = newsfeedStore
const {newsItem} = storeToRefs(newsfeedStore)
const props = defineProps({
  id: {
    type: String,
  },
})

onBeforeMount(() => {
    getNewsItem(props.id)
})
let leader = computed(() => {
  switch (newsItem.value?.leader) {
    case 'AlHo' :
      return leader = AlHo
    case 'DaDm':
      return DaDm
    case 'DmDm':
      return DmDm
    case 'ViGo':
      return ViGo
    case 'TaSt':
      return TaSt
    case 'AnKo':
      return AnKo
    default:
      return MBV
  }
})

const forma = ref({})
const { sendForm } = useFormsStore()
</script>