<template>
  <v-card class="ma-2 pa-2">
    <CheckboxActionCard
      v-for="(check, i) in selectableItems"
      :key="i"
      :check-title="check.title"
      :check-value="check.value"
      :check-color="check.color"
    >
      <template v-slot:bottomCard>
        <component :is="check.component"/>
      </template>
    </CheckboxActionCard>


  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import CheckboxActionCard from '@/views/discover/views/connection/components/checkboxActionCard.vue'
import ConnectionFirstPray from '@/views/discover/views/connection/components/connectionFirstPray.vue'
import ConnectionWannaBaptism from '@/views/discover/views/connection/components/connectionWannaBaptism.vue'
import connectionOtherThings from '@/views/discover/views/connection/components/connectionOtherThings.vue'


const selectableItems = ref([
  {
    title: 'Впервые произнес Молитву покаяния',
    value: 'firstPray',
    color: 'red',
    component: ConnectionFirstPray,
  }, {
    title: 'Хочу принять водное крещение',
    value: 'baptism',
    color: 'indigo',
    component: ConnectionWannaBaptism,
  }, {
    title: 'Стать членом церкви',
    value: 'membership',
    color: 'orange',
  }, {
    title: 'Программа наставничества',
    value: 'magistr',
    color: 'orange-darken-3',
  }, {
    title: 'Присоединиться к малой группе',
    value: 'smallGroup',
    color: 'green',
  }, {
    title: 'Записаться на душепопечение', // Уточнить у Ирины
    value: 'soulHealth',
    color: 'primary',
  }, {
    title: 'Помогать церкви', // Уточнить у Натальи
    value: 'helpToChurch',
    color: 'success',
  }, {
    title: 'Записаться к пастору', // Уточнить у Маргариты
    value: 'signToPastor',
    color: 'info',
  }, {
    title: 'Молитвенная нужда', // Уточнить у Татьяны Николаевны
    value: 'prayNeeded',
    color: 'error',
  }, {
    title: 'Дргуое',
    value: 'other',
    color: 'error',
    component: connectionOtherThings
  }, {
    title: 'Оставить feedback',
    value: 'feedb ack',
    color: 'error',
    component: connectionOtherThings
  },
])
</script>