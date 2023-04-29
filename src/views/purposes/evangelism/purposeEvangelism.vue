<template>
    <v-card class="ma-2">
        <v-img :src="step" class="align-end">
            <VCardTitle class="text-white" v-text="'Семинар «Шаг 4. Благовестие» '"/>
        </v-img>
        <VCardText v-html="stepText" />
        <v-card-actions>
            <VSpacer/>
            <VBtn color="evangelism" @click="signToStep = !signToStep" v-text="'Записаться на шаг 4'"/>
        </v-card-actions>
    </v-card>
    <v-expand-transition>
        <v-card v-show="signToStep" variant="text" elevation="0" rounded="0" class="ma-2">
            <VCardText v-text="'Запишитесь на ближайший шаг в календаре и вам придет уведомление за день до семинара'" />
            <CalendarEventCard
                    v-for="evnt in filteredEvents"
                    :key="evnt.id"
                    :event-title="evnt.title"
                    :event-text="evnt.text"
                    :event-time="evnt.start"
                    :event-color="evnt.color"
                    :event-icon="evnt.icon"
                    :event-id="evnt.id"
                    @sign-btn="signToEvent(evnt)"
                    @unsign-btn="unsignToEvent(evnt)" />
        </v-card>
    </v-expand-transition>
  <v-card class="ma-2">
    <v-img :src="vechno" />
  </v-card>

</template>

<script setup>
import vechno from '@/assets/evangelismPics/vechno.png'
import step from '@/assets/evangelismPics/step.jpg'
import CalendarEventCard from '@/views/calendar/components/calendarEventCard.vue'
import {useCalendarEventsStore} from '@/stores/calendarStore'
import {storeToRefs} from 'pinia'
import {ref} from 'vue'

const calendarEventsStore = useCalendarEventsStore()
const {allCalendarEvents} = storeToRefs(calendarEventsStore)
const filteredEvents = ref([])
const {signToEvent, unsignToEvent} = calendarEventsStore

filteredEvents.value = allCalendarEvents.value.filter(evnt => {
  if (evnt.chipValues.includes('fourth')) return evnt
})

const signToStep = ref(false)
const stepText = ref(`Это 4-х часовой семинар, на котором вы узнаете о том, как привлекать людей к Иисусу Христу, способствуя изменению их жизни, а также узнаете о том, как рассказывать о вере, надежде и Божьей любви так, чтобы Божье спасение достигало как можно большего числа людей.`)
</script>