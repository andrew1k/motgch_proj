<template>
  <v-card-title v-if="allCalendarEvents.length" class="mt-4">Все события в найшей церкви</v-card-title>
  <v-card-title v-if="!allCalendarEvents.length" class="mt-4">Пока что нет новых событий</v-card-title>
  <v-card variant="text" elevation="0">
    <v-chip-group
      variant="flat"
      multiple
      v-model="selectedChips"
      filter
      column
      class="mx-2"
    >
      <v-chip
        v-for="chip in eventsChips"
        :key="chip.title"
        :color="chip.color"
        :text="chip.title"
        :value="chip.value"
        rounded="pill"
        filter
      ></v-chip>
    </v-chip-group>
  </v-card>
  <CalendarEventCard
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
  />
</template>

<script setup>
import CalendarEventCard from '@/views/calendar/components/calendarEventCard.vue'
import {useCalendarEventsStore} from '@/stores/calendarStore'
import {storeToRefs} from 'pinia'
import {watch, ref} from 'vue'

const calendarEventsStore = useCalendarEventsStore()
const {allCalendarEvents} = storeToRefs(calendarEventsStore)
const filteredEvents = ref([])
const {signToEvent, unsignToEvent} = calendarEventsStore


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
  }, {
    value: 'youth',
    title: 'молодежное',
    color: 'indigo',
  },
])

const selectedChips = ref([])

watch(selectedChips, () => {
  if (selectedChips.value.length) {
    selectedChips.value.forEach(chip => {
      filteredEvents.value = allCalendarEvents.value.filter(evnt => {
        if (evnt.chipValues.includes(chip)) return evnt
      })
    })
  } else {
    filteredEvents.value = allCalendarEvents.value
  }
})

</script>