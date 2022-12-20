<template>
  <Calendar
    :columns="$screens({ default: 1, lg: 2 })"
    :rows="$screens({ default: 1, lg: 2 })"
    is-expanded
    :min-date="new Date()"
    :attributes="attrs"
    locale="ru"
  />
</template>

<script setup>

import {Calendar} from 'v-calendar'
import {ref} from 'vue'
import {useCalendarEventsStore} from '@/stores/calendarEventsStore'

const {allCalEvnts} = useCalendarEventsStore()


let attrs = ref([])
allCalEvnts.map(evnt => {
  attrs.value.push({
    key: evnt.id,
    dates: evnt.start,
    dot: evnt.color,
    popover: {
      label: evnt.title,
      visibility: 'hover',
      hideIndicator: true,
    }
  })
})
</script>