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
          <th class="text-center">Метро</th>
          <th class="text-left">День</th>
          <th class="text-left">Возраст</th>
          <th class="text-left">Тип</th>
          <th class="text-left">Ведущий</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.metro }}</td>
          <td>{{ item.day }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.leader }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'

const data = ref([
  {
    id: 1,
    metro: 'Дыбенко',
    day: 'Понедельник',
    age: '21-35',
    type: 'Общая',
    leader: 'Я',
  },{
    id: 2,
    metro: 'Большевиков',
    day: 'Вторник',
    age: '35',
    type: 'Женская',
    leader: 'Ты',
  },{
    id: 2,
    metro: 'Большевиков',
    day: 'Четверг',
    age: '',
    type: 'Молодежная',
    leader: 'Он',
  },
])
</script>