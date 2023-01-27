<template>
  <VTextField
    prepend-inner-icon="mdi-magnify"
    v-model="searchText"
    label="Поиск по ведущему, метро, возрасту"
    variant="outlined"
    class="ma-2"
  />
  <VDataTable
    fixed-header
    :headers="tableHeader"
    :items="sgLeadersData"
    :search="searchText"
    items-per-page="25"
    must-sort
  />
</template>

<script setup>
import {ref} from 'vue'
import {useSGLeadersTable} from '@/stores/dataTablesStore'
import {storeToRefs} from 'pinia'
const sgLeadersTable = useSGLeadersTable()
const {getSGLeaders} = sgLeadersTable
getSGLeaders()
const {sgLeadersData} = storeToRefs(sgLeadersTable)

const searchText = ref()

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
</script>