<template>
  <v-card-actions>
    <v-card-title>Small Groups</v-card-title>
    <vSpacer/>
    <v-btn>Join</v-btn>
  </v-card-actions>
  <v-card-text>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur quasi.
  </v-card-text>

  <vDivider/>
  <v-tabs v-model="listOrMap" density="comfortable" hide-slider>
    <vTab value="list" title="Список"/>
    <vSpacer/>
    <vTab value="map" title="Карта" />
  </v-tabs>
  <v-window v-model="listOrMap">
    <v-window-item v-for="tab in sgTabs" :key="tab.id" :value="tab.id">
      <component :is="tab.component"/>
    </v-window-item>
  </v-window>
</template>

<script setup>
import {ref} from 'vue'
import listOfLeaders from '@/components/discoverWindows/discoverSmallGroupsComponents/listOfLeaders'
import mapOfLeaders from '@/components/discoverWindows/discoverSmallGroupsComponents/mapOfLeaders'

const listOrMap = ref('list')
const sgTabs = ref([
  {
    id: 'list',
    component: listOfLeaders,
  }, {
    id: 'map',
    component: mapOfLeaders,
  },
])
</script>