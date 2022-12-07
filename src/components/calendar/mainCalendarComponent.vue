<template>
  <v-card-title>Calendar</v-card-title>
  <v-card-actions>
    <v-btn @click="changeToMonthView">Месяц</v-btn>
    <v-btn @click="changeToDayView">День</v-btn>
    <vSpacer/>
    <vBtn icon="mdi-chevron-left" size="sm" @click="changeViewToLeft"/>
    <vBtn icon="mdi-chevron-down" size="sm" @click="changeViewToNow"/>
    <vBtn icon="mdi-chevron-right" size="sm" @click="changeViewToRight"/>
  </v-card-actions>
  <full-calendar ref="fCalendar" :options="calendarOptions"/>
</template>

<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import ruLocale from '@fullcalendar/core/locales/ru'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import {computed, onBeforeMount, reactive, ref} from 'vue'
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
  editable: true,
  selectable: true,
  events: null,
  headerToolbar: false,
  select: (arg) => {
    const cal = arg.view.calendar
    cal.unselect()
    const id = ref(Date.now())
    cal.addEvent({
      id: id.value,
      title: `event ${id.value}`,
      text: `some text`,
      start: arg.start,
      end: arg.end,
      allDay: true,
    })
  },
  // select: (arg) => {
  //   console.log(arg.startStr + ' ' + arg.endStr)
  // },
  // eventClick: (arg) => {
  //   console.log(arg.event)
  // },
})


const calendarEvents = ref(computed(() => store.getters['calendar/getEvents']))
calendarOptions.events = Object.keys(calendarEvents.value).map(key => {
  return {...calendarEvents.value[key]}
})
console.log(calendarOptions.events)

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