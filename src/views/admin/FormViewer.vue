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
                density="compact"
                items-per-page="100"
                :group-by="[{key: 'from'}]"
                v-model="selectedTable"
                fixed-header
                :headers="tableHeader"
                :items="formsData"
                :search="searchText"
                height="400"
                :sort-by="[{key: 'time', order: 'desc'}]"
        >
            <template #item="{item}">
                <v-chip>
                    {{item.row.fullName}}
                </v-chip>
            </template>
        </VDataTable>
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
</script>