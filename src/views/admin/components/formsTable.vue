<template>
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
            fixed-header
            :headers="tableHeader"
            :items="formsData"
            :search="searchText"
            height="400"
            :sort-by="[{key: 'time', order: 'desc'}]"
    >
        <template v-slot:group-header="{ item, columns, toggleGroup, isGroupOpen }">
            <tr>
                <td :colspan="columns.length">
                    <v-btn
                            size="small"
                            variant="text"
                            :prepend-icon="isGroupOpen(item) ? '$expand' : '$next'"
                            @click="toggleGroup(item)"
                    >{{ item.value }}
                    </v-btn>
                </td>
            </tr>
        </template>
        <template #item.fullName="{item}">
            <v-chip>
                <!-- item.raw.uid-->
                {{ item.raw.fullName }}
            </v-chip>
        </template>
        <template #item.answer="{item}">
            <ul>
                <li v-for="(val, key) in JSON.parse(item.raw.answer)">
                    {{ key }} : {{ val }}
                </li>
            </ul>
        </template>
    </VDataTable>
</template>

<script setup>
import {ref} from 'vue'

const searchText = ref()
defineProps({
  tableHeader: {
    required: true,
    type: Array
  },
  formsData: {
    required: true,
    type: Array
  }
})
</script>