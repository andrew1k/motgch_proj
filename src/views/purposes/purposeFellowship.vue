<template>
    <!------------------------------------------------------------------------------------------------------------------------------    Small Group-->
    <VCardTitle class="mt-6" v-text="'МАЛЫЕ ГРУППЫ'"/>
    <v-card elevation="5" class="ma-2" rounded="xl">
      <FellowshipCards v-if="!togglerSG" title="Малые группы - это место силы" btn="Найти Малую Группу" :img="smallGroups" :text="sgText" color="secondary" @toggler-btn="togglerSG = !togglerSG"/>
      <SignToSG v-if="togglerSG" @go-back="togglerSG = !togglerSG"/>
    </v-card>
    <!------------------------------------------------------------------------------------------------------------------------------ Baptism-->
    <VCardTitle v-text="'КРЕЩЕНИЕ'" class="mt-6"/>
    <v-card elevation="5" class="ma-2" rounded="xl">
      <FellowshipCards v-if="!baptismToggler" title="Водное крещение" btn="Хочу креститься" :img="baptism" :text="textBaptism" color="secondary" @toggler-btn="baptismToggler = !baptismToggler" />
      <SignToBaptism @goBack="baptismToggler = !baptismToggler" v-if="baptismToggler"/>
    </v-card>

    <!---------------------------------------------------------------------------------------------------------------------------  First Meeting-->
    <VCardTitle class=" mt-6" v-text="'ВСТРЕЧА-ЗНАКОМСТВО'"/>
    <v-card elevation="5" class="ma-2" rounded="xl">
      <FellowshipCards title="Встреча-знакомство" btn="Записаться" :img="firstMeeting" :text="textFirstMeeting" color="secondary" @toggler-btn="signToFirstMeeting" />
    </v-card>

    <!----------------------------------------------------------------------------------------------------------------------------  One Plus One -->
    <VCardTitle class=" mt-6" v-text="'ИНДИВИДУАЛЬНОЕ НАСТАВНИЧЕСТВО'"/>
    <v-card elevation="5" class=" ma-2" rounded="xl">
      <FellowshipCards title="Программа «1+1»" btn="Найти мне наставника" :img="onePlusOne" :text="textOnePlusOne" color="secondary" @toggler-btn="signToOnePlusOne" />
    </v-card>

</template>

<script setup>
import baptism from '@/assets/fellowshipPics/baptism.png'
import firstMeeting from '@/assets/fellowshipPics/firstMeeting.png'
import smallGroups from '@/assets/fellowshipPics/smallGroups.png'
import onePlusOne from '@/assets/fellowshipPics/onePlusOne.png'
import {ref} from 'vue'
import SignToBaptism from '@/components/purposes/purposeFellowship/signToBaptism.vue'
import FellowshipCards from '@/components/purposes/purposeFellowship/fellowshipCards.vue'
import SignToSG from '@/components/purposes/purposeFellowship/signToSG.vue'

const togglerSG = ref(false)
const baptismToggler = ref(false)
const signToFirstMeeting = () => {
  console.log('signToFirstMeeting')
}
const signToOnePlusOne = () => {
  console.log('signToOnePlusOne')
}

const sgText = ref([
  `Малая группа - это встречи верующих людей среди недели в тёплой, домашней, дружеской обстановке для общения, изучения Библии, совместных молитв и помощи друг другу.`,
  `Это то, что нужно каждому христианину, чтобы возрастать во Христе и чувствовать себя частью церковной семьи. `,
  `Малые группы проходят еженедельно в разных районах города. Напишите нам, чтобы найти свою Малую группу`,
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
</script>