<template>
<v-card>
    <VTextField
            prepend-inner-icon="mdi-magnify"
            v-model="searchText"
            label="Поиск"
            variant="outlined"
            class="ma-2"
    />
    <VDataTable
            v-model="selectedTable"
            fixed-header
            :headers="tableHeader"
            :items="formsData"
            :search="searchText"
            height="400"
            must-sort
    />
</v-card>
</template>

<script setup>
import {ref} from 'vue'
import {useFormsStore} from '@/stores/formsStore'
import {storeToRefs} from 'pinia'

const formsStore = useFormsStore()
const {getForms} = formsStore
getForms()
const {formsData} = storeToRefs(formsStore)
const selectedTable = ref()
const searchText = ref()

const tableHeader = ref([
  {

  }
])
// const tableHeader = ref([
//   {
//     title: 'Имя',
//     align: 'start',
//     sortable: true,
//     key: 'firstName',
//   }, {
//     title: 'Ведущий',
//     align: 'start',
//     sortable: true,
//     key: 'leader',
//   }, {
//     title: 'День',
//     align: 'start',
//     sortable: true,
//     key: 'day',
//   }, {
//     title: 'Возраст',
//     align: 'start',
//     sortable: true,
//     key: 'ageVal',
//   }, {
//     title: 'Тип',
//     align: 'start',
//     sortable: true,
//     key: 'type',
//   },
// ])
</script>