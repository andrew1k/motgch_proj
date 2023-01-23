<template>
  <v-navigation-drawer
    v-model="drawer"
  >
    <v-list density="comfortable" nav v-model:opened="open">
      <VListItem
        v-for="(listItem, i) in navList"
        :key="i"
        :prepend-icon="listItem.icon"
        :title="listItem.title"
        :to="listItem.routeTo"
      />
      <v-list-group value="purposes">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Цели"
          ></v-list-item>
        </template>
        <VListItem
          v-for="(purposeItem, i) in purposeNavList"
          :key="i"
          :append-icon="purposeItem.icon"
          :title="purposeItem.title"
          :to="purposeItem.routeTo"
        />
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import {useAppState} from '@/stores/appState'
import {storeToRefs} from 'pinia'
import {ref} from 'vue'

const appState = useAppState()
const {drawer} = storeToRefs(appState)

const open = ref(['purposes'])

const navList = ref([
  {
    icon: 'mdi-home',
    title: 'Главная',
    routeTo: '/',
  }, {
    icon: 'mdi-calendar',
    title: 'Календарь',
    routeTo: '/calendar',
  }, {
    icon: 'mdi-compass',
    title: 'Открой для себя церковь',
    routeTo: '/discover',
  }, {
    icon: 'mdi-clock',
    title: 'Этим воскресеньем',
    routeTo: '/sunday',
  },
])

const purposeNavList = ref([
  {
    icon: 'mdi-heart',
    title: 'Поклонение',
    routeTo: '/purposes/worship'
  },{
    icon: 'mdi-account-multiple',
    title: 'Общение',
    routeTo: '/purposes/fellowship'
  },{
    icon: 'mdi-school',
    title: 'Ученичество',
    routeTo: '/purposes/discepleship'
  },{
    icon: 'mdi-hand-heart',
    title: 'Служение',
    routeTo: '/purposes/ministry'
  },{
    icon: 'mdi-earth',
    title: 'Благовестие',
    routeTo: '/purposes/evangelism'
  },{
    icon: 'mdi-run',
    title: 'Youth',
    routeTo: '/purposes/youth'
  },
])
</script>