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
/* eslint-disable */
import {Calendar} from 'v-calendar'
import store from '@/store'
import {computed, ref} from 'vue'

let events = ref(computed(() => store.state.calendar.events))
let attrs = ref([])
events.value.map(evnt => {
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