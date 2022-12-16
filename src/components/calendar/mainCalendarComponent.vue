<template>
  <v-card-actions>
    <v-btn @click="changeToMonthView">Месяц</v-btn>
    <v-btn @click="changeToDayView">День</v-btn>
    <vSpacer/>
    <vBtn icon="mdi-chevron-left" size="sm" @click="changeViewToLeft"/>
    <vBtn icon="mdi-chevron-down" size="sm" @click="changeViewToNow"/>
    <vBtn icon="mdi-chevron-right" size="sm" @click="changeViewToRight"/>
  </v-card-actions>
  <full-calendar ref="fCalendar" :options="calendarOptions" />
</template>

<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import ruLocale from '@fullcalendar/core/locales/ru'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import {computed, onBeforeMount, reactive} from 'vue'
import store from '@/store'

onBeforeMount(() => {
  store.dispatch('calendar/getEvents')
})

const calendarOptions = reactive({
  plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
  initialView: 'dayGridMonth',
  height: 'auto',
  fixedWeekCount: false,
  locale: ruLocale,
  events: computed(() => store.state.calendar.events),
  headerToolbar: false,
  eventClick(arg)  {
    // console.log(arg.event.extendedProps.text) // text
    // console.log(arg.event.title) // title
    // console.log(arg.event.allDay) // allDay
    console.log(arg.event.id) // id
  },
  // dateClick(arg) {
  //   console.log(arg)
  // },
})





</script>
<script>
export default {
  methods: {
    changeToMonthView() {
      let calendarApi = this.$refs.fCalendar.getApi()
      calendarApi.changeView('dayGridMonth')
    },
    changeToDayView() {
      let calendarApi = this.$refs.fCalendar.getApi()
      calendarApi.changeView('listDay')
    },
    changeViewToLeft() {
      let calendarApi = this.$refs.fCalendar.getApi()
      calendarApi.prev()
    },
    changeViewToNow() {
      let calendarApi = this.$refs.fCalendar.getApi()
      calendarApi.today()
    },
    changeViewToRight() {
      let calendarApi = this.$refs.fCalendar.getApi()
      calendarApi.next()
    },
  },
}
</script>