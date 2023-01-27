<template>
  <Calendar
    :columns="$screens({ default: 1, lg: 2 })"
    :rows="$screens({ default: 1, lg: 2 })"
    is-expanded
    :attributes="attrs"
    locale="ru"
  />

</template>

<script setup>
import {Calendar} from 'v-calendar'
import {ref} from 'vue'
import {useCalendarEventsStore} from '@/stores/calendarStore'
import {storeToRefs} from 'pinia'

const calendarEventsStore = useCalendarEventsStore()
const {allCalendarEvents} = storeToRefs(calendarEventsStore)
const {getCalendarEvents} = calendarEventsStore
getCalendarEvents()

let attrs = ref([])
allCalendarEvents.value.map(evnt => {
  attrs.value.push({
    key: evnt.id,
    dates: evnt.start,
    dot: evnt.color,
    popover: {
      label: evnt.title,
      visibility: 'click',
      hideIndicator: true,
    },
  })
})
</script>