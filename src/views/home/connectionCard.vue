<template>
  <TheCardToolbar toolbar-title="Связаться с церковью"/>
  <v-card
    max-width="1000"
    class="mx-auto ma-1"
    variant="text"
  >
    <v-card-actions >
      <VCardTitle v-text="`Связаться с церковью`"/>
      <VSpacer />
      <VBtn href="https://www.youtube.com/@120SPD" color="red" icon="mdi-youtube"/>
      <VBtn href="https://instagram.com" color="purple" icon="mdi-instagram"/>
      <VBtn href="" color="blue" icon="mdi-telegram"/>
      <VBtn href="" color="black" icon="mdi-phone"/>
    </v-card-actions>
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

    <v-form >
      <v-textarea
        class="ma-1"
        variant="outlined"
        label="Ваш вопрос, молитвенная нужда, просьба"
        v-model="connectionFinalQuestion"
      >

      </v-textarea>
      <v-card-actions>
        <VSpacer />
        <v-btn variant="outlined" @click="sendConnectionForm(connectionFinalQuestion)">Отправить</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import TheCardToolbar from '@/components/navigations/TheCardToolbar.vue'
import CheckboxActionCard from '@/components/connectionCard/checkboxActionCard.vue'
import ConnectionFirstPray from '@/components/connectionCard/connectionFirstPray.vue'
import ConnectionWannaBaptism from '@/components/connectionCard/connectionWannaBaptism.vue'


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
  },
])
</script>