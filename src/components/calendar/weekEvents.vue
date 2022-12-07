<template>
  <FullCalendar :options="options"/>
</template>

<script setup>
import FullCalendar from '@fullcalendar/vue3'
import listPlugin from '@fullcalendar/list'
import {reactive} from 'vue'
import ruLocale from '@fullcalendar/core/locales/ru'
const options = reactive({
  plugins: [listPlugin],
  headerToolbar: false,
  initialView: 'listWeek',
  locale: ruLocale,
  eventClick: (arg) => {
    console.log(arg)
  }
})
</script>