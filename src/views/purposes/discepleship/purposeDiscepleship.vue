<template>
    <v-card class="ma-2">
        <v-img :src="step">
            <div class="fill-height bottom-gradient d-flex align-end">
                <VCardTitle class="text-white" v-text="'Семинар «Шаг 2. Ученичество» '"/>
            </div>
        </v-img>
        <VCardText v-html="stepText"/>
        <v-card-actions>
            <VSpacer/>
            <VBtn color="discepleship" @click="signToStep = !signToStep" v-text="'Записаться на шаг 2'"/>
        </v-card-actions>
    </v-card>
    <v-expand-transition>
        <v-card v-show="signToStep" variant="text" elevation="0" rounded="0" class="ma-2">
            <VCardText v-text="'Запишитесь на ближайший шаг в календаре и вам придет уведомление за день до семинара'"/>
            <CalendarEventCard
                    v-for="evnt in filteredEvents"
                    :key="evnt.id"
                    :event-title="evnt.title"
                    :event-text="evnt.text"
                    :event-time="evnt.start"
                    :event-color="evnt.color"
                    :event-icon="evnt.icon"
                    :event-id="evnt.id"
                    :show="true"
                    @sign-btn="signToEvent(evnt)"
                    @unsign-btn="unsignToEvent(evnt)"/>
        </v-card>
    </v-expand-transition>
    <VCardTitle v-text="'Разбор Библии | Даниил Шатров'" class="mt-4"/>
    <v-card class="ma-2">
        <LiteYouTubeEmbed playlist="true" title="Разбор Библии | Даниил Шатров" id="PLjjvxd6WcKV0y6SrODLnJBOWYaUjzTHfE"
                          playlistCoverId="CJOmxv5D8dg"/>
    </v-card>
    <VCardTitle v-text="'Библейская школа | онлайн'" class="mt-4"/>
    <v-card class="ma-2">
        <LiteYouTubeEmbed playlist="true" title="Библейская школа | онлайн" id="PLjjvxd6WcKV2oN8Gv8aIvdZ657hLS_KNR"
                          playlistCoverId="W9oUvW2VdTA"/>
    </v-card>
</template>

<script setup>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
import {ref} from 'vue'
import step from '@/assets/discepleshipPics/step.jpg'
import CalendarEventCard from '@/views/calendar/components/calendarEventCard.vue'
import {useCalendarEventsStore} from '@/stores/calendarStore'
import {storeToRefs} from 'pinia'

const stepText = ref(`Это 4-х часовой семинар, который является второй ступенью процесса духовного роста человека.<br/> На семинаре рассказываются о том, какие привычки и навыки нужно иметь каждому христианину, чтобы стать духовно зрелым учеником, а также узнать о том, как понять Библию, как правильно молиться, зачем нужно отдавать десятину и почему так важно быть частью малой группы.<br/> На семинаре предоставляется материал, который служит хорошим помощником для того, чтобы духовное возрастание было максимально легким и комфортным.`)
const signToStep = ref(false)

const calendarEventsStore = useCalendarEventsStore()
const {allCalendarEvents} = storeToRefs(calendarEventsStore)
const filteredEvents = ref([])
const {signToEvent, unsignToEvent} = calendarEventsStore

filteredEvents.value = allCalendarEvents.value.filter(evnt => {
  if (evnt.chipValues.includes('second')) return evnt
})
</script>

<style scoped>
.bottom-gradient {
    background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.7) 0%,
            transparent 90px
    );
}
</style>