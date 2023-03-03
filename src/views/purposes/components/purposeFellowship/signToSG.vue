<template>
  <VSelect
    v-model="selectFrom"
    :items="selectForm"
    multiple
    :item-value="value"
    :item-title="title"
    label="Откуда вы узнали о малых группах?"
    variant="outlined"
    class="mx-2 mt-4"
  />
  <VTextField
    v-model="ageToSign"
    variant="outlined"
    type="Number"
    class="ma-2"
    label="Ваш возраст"
  />
  <VTextField
    label="Район, где вам удобно посещать Малую Группу"
    v-model="sgDistrict"
    variant="outlined"
    class="ma-2"
  />
  <VDivider />
  <v-card-text>Ниже вы можете ознакомиться с группами и выбрать подходящую или просто нажмите присоединиться. Вы можете воспользоваться поиском или сортировкой нажав на нужную вам категорию</v-card-text>
  <VTextField
    prepend-inner-icon="mdi-magnify"
    v-model="searchText"
    label="Поиск по ведущему, метро, возрасту"
    variant="outlined"
    class="ma-2"
  />
  <VDataTableVirtual
    v-model="selectedTable"
    show-select
    fixed-header
    :headers="tableHeader"
    :items="sgLeadersData"
    :search="searchText"
    height="300"
    must-sort
  />
  <v-card-actions>
    <VBtn icon="mdi-chevron-left" density="comfortable" color="secondary" variant="flat" @click="$emit('goBack')"/>
    <VSpacer />
    <v-btn variant="flat" color="secondary"  elevation="0">Присоединиться</v-btn>
  </v-card-actions>
</template>

<script setup>
import {ref, defineEmits} from 'vue'
import {useSGLeadersTable} from '@/stores/dataTablesStore'
import {storeToRefs} from 'pinia'

const sgLeadersTable = useSGLeadersTable()
const {getSGLeaders} = sgLeadersTable
getSGLeaders()
const {sgLeadersData} = storeToRefs(sgLeadersTable)


const searchText = ref()

const selectForm = ref([
  {title: 'Соц.Сети церкви', value:'socials'},
  {title: 'Услышали на служении в церкви', value:'heard'},
  {title: 'Узнали от друзей', value:'friends'},
  {title: 'Увидели листовку', value:'list'},
  {title: 'На шаге 1 или 2', value:'steps'},
  {title: 'На сайте', value:'site'},
  {title: 'Другое', value:'other'}
])

const selectFrom = ref([])
const ageToSign = ref('')
const sgDistrict =ref('')
const selectedTable = ref([])

const tableHeader = ref([
  {
    title: 'Метро',
    align: 'start',
    sortable: true,
    key: 'subway'
  },{
    title: 'Ведущий',
    align: 'start',
    sortable: true,
    key: 'leader'
  },{
    title: 'День',
    align: 'start',
    sortable: true,
    key: 'day'
  },{
    title: 'Возраст',
    align: 'start',
    sortable: true,
    key: 'ageVal'
  },{
    title: 'Тип',
    align: 'start',
    sortable: true,
    key: 'type'
  },
])

defineEmits(['goBack'])
</script>