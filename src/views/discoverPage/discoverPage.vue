<template>
<v-card max-width="1000" class="mx-auto" variant="text">
  <v-tabs align-tabs="center" v-model="tabs" density="comfortable">
    <v-tab
      v-for="tab in discoverTabs"
      :key="tab.tabId"
      :value="tab.tabId"
    >
      {{ smAndDown ? '' : tab.tabValue }}
      <vIcon v-if="smAndDown" :icon="tab.tabIcon" />
    </v-tab>
  </v-tabs>
  <v-window v-model="tabs">
    <v-card min-height="600" variant="text">
    <v-window-item v-for="tab in discoverTabs" :key="tab.tabId" :value="tab.tabId">
        <component :is="tab.tabComponent" />
    </v-window-item>
    </v-card>
  </v-window>

</v-card>
</template>

<script setup>
import {ref} from 'vue'
import {useDisplay} from 'vuetify'
import discoverSmallGroups from '@/components/discoverWindows/discoverSmallGroups'
import discoverServings from '@/components/discoverWindows/discoverServings'
import discoverMinistries from '@/components/discoverWindows/discoverMinistries'

const {smAndDown} = useDisplay()

const tabs = ref(null)
const discoverTabs = ref([
  {
    tabId: 1,
    tabValue: 'SG',
    tabIcon: 'mdi-home-heart',
    tabComponent: discoverSmallGroups,
  },{
    tabId: 2,
    tabValue: 'Servings',
    tabIcon: 'mdi-hand-heart',
    tabComponent: discoverServings,
  },{
    tabId: 3,
    tabValue: 'Ministries',
    tabIcon: 'mdi-tag-heart',
    tabComponent: discoverMinistries,
  },
])
</script>