<template>
  <v-card max-width="800" class="mx-auto">
    <v-card-actions>
      <v-btn @click="changeToMonthView">Месяц</v-btn>
      <v-btn @click="changeToDayView">День</v-btn>
      <vSpacer/>
      <vBtn icon="mdi-chevron-left" @click="changeViewToLeft"/>
      <vBtn icon="mdi-chevron-down" @click="changeViewToNow"/>
      <vBtn icon="mdi-chevron-right" @click="changeViewToRight"/>
    </v-card-actions>
    <full-calendar ref="fCalendar" :options="calendarOptions"/>
    <v-card-actions>
      <div>Drag Me</div>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import ruLocale from '@fullcalendar/core/locales/ru'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import { reactive } from 'vue'


const calendarOptions = reactive({
  plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
  initialView: 'dayGridMonth',
  locale: ruLocale,
  editable: true,
  selectable: true,
  droppable:true,
  events: [
    {
      title: 'event 3',
      start: '2022-11-03T10:00:00',
      end: '2022-11-03T11:00:00',
      color: 'cyan',
    },
    {title: 'event 2', date: '2022-11-02'},
  ],
  headerToolbar: false,
  titleFormat: {year: 'numeric', month: 'long'},
  // dateClick: (arg) => {
  //   console.log(arg.dateStr)
  // },
  // select: (arg) => {
  //   console.log(arg.startStr + ' ' + arg.endStr)
  // },
  // eventClick: (arg) => {
  //   console.log(arg.event)
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
  }
}
</script>

<style scoped>

</style>