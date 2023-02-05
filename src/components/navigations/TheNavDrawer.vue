<template>
  <v-navigation-drawer
    v-model="drawer"
  >
    <v-list density="comfortable" nav color="primary">
      <v-list-item
        v-for="(listItem, i) in navList"
        :key="i"
        :title="listItem.title"
        :to="listItem.routeTo"
        rounded="pill"
      >
        <template v-slot:prepend>
          <v-icon :icon="listItem.icon" :color="listItem.color" />
        </template>
      </v-list-item>
      <VDivider />
        <v-list-item
          v-for="(purposeItem, i) in purposeNavList"
          :key="i"
          :title="purposeItem.title"
          :to="purposeItem.routeTo"
          rounded="pill"
        >
          <template v-slot:prepend>
            <v-icon :icon="purposeItem.icon" :color="purposeItem.color" />
          </template>
        </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-card-actions>
        <VSpacer />
        <v-card variant="tonal" elevation="0" density="compact" to="/" color="primary" prepend-icon="mdi-gift" title="Пожертвовать"/>
        <VSpacer/>
      </v-card-actions>
      <VDivider />
      <v-card-actions>
        <VSpacer/>
        <v-btn icon="mdi-instagram" color="success"></v-btn>
        <v-btn icon="mdi-youtube" color="error"></v-btn>
        <v-btn icon="mdi-telegram" color="info"></v-btn>
        <VSpacer/>
      </v-card-actions>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import {useAppState} from '@/stores/appState'
import {storeToRefs} from 'pinia'
import {ref} from 'vue'

const appState = useAppState()
const {drawer} = storeToRefs(appState)

const navList = ref([
  {
    icon: 'mdi-home',
    color: 'black',
    title: 'Главная',
    routeTo: '/',
  }, {
    icon: 'mdi-calendar',
    color:  'pink',
    title: 'Календарь',
    routeTo: '/calendar',
  }, {
    icon: 'mdi-compass',
    color: 'indigo',
    title: 'Открой для себя церковь',
    routeTo: '/discover',
  }, {
    icon: 'mdi-clock',
    color: 'cyan',
    title: 'В это воскресенье',
    routeTo: '/sunday',
  },
])

const purposeNavList = ref([
  {
    icon: 'mdi-heart',
    color: 'red',
    title: 'Поклонение',
    routeTo: '/purposes/worship'
  },{
    icon: 'mdi-account-multiple',
    color: 'orange',
    title: 'Общение',
    routeTo: '/purposes/fellowship'
  },{
    icon: 'mdi-school',
    color: 'green',
    title: 'Ученичество',
    routeTo: '/purposes/discepleship'
  },{
    icon: 'mdi-hand-heart',
    color: 'brown',
    title: 'Служение',
    routeTo: '/purposes/ministry'
  },{
    icon: 'mdi-earth',
    color: 'blue',
    title: 'Благовестие',
    routeTo: '/purposes/evangelism'
  },{
    icon: 'mdi-run',
    color: 'purple',
    title: 'МБВ.Youth',
    routeTo: '/purposes/youth'
  },
])
</script>