<template>
  <v-card variant="text" elevation="0" class="ma-2" title="Create new SG leader">
    <VTextField label="leader" v-model="leader"/>
    <VTextField label="ageVal" v-model="ageVal"/>
    <VTextField label="day" v-model="day"/>
    <VTextField label="subway" v-model="subway"/>
    <VTextField label="type" v-model="type"/>
    <v-card-actions>
      <VSpacer />
      <v-btn
        variant="flat"
        @click="createNewSGLeader({leader, ageVal, day, subway, type})"
      >Create</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {useSGLeadersTable} from '@/stores/dataTablesStore'
import {ref} from 'vue'

const leader = ref('')
const ageVal = ref('')
const day = ref('')
const subway = ref('')
const type = ref('')
const {createNewSGLeader} = useSGLeadersTable()
</script>