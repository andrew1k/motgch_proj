<template>
  <v-card>
    <v-table
      fixed-header
      hover
      height="500"
      class="bg-white"
    >
      <thead>
      <tr>
        <th>Служения</th>
        <th>Действие</th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="item in listOfministries"
        :key="item.ministryId"
      ></tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'

const listOfministries = ref([
  {
    ministryId: 1,
    ministryName: 'Прославление'
  }
])
</script>