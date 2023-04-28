<template>
    <!------------------------------------------------------------------------------------------------------------------------------    Step  -->
    <v-card class="ma-2">
      <FellowshipCards title="Семинар - шаг 1 «Общение»" btn="Записаться на Шаг 1" :img="step" :text="stepText" color="fellowship" @toggler-btn="signToStep = !signToStep"/>
    </v-card>
    <v-expand-transition>
        <v-card v-show="signToStep" variant="text" elevation="0" rounded="0" class="ma-2">
            <VCardSubtitle v-text="'Ближайший шаг 1 в календаре'" />
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
  <!------------------------------------------------------------------------------------------------------------------------------    Small Group-->
<!--    <VCardTitle class="mt-6" v-text="'МАЛЫЕ ГРУППЫ'"/>-->
    <v-card class="ma-2">
      <FellowshipCards title="Малые группы" btn="Найти Малую Группу" :img="smallGroups" :text="sgText" color="fellowship" @toggler-btn="togglerSG = !togglerSG"/>
    </v-card>
    <v-expand-transition>
        <v-card v-show="togglerSG" variant="text" elevation="0" rounded="0" class="ma-2">
            <SignToSG @go-back="togglerSG = !togglerSG"/>
        </v-card>
    </v-expand-transition>
  <!------------------------------------------------------------------------------------------------------------------------------ Baptism-->
<!--    <VCardTitle v-text="'КРЕЩЕНИЕ'" class="mt-6"/>-->
    <v-card class="ma-2">
      <FellowshipCards title="Водное крещение" btn="Хочу принять водное крещение" :img="baptism" :text="textBaptism" color="fellowship" @toggler-btn="baptismToggler = !baptismToggler" />
    </v-card>
    <v-expand-transition>
        <v-card v-show="baptismToggler" variant="text" elevation="0" rounded="0" class="ma-2">
            <SignToBaptism @goBack="baptismToggler = !baptismToggler" />
        </v-card>
    </v-expand-transition>

    <!---------------------------------------------------------------------------------------------------------------------------  First Meeting-->
<!--    <VCardTitle class=" mt-6" v-text="'ВСТРЕЧА-ЗНАКОМСТВО'"/>-->
    <v-card class="ma-2">
      <FellowshipCards title="Встреча-знакомство" btn="Записаться" :img="firstMeeting" :text="textFirstMeeting" color="fellowship" @toggler-btn="signToFirstMeeting = !signToFirstMeeting" />
    </v-card>
    <v-expand-transition>
        <v-card v-show="signToFirstMeeting" variant="text" elevation="0" rounded="0" class="ma-2">
            <VCardSubtitle v-text="'Ближайшая встреча-знакомство в календаре'" />
            <VDivider />
        </v-card>
    </v-expand-transition>
    <!----------------------------------------------------------------------------------------------------------------------------  One Plus One -->
<!--    <VCardTitle class=" mt-6" v-text="'ИНДИВИДУАЛЬНОЕ НАСТАВНИЧЕСТВО'"/>-->
    <v-card class=" ma-2">
      <FellowshipCards title="Программа «1+1»" btn="Найти мне наставника" :img="onePlusOne" :text="textOnePlusOne" color="fellowship" @toggler-btn="signToOnePlusOne" />
    </v-card>

</template>

<script setup>
import baptism from '@/assets/fellowshipPics/baptism.jpg'
import step from '@/assets/fellowshipPics/step.jpg'
import firstMeeting from '@/assets/fellowshipPics/firstMeeting.jpg'
import smallGroups from '@/assets/fellowshipPics/smallGroups.jpg'
import onePlusOne from '@/assets/fellowshipPics/onePlusOne.jpg'
import {ref} from 'vue'
import SignToBaptism from '@/views/purposes/fellowship/views/signToBaptism.vue'
import FellowshipCards from '@/views/purposes/fellowship/components/fellowshipCards.vue'
import SignToSG from '@/views/purposes/fellowship/views/signToSG.vue'
import CalendarEventCard from '@/views/calendar/components/calendarEventCard.vue'
import {useCalendarEventsStore} from '@/stores/calendarStore'
import {storeToRefs} from 'pinia'

const togglerSG = ref(false)
const baptismToggler = ref(false)
const signToFirstMeeting = ref(false)
const signToOnePlusOne = () => {
  console.log('signToOnePlusOne')
}
const signToStep = ref(false)

const sgText = ref([
  `Малая группа - это встречи верующих людей среди недели в тёплой, домашней, дружеской обстановке для общения, изучения Библии, совместных молитв и помощи друг другу.`,
  `Это то, что нужно каждому христианину, чтобы возрастать во Христе и чувствовать себя частью церковной семьи. `,
  `Малые группы проходят еженедельно в разных районах города. Напишите нам, чтобы найти свою Малую группу`,
])
const stepText = ref([
  `Шаг 1 «Общение» или «Узнавая больше о нашей церковной семье» – это первый из основополагающих курсов церкви «Миссия Благая Весть».`,
  `Каждый человек создан для того, чтобы быть частью церковной семьи, и церковь «Миссия Благая Весть» хочет стать для вас местом, где вам будет комфортно, как дома. Каждая здоровая семья имеет общие убеждения, цели и обязательства и на этом семинаре мы хотим поделиться с вами тем, кто мы, во что мы верим и куда мы идём.`,
  `Мы поговорим о том, как устроена наша церковь, какова её история, видение и структура. Раскроем пять жизненных целей, которые были предназначены для нас Богом, поговорим о преимуществах церковной семьи, а также о том, как стать членом церкви «Миссия Благая Весть».`,
])
const textBaptism = ref([
  `- это первое важнейшее таинство в жизни верующего человека. Оно не делает человека христианином, но оно показывает, что он им является. Это внешний символ внутреннего посвящения, которое делает человек в своём сердце, обретая новую жизнь в Иисусе Христе.`,
  `Мы верим, что крещение нужно принимать по вере, в осознанном возрасте, исповедуя Иисуса Христа Господом и Спасителем.`,
])

const textOnePlusOne = ref([
  `- это индивидуальное наставничество для людей, недавно принявших Иисуса Христа.`,
  `На первых этапах христианской жизни у новообращенных христиан возникают множество вопросов, страхов, сомнений и искушений. Это абсолютно нормально.`,
  `Программа «1+1» — это 3-х месячная программа, которая предполагает еженедельные встречи с наставником, где с помощью учебного пособия с примерами, иллюстрациями и домашними заданиями, раскрываются основы христианской жизни и подробно рассматриваются насущные вопросы и страхи, возникающие у большинства недавно уверовавших людей.`,
  `Индивидуальный подход к каждому человеку позволяет достичь высоких результатов в том, чтобы человек утвердился в Божьей любви, укоренился в церкви и достигал духовной зрелости.`,
])

const textFirstMeeting = ref([
  `Если вы недавно присоединились к нашей церкви (в течение 2 месяцев) или сегодня пришли впервые, приглашаем вас на Встречу-Знакомство.`,
  `Мы с пасторами, лидерами и служителями церкви будем рады познакомиться с вами и провести время в дружеском общении за чашечкой чая, рассказать о себе, о церкви, ответить на вопросы и помолиться за вас.`,
])

// ---------------------------------------------------------------------------------- calendar
const calendarEventsStore = useCalendarEventsStore()
const {allCalendarEvents} = storeToRefs(calendarEventsStore)
const filteredEvents = ref([])
const {signToEvent, unsignToEvent} = calendarEventsStore

filteredEvents.value = allCalendarEvents.value.filter(evnt => {
    if (evnt.chipValues.includes('first')) return evnt
})
</script>