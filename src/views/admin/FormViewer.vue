<template>
    <v-card class="ma-2">
        <v-tabs v-model="tab">
            <v-tab value="start" variant="text" rounded="0">Начало</v-tab>
            <v-tab value="forms" variant="text" rounded="0">Формы</v-tab>
            <v-tab value="fellowship" variant="text" rounded="0">Общение</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item value="start">
                <v-card-title>Таблицы заполненных форм</v-card-title>
            </v-window-item>
            <v-window-item value="forms" @group:selected="getForms('forms')">
                <FormsTable :table-header="tableHeader" :forms-data="formsData.forms" />
            </v-window-item>
            <v-window-item value="fellowship" @group:selected="getForms('fellowship')">
                <FormsTable :table-header="tableHeader" :forms-data="formsData.fellowship" />
            </v-window-item>
        </v-window>
    </v-card>
</template>

<script setup>
import {ref} from 'vue'
import {useFormsStore} from '@/stores/formsStore'
import {storeToRefs} from 'pinia'
import FormsTable from '@/views/admin/components/formsTable.vue'

const formsStore = useFormsStore()
const {getForms} = formsStore
const {formsData} = storeToRefs(formsStore)
const selectedTable = ref()
const searchText = ref()

const tableHeader = ref([
  {
    title: 'Время',
    key: 'time',
  }, {
    title: 'Имя',
    key: 'fullName',
  }, {
    title: 'Возраст',
    key: 'age',
  }, {
    title: 'Телефон',
    key: 'phoneNumber',
  }, {
    title: 'Ответ',
    key: 'answer',
  },
])
const tab = ref('start')
</script>