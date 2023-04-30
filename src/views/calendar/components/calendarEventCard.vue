<template>
  <v-card
    class="mx-1 my-2"
    :elevation="show ? 0 : 4"
    rounded="pill"
    @click="show = !show"
  >
    <v-card-actions>
      <VIcon :icon="eventIcon" :color="eventColor" class="ml-2" />
      <VCardItem :title="eventTitle" :subtitle="show ? `${eventTime.slice(0,10)}  в ${eventTime.slice(11)}`  : null" />
    <VSpacer/>
      <v-chip v-if="signedEventsIds.includes(eventId)" rounded="pill" color="success" >вы записаны</v-chip>
    <VIcon class="mx-2" :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
  </v-card-actions>
  </v-card>
  <v-expand-transition>
    <v-card
      v-show="show"
      variant="text"
      elevation="0"
      class="mx-2"
    >
      <VCardText v-html="eventText" />
      <v-card-actions class="mx-2">
        <VSpacer />
        <slot name="deleteBtnSpace"/>
        <v-btn color="secondary" v-if="!signedEventsIds.includes(eventId)" variant="outlined" @click="$emit('signBtn')">Записаться</v-btn>
        <v-btn color="error" v-if="signedEventsIds.includes(eventId)" variant="outlined" @click="$emit('unsignBtn')">Отменить запись</v-btn>
      </v-card-actions>
    </v-card>
  </v-expand-transition>
</template>

<script setup>
import {ref, defineProps, defineEmits} from 'vue'
import {useAuthStore} from '@/stores/authStore'
import {storeToRefs} from 'pinia'
const authStore = useAuthStore()
const {signedEventsIds} = storeToRefs(authStore)

const show = ref(false)
defineProps({
  eventTitle: {
    type: String,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
  },
  eventText: {
    type: String,
    required:false,
  },
  eventColor: {
    type: String,
  },
  eventId: {
    type: Number,
    required: true
  },
  eventIcon: {
    type: String,
  }
})

defineEmits(['signBtn', 'unsignBtn'])
</script>