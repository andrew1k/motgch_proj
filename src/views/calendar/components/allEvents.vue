<template>
  <v-card-title v-if="allCalendarEvents.length" class="mt-4">Все события в найшей церкви</v-card-title>
  <v-card-title v-if="!allCalendarEvents.length" class="mt-4">Пока что нет новых событий</v-card-title>
  <v-card variant="text" elevation="0">
    <v-chip-group
      v-model="selectedChip"
      filter
      class="mx-2 text-center"
    >
      <VChip
        v-for="chip in eventsChips"
        :key="chip.title"
        :color="chip.color"
        :text="chip.title"
        :value="chip.value"
      />
    </v-chip-group>
  </v-card>
  <calendar-event-card
    v-for="evnt in filteredEvents.length ? filteredEvents : allCalendarEvents"
    :key="evnt.id"
    :event-title="evnt.title"
    :event-text="evnt.text"
    :event-time="evnt.start"
    :event-color="evnt.color"
    :event-icon="evnt.icon"
    :event-id="evnt.id"
    @sign-btn="signToEvent(evnt)"
    @unsign-btn="unsignToEvent(evnt)"
  >
    <template #deleteBtnSpace>
      <v-btn prepend-icon="mdi-close" color="error" v-if="isAdmin" variant="flat" @click="deleteEvent(evnt)">
        Delete
      </v-btn>
    </template>
  </calendar-event-card>
</template>

<script setup>
import CalendarEventCard from '@/views/calendar/components/calendarEventCard.vue'
import {useCalendarEventsStore} from '@/stores/calendarStore'
import {storeToRefs} from 'pinia'
import {watch, ref} from 'vue'
import {useAuthStore} from '@/stores/authStore'

const calendarEventsStore = useCalendarEventsStore()
const {allCalendarEvents} = storeToRefs(calendarEventsStore)
const filteredEvents = ref([])
const {signToEvent, unsignToEvent, deleteEvent} = calendarEventsStore
const {isAdmin} = useAuthStore()

const eventsChips = ref([
  {
    value: 'ministry',
    title: 'служение',
    color: 'brown',
  }, {
    value: 'fellowship',
    title: 'общение',
    color: 'orange',
  }, {
    value: 'discepleship',
    title: 'ученичество',
    color: 'green',
  }, {
    value: 'evangelism',
    title: 'благовестие',
    color: 'blue',
  }, {
    value: 'worship',
    title: 'поклонение',
    color: 'red',
  },
  // {
  //   value: 'youth',
  //   title: 'молодежное',
  //   color: 'indigo',
  // }, {
  //   value: 'baptism',
  //   title: 'крещение',
  //   color: 'teal',
  // },
])

const selectedChip = ref([])

watch(selectedChip, () => {
  if (selectedChip.value) {
      filteredEvents.value = allCalendarEvents.value.filter(evnt => {
        if (evnt.chipValues.includes(selectedChip.value)) return evnt
      })
  } else {
    filteredEvents.value = allCalendarEvents.value
  }
})
</script>