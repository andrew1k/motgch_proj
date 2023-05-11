<template>
    <v-card class="ma-2">
        <v-img :src="step">
            <div class="fill-height bottom-gradient d-flex align-end">
                <VCardTitle class="text-white" v-text="'Семинар «Шаг 3. Служение» '"/>
            </div>
        </v-img>
        <VCardText v-html="stepText"/>
        <v-card-actions>
            <VSpacer/>
            <VBtn color="ministry" @click="signToStep = !signToStep" v-text="'Записаться на шаг 3'"/>
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
  <!--   ------------------------------------------------------------------------------------------------------------------ -->
    <VCardTitle class="mt-4" v-text="'Наши служения'"/>
    <v-data-table
            show-expand
            v-model:expanded="expanded"
            :items="ourServs"
            item-value="title"
            :headers="servHeaders">
        <template v-slot:expanded-row="{ columns, item }">
            <tr>
                <td :colspan="columns.length">
                    More info about {{ item.raw.title }}
                </td>
            </tr>
        </template>
    </v-data-table>

  <!--  <DescriptionsCard-->
  <!--    v-for="(serv, i) in ourServs"-->
  <!--    :key="i"-->
  <!--    :title="serv.title"-->
  <!--    :subtitle="serv.subtitle"-->
  <!--    :text="serv.text"-->
  <!--    />-->
    <VCardTitle class="mt-4" v-text="'Шаг 3'"/>
    <v-card class="ma-2">
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, alias aliquam
            aliquid,
            animi aspernatur atque, debitis dolore dolorem eveniet exercitationem explicabo ipsa modi mollitia
            necessitatibus
            neque nulla numquam obcaecati odit officiis optio placeat quae quis repellendus sint suscipit tempora
            tenetur
            vitae voluptas voluptates! Corporis dolores iure magnam officia rem!
        </v-card-text>
    </v-card>
    <VCardTitle class="mt-4" v-text="'Консультация'"/>
    <v-card class="ma-2">
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa deleniti dolor dolore
            dolorum
            esse eveniet inventore libero quidem vel?
        </v-card-text>
    </v-card>
    <VCardTitle class="mt-4" v-text="`Проект 'Век Добра'`"/>
    <v-card class="ma-2">
        <v-card-text>
            Церковь- это место, где каждый человек может найти поддержку, принятие и помощь.
            Мы хотим помочь вам преодолевать трудные ситуации и вместе с вами радоваться победам!
        </v-card-text>
        <v-card-item>
            <v-avatar rounded="0"
                      image="https://mbv.spb.ru/wp-content/uploads/2016/08/BL_Logo_Gorizont_Main_Vertical-208x140.png"/>
            Благотворительный фонд «Яркая жизнь»
        </v-card-item>
    </v-card>
</template>

<script setup>
const servHeaders = ref([{title: 'Служение', key: 'title'}])
const expanded = ref([])
const ourServs = ref([
  {
    title: 'Приветствие',
    text: 'Это команда, которая встречает людей, приходящих в церковь. Именно они своим радушием и улыбками создают первое впечатление о церкви, гостеприимно приветствуя на входе каждого человека, приходящего на богослужения в воскресенье.',
    subtitle: '2 часа, по воскресеньям',
    icon: '',
  }, {
    title: 'Причастие',
    text: `Группа Причастия с особым благоговением и трепетностью осуществляет подготовку и организацию одного из важнейших элементов богослужений — Таинства Причастия`,
    subtitle: 'с 10:00 до 15:00 (молодежь с 15:00 до 17:00) один раз в месяц',
    icon: '',
  }, {
    title: `Группа порядка`,
    text: `Команда служителей участвует в подготовке и проведении всех запланированных мероприятий воскресного дня, а также поддерживает порядок и безопасность во время богослужений и помогает создать такую обстановку, чтобы человек не отвлекался и был максимально сосредоточен на проповеди и прославлении Бога.`,
    subtitle: `с 10:00 до 15:00 (молодежь с 14:20 до 19:00), по воскресеньям`,
    icon: '',
  }, {
    title: `Стойка информации`,
    text: `Волонтёры стойки информации оказывают информационную поддержку людям, пришедшим в церковь, записывая на мероприятия и служения церкви, предоставляя необходимые материалы, принимая молитвенные нужды и др.`,
    subtitle: `2,5 часа, по воскресеньям`,
    icon: '',
  }, {
    title: `Режиссёр воскресного дня`,
    text: `Режиссёры собраний отвечают за регламент проведения богослужений, следят за таймингом и обеспечивают быстрое взаимодействие с разными техническими службами.`,
    subtitle: `2 часа, по воскресеньям`,
    icon: '',
  }, {
    title: `Забота о пасторах`,
    text: `Волонтёры организуют комнату отдыха для пасторов, спикеров и гостей из других городов и стран, накрывая и обслуживая чайный стол, тем самым ухаживая за гостями в перерыве между богослужениями.`,
    subtitle: `с 13:00 до 15:00, по воскресеньям`,
    icon: '',
  }, {
    title: `Знакомство с церковью`,
    text: `Для новых людей, пришедших в церковь, после каждого богослужения организовано общение, где команда служителей, инициируя знакомство, рассказывает о церкви и отвечает на вопросы.`,
    subtitle: `один раз в два месяца с 14:30 до 17:30`,
    icon: '',
  }, {
    title: `Медиа отдел`,
    text: `Команда медиа — это видеооператоры, видеомонтажеры, видеографы, креативные продюсеры и сценаристы, сторисмейкеры, дизайнеры, моушн-дизайнеры, фотографы и др. Медиа команда реализует видео проекты нашей церкви, обеспечивает трансляции богослужений и мероприятий, а также ведёт активную работу в социальных сетях.`,
    subtitle: `в зависимости от проекта`,
    icon: '',
  }, {
    title: `Книжный киоск`,
    text: `Продажа христианских книг между богослужениями в киоске, расположенном в холле возле кафе.`,
    subtitle: `с 11:00 до 15:00, по воскресеньям`,
    icon: '',
  }, {
    title: `Молодёжное кафе`,
    text: `— это место сближения молодёжи, где за чашечкой чая или кофе с угощениями можно познакомиться с новыми людьми, пообщаться друг с другом и с пользой провести время. Команда Молодёжного кафе помогает в организации и проведения чаепития.`,
    subtitle: `2-3 часа, по воскресеньям`,
    icon: '',
  }, {
    title: `Воскресный досуг`,
    text: `Команда организовывает различные развлекательные мероприятия по воскресеньям для молодежи после молодёжного богослужения, а также киновечера, творческие мероприятия и другие праздники.`,
    subtitle: `2-3 часа`,
    icon: '',
  }, {
    title: `Колл-центр`,
    text: `Колл-центр — это горячая линия, по которой можно позвонить из любого города нашей страны бесплатно (8-800-555-25-15). Волонтёры колл-центра отвечают на звонки, обрабатывают карточки «Добро Пожаловать», работают с базой данных, приглашают людей на различные мероприятия, поздравляют членов церкви с днём рождения и др.`,
    subtitle: `от 3 часов на недели`,
    icon: '',
  }, {
    title: `Оформление зала`,
    text: `Команда творческих и умелых людей занимается оформлением интерьера церкви, подготовкой к праздникам и мероприятиям`,
    subtitle: `в зависимости от проекта`,
    icon: '',
  },
])

// ------------------------------------------------------------------------------------------------------------------------------ STEP
import {ref} from 'vue'
import step from '@/assets/ministryPics/step.jpg'
import CalendarEventCard from '@/views/calendar/components/calendarEventCard.vue'
import {useCalendarEventsStore} from '@/stores/calendarStore'
import {storeToRefs} from 'pinia'

const stepText = ref(`Узнавая больше о своей уникальности!<br/><br/>
Мы верим, что каждый член церковной семьи — служитель! <br/> Бог не планировал, что участвовать в деле церкви могут только выпускники семинарий — это может делать каждый из нас! Шаг 3 предназначен для того, чтобы определить вашу уникальность, выявить ваши дары и таланты и помочь выбрать то направление или служение, которое подойдет вам лучше всего! На семинаре с помощью расширенного, многопрофильного теста, вы узнаете, как Бог может направить ваше сердце, опыт, способности, уникальность личности и духовные дары для служения другим людям.`)
const signToStep = ref(false)

const calendarEventsStore = useCalendarEventsStore()
const {allCalendarEvents} = storeToRefs(calendarEventsStore)
const filteredEvents = ref([])
const {signToEvent, unsignToEvent} = calendarEventsStore

filteredEvents.value = allCalendarEvents.value.filter(evnt => {
  if (evnt.chipValues.includes('third')) return evnt
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