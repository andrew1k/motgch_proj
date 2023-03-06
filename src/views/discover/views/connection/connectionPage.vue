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
    title: 'Хочу наставника',
    value: 'magistr',
    color: 'orange-darken-3',
  }, {
    title: 'Хочу в малую группу',
    value: 'smallGroup',
    color: 'green',
  }, {
    title: 'Записаться на душепопечение',
    value: 'soulHealth',
    color: 'primary',
  }, {
    title: 'Помогать церкви',
    value: 'helpToChurch',
    color: 'success',
  }, {
    title: 'Хочу на шаг1',
    value: 'stepOne',
    color: 'warning',
  }, {
    title: 'Записаться к пастору',
    value: 'signToPastor',
    color: 'info',
  }, {
    title: 'Молитвенная нужда',
    value: 'prayNeeded',
    color: 'error',
  }, {
    title: 'Дргуое',
    value: 'prayNeeded',
    color: 'error',
    component: connectionOtherThings
  },
])
</script>