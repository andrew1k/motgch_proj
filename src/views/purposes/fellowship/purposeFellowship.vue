<template>
  <!------------------------------------------------------------------------------------------------------------------------------    Step  -->
    <v-card class="ma-2">
        <PCard
                title="Семинар - шаг 1 «Общение»"
                btn="Записаться на Шаг 1"
                :img="step"
                :text="stepText"
                color="fellowship"
                @toggler-btn="signToStep = !signToStep"
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
                    @sign-btn="signToEvent(evnt)"
                    @unsign-btn="unsignToEvent(evnt)"
                    :show="true"
            />
        </v-card>
    </v-expand-transition>
  <!------------------------------------------------------------------------------------------------------------------------------    Small Group-->
  <!--    <VCardTitle class="mt-6" v-text="'МАЛЫЕ ГРУППЫ'"/>-->
    <v-card class="ma-2">
        <PCard
                title="Малые группы"
                btn="Найти Малую Группу"
                :img="smallGroups"
                :text="sgText"
                color="fellowship"
                @toggler-btn="togglerSG = !togglerSG"
        />
    </v-card>
    <v-expand-transition>
        <v-card v-show="togglerSG" variant="text" elevation="0" rounded="0" class="ma-2">
            <SignToSG/>
        </v-card>
    </v-expand-transition>
  <!------------------------------------------------------------------------------------------------------------------------------ Baptism-->
  <!--    <VCardTitle v-text="'КРЕЩЕНИЕ'" class="mt-6"/>-->
    <v-card class="ma-2">
        <PCard
                title="Водное крещение"
                btn="Хочу принять водное крещение"
                :img="baptism"
                :text="textBaptism"
                color="fellowship"
                @toggler-btn="baptismToggler = !baptismToggler"
        />
    </v-card>
    <v-expand-transition>
        <v-card v-show="baptismToggler" variant="text" elevation="0" rounded="0" class="ma-2">
            <SignToBaptism/>
        </v-card>
    </v-expand-transition>

  <!---------------------------------------------------------------------------------------------------------------------------  First Meeting-->
  <!--    <VCardTitle class=" mt-6" v-text="'ВСТРЕЧА-ЗНАКОМСТВО'"/>-->
    <v-card class="ma-2">
        <PCard
                title="Встреча-знакомство"
                btn="Записаться"
                :img="firstMeeting"
                :text="textFirstMeeting"
                color="fellowship"
                @toggler-btn="signToFirstMeeting = !signToFirstMeeting"
        />
    </v-card>
    <v-expand-transition>
        <v-card v-show="signToFirstMeeting" variant="text" elevation="0" rounded="0" class="ma-2">
            <VCardSubtitle v-text="'Ближайшая встреча-знакомство в календаре'"/>
            <VDivider/>
            <CalendarEventCard
                    v-for="evnt in firstMeetingEvnt"
                    :key="evnt.id"
                    :event-title="evnt.title"
                    :event-text="evnt.text"
                    :event-time="evnt.start"
                    :event-color="evnt.color"
                    :event-icon="evnt.icon"
                    :event-id="evnt.id"
                    @sign-btn="signToEvent(evnt)"
                    @unsign-btn="unsignToEvent(evnt)"
                    :show="true"
            />
        </v-card>
    </v-expand-transition>
  <!----------------------------------------------------------------------------------------------------------------------------  One Plus One -->
  <!--    <VCardTitle class=" mt-6" v-text="'ИНДИВИДУАЛЬНОЕ НАСТАВНИЧЕСТВО'"/>-->
    <v-card class=" ma-2">
        <PCard
                title="Программа «1+1»"
                btn="Найти мне наставника"
                :img="onePlusOne"
                :text="textOnePlusOne"
                color="fellowship"
                @toggler-btn="oPo = !oPo"
        />
    </v-card>
    <v-expand-transition>
        <v-card v-show="oPo" variant="text" elevation="0" rounded="0" class="ma-2">
            <v-radio-group v-model="answer" class="my-1" label="Как с вами удобнее связаться?" density="comfortable"
                           color="success" hide-details>
                <VRadio label="What's App" value="WhatsApp"/>
                <VRadio label="Telegram" value="Telegram"/>
                <VRadio label="По телефону" value="По телефону"/>
            </v-radio-group>
            <v-card-actions>
                <VSpacer/>
                <v-btn color="fellowship" @click="sendForm('fellowship', {answer}, '1 + 1')">Отправить</v-btn>
            </v-card-actions>
        </v-card>
    </v-expand-transition>
</template>

<script setup>
import baptism from '@/assets/fellowshipPics/baptism.jpg'
import step from '@/assets/fellowshipPics/step.jpg'
import firstMeeting from '@/assets/fellowshipPics/firstMeeting.jpg'
import smallGroups from '@/assets/fellowshipPics/smallGroups.jpg'
import onePlusOne from '@/assets/fellowshipPics/onePlusOne.jpg'
import {ref} from 'vue'
import SignToBaptism from '@/views/purposes/fellowship/components/forms/signToBaptism.vue'
import PCard from '@/components/purposes/cardsInPurposes.vue'
import SignToSG from '@/views/purposes/fellowship/components/forms/signToSG.vue'
import CalendarEventCard from '@/views/calendar/components/calendarEventCard.vue'
import {useCalendarEventsStore} from '@/stores/calendarStore'
import {storeToRefs} from 'pinia'
import {useFormsStore} from '@/stores/formsStore'

const togglerSG = ref(false)
const baptismToggler = ref(false)
const signToFirstMeeting = ref(false)
const oPo = ref(false)
const answer = ref('')
const signToOnePlusOne = () => {
  console.log('signToOnePlusOne')
}
const signToStep = ref(false)

const sgText = ref([
  `Малая группа - это встречи верующих людей среди недели в тёплой, домашней, дружеской обстановке для общения, изучения Библии, совместных молитв и помощи друг другу. <br /><br />
  Это то, что нужно каждому христианину, чтобы возрастать во Христе и чувствовать себя частью церковной семьи. <br /><br />
  Малые группы проходят еженедельно в разных районах города. Напишите нам, чтобы найти свою Малую группу`,
])
const stepText = ref([
  `Шаг 1 «Общение» или «Узнавая больше о нашей церковной семье» – это первый из основополагающих курсов церкви «Миссия Благая Весть». <br /><br />
  Каждый человек создан для того, чтобы быть частью церковной семьи, и церковь «Миссия Благая Весть» хочет стать для вас местом, где вам будет комфортно, как дома. Каждая здоровая семья имеет общие убеждения, цели и обязательства и на этом семинаре мы хотим поделиться с вами тем, кто мы, во что мы верим и куда мы идём.<br /><br />
  Мы поговорим о том, как устроена наша церковь, какова её история, видение и структура. Раскроем пять жизненных целей, которые были предназначены для нас Богом, поговорим о преимуществах церковной семьи, а также о том, как стать членом церкви «Миссия Благая Весть».`,
])
const textBaptism = ref([
  `- это первое важнейшее таинство в жизни верующего человека. Оно не делает человека христианином, но оно показывает, что он им является. Это внешний символ внутреннего посвящения, которое делает человек в своём сердце, обретая новую жизнь в Иисусе Христе.<br /><br />
  Мы верим, что крещение нужно принимать по вере, в осознанном возрасте, исповедуя Иисуса Христа Господом и Спасителем.`,
])

const textOnePlusOne = ref([
  `- это индивидуальное наставничество для людей, недавно принявших Иисуса Христа.<br /><br />
  На первых этапах христианской жизни у новообращенных христиан возникают множество вопросов, страхов, сомнений и искушений. Это абсолютно нормально.<br /><br />
  Программа «1+1» — это 3-х месячная программа, которая предполагает еженедельные встречи с наставником, где с помощью учебного пособия с примерами, иллюстрациями и домашними заданиями, раскрываются основы христианской жизни и подробно рассматриваются насущные вопросы и страхи, возникающие у большинства недавно уверовавших людей.<br /><br />
  Индивидуальный подход к каждому человеку позволяет достичь высоких результатов в том, чтобы человек утвердился в Божьей любви, укоренился в церкви и достигал духовной зрелости.`,
])

const textFirstMeeting = ref([
  `Если вы недавно присоединились к нашей церкви (в течение 2 месяцев) или сегодня пришли впервые, приглашаем вас на Встречу-Знакомство.<br /><br />
  Мы с пасторами, лидерами и служителями церкви будем рады познакомиться с вами и провести время в дружеском общении за чашечкой чая, рассказать о себе, о церкви, ответить на вопросы и помолиться за вас.`,
])

// ---------------------------------------------------------------------------------- calendar
const calendarEventsStore = useCalendarEventsStore()
const {allCalendarEvents} = storeToRefs(calendarEventsStore)
const filteredEvents = ref([])
const firstMeetingEvnt = ref([])
const {signToEvent, unsignToEvent} = calendarEventsStore

filteredEvents.value = allCalendarEvents.value.filter(evnt => {
  if (evnt.chipValues.includes('first')) return evnt
})
firstMeetingEvnt.value = allCalendarEvents.value.filter(evnt => {
  if (evnt.chipValues.includes('firstMeeting')) return evnt
})
// ---------------------------------------------------------------------------------
const {sendForm} = useFormsStore()
</script>