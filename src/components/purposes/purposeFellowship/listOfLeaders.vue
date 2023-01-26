
<template>

  <v-text-field v-model="searchText" label="search"/>
  <VDataTable
    fixed-header
    :headers="tableHeader"
    :items="data"
    :search="searchText"
    items-per-page="25"
    must-sort
  >
  </VDataTable>



</template>

<script setup>
import {ref} from 'vue'

const searchText = ref()

// const write = (raw) => {
//   console.log(raw)
// }

const tableHeader = ref([
  {
    fixed: true,
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

const data = ref([
  {
    id: 1,
    subway: 'Дыбенко',
    day: 'Понедельник',
    ageVal: '21-35',
    type: 'Общая',
    leader: 'Я',
  },{
    id: 2,
    subway: 'Большевиков',
    day: 'Вторник',
    ageVal: '35',
    type: 'Женская',
    leader: 'Ты',
  },{
    id: 3,
    subway: 'Большевиков',
    day: 'Четверг',
    ageVal: '',
    type: 'Молодежная',
    leader: 'Он',
  },
])
</script>