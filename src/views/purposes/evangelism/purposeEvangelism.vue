<template>
    <v-card class="ma-2">
        <PCard
                title="Семинар «Шаг 4. Благовестие» "
                btn="Записаться на шаг 4"
                color="evangelism"
                :img="step"
                :text="stepText"
                @togglerBtn="signToStep = !signToStep"
        />
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
    <v-card class="ma-2">
        <PCard
                btn="Хочу больше"
                :img="YoursOne"
                :text="yourOneText"
                color="evangelism"
                @togglerBtn="yoursOneBtn = !yoursOneBtn"
        />
    </v-card>
    <v-expand-transition>
        <v-card v-show="yoursOneBtn" variant="text" elevation="0" rounded="0" class="my-2 mx-5">
            <v-btn
                    size="large"
                    href="https://mbv.spb.ru/wp-content/uploads/2020/03/Kto-tvoi-odin-1.pdf.pdf"
                    rounded="lg"
                    color="evangelismSec"
                    class="my-2 w-100"
            >
                Скачать книжку «КТО ТВОЙ ОДИН?»
            </v-btn>
            <v-btn
                    size="large"
                    href="https://mbv.spb.ru/wp-content/uploads/2020/03/Kak_sostavit_lichnoe_svidetelstvo_1_pdf.pdf"
                    rounded="lg"
                    color="evangelismSec"
                    class="my-2 w-100"
            >
                Как составить личное свидетельство
            </v-btn>
        </v-card>
    </v-expand-transition>
    <v-card class="ma-2">
        <PCard
                btn="Присоединиться"
                color="evangelism"
                :img="vechno"
                :text="textVechno"
                @togglerBtn="vechnoBtn = !vechnoBtn"
        />
        <v-expand-transition>
            <v-card v-show="vechnoBtn" variant="text" elevation="0" rounded="0" class="ma-2">
                <v-textarea rows="2" class="mt-2" label="Расскажите о себе" v-model="tell_About_Yourself" />
                <v-textarea rows="2" label="Опишите ваш опыт в организации мероприятий" v-model="tell_About_Experience" />
                <v-card-actions>
                    <VSpacer />
                    <v-btn color="evangelism" @click="sendForm('evangelism', {tell_About_Yourself, tell_About_Experience}, 'Присоединиться к VECHNO')">Отправить</v-btn>
                </v-card-actions>
            </v-card>
        </v-expand-transition>
    </v-card>
    <v-card class="ma-2">
        <PCard
                title="Стайгер - уличная евангелизация"
                color="evangelism"
                :img="steiger"
                :text="textSteiger"
        />
        <v-card-actions>
            <VSpacer />
            <v-btn href="https://t.me/silchuuk" color="evangelism"><VIcon class="mx-1" icon="mdi-send"/>Написать лидеру</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import vechno from '@/assets/evangelismPics/vechno.png'
import steiger from '@/assets/evangelismPics/steiger.jpg'
import YoursOne from '@/assets/evangelismPics/YoursOne.jpg'
import step from '@/assets/evangelismPics/step.jpg'
import CalendarEventCard from '@/views/calendar/components/calendarEventCard.vue'
import {useCalendarEventsStore} from '@/stores/calendarStore'
import {storeToRefs} from 'pinia'
import {ref} from 'vue'
import PCard from '@/components/purposes/cardsInPurposes.vue'
import {useFormsStore} from '@/stores/formsStore'
import router from '@/router'

const calendarEventsStore = useCalendarEventsStore()
const {allCalendarEvents} = storeToRefs(calendarEventsStore)
const filteredEvents = ref([])
const {signToEvent, unsignToEvent} = calendarEventsStore

filteredEvents.value = allCalendarEvents.value.filter(evnt => {
  if (evnt.chipValues.includes('fourth')) return evnt
})

const signToStep = ref(false)
const yoursOneBtn = ref(false)
const vechnoBtn = ref(false)
const stepText = ref(`Это 4-х часовой семинар, на котором вы узнаете о том, как привлекать людей к Иисусу Христу, способствуя изменению их жизни, а также узнаете о том, как рассказывать о вере, надежде и Божьей любви так, чтобы Божье спасение достигало как можно большего числа людей.`)
const textVechno = ref(`Мы хотим, чтобы благовестие стало доступным каждому человеку нашей церкви. <br /><br />
Проект «Вечно» - это мероприятия со смыслом, через которых ваш друг может познакомиться с церковной семьей в неформальной обстановке`)
const textSteiger = ref(`Стайгер - это международное миссионерское молодёжное движение, которое призвано достигать глобальную молодёжную культура для Христа с помощью творчества, музыки и искусства. <br /><br />
Последние несколько лет наша команда успешно выходит на улицу нашего города с творческими проектами, которые вдохновляют задуматься о важных вопросах современного мира и о вечности.<br /><br />
<b>Узнать больше об уличной евангелизации</b>`)
const yourOneText = ref(`Бог думает о каждом человеке! Его сердце полно сострадания и любви к людям, и Он продолжает достигать человечество, желая спасти каждого.<br /><br />
Для осуществления Своего Божественного плана спасения, Бог рассчитывает на каждого из нас.<br/><br/>
Инструмент «КТО ТВОЙ ОДИН?» — это помощник для каждого человека, кто хочет возрастать в личном благовестии и исполнять Великое Божье Поручение — распространение Евангелия.`)


const {sendForm} = useFormsStore()
const tell_About_Yourself = ref('')
const tell_About_Experience = ref('')
</script>