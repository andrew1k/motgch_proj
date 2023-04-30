<template>
    <v-card-title class="mt-4">События на этой неделе</v-card-title>
    <v-card rounded="pill" class="mx-1 my-2" v-if="!weekCalendarEvents.length && !isPending">
        <VCardItem prepend-icon="mdi-close" title="Нет событий"/>
    </v-card>
    <v-card rounded="pill" class="mx-1 my-2" v-if="isPending">
        <VSkeletonLoader type="list-item-avatar"/>
    </v-card>
    <transition name="slide-fade" mode="out-in">
        <div v-if="weekCalendarEvents.length">
            <CalendarEventCard
                    v-for="evnt in weekCalendarEvents"
                    :key="evnt.id"
                    :event-title="evnt.title"
                    :event-text="evnt.text"
                    :event-time="evnt.start"
                    :event-color="evnt.color"
                    :event-id="evnt.id"
                    :event-icon="evnt.icon"
                    @sign-btn="signToEvent(evnt)"
                    @unsign-btn="unsignToEvent(evnt)"
            />
        </div>
    </transition>
</template>

<script setup>
import {useCalendarEventsStore} from '@/stores/calendarStore'
import {storeToRefs} from 'pinia'
import {onBeforeMount} from 'vue'
import CalendarEventCard from '@/views/calendar/components/calendarEventCard.vue'
import {useAppState} from '@/stores/appState'

const calendarEventsStore = useCalendarEventsStore()
const {getCalendarEvents, signToEvent, unsignToEvent} = calendarEventsStore
onBeforeMount(() => {
  getCalendarEvents()
})

const {weekCalendarEvents} = storeToRefs(calendarEventsStore)

const appState = useAppState()
const {isPending} = storeToRefs(appState)
</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.6s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>