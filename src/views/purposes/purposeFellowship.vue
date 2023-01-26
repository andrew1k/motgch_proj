<template>
  <TheCardToolbar toolbar-title="Общение" />
  <v-card max-width="900" variant="flat" class="mx-auto">
    <VCardTitle class="text-center" v-text="'Малые Группы'"/>

    <v-card elevation="3" max-width="900" class="ma-1">
      <VCardSubtitle v-text="'Здесь вы можете найти малую группу'" />
      <ListOfLeaders />
    </v-card>
    <VCardTitle class="text-center" v-text="'Крещение'"/>

    <v-card elevation="3" max-width="900" class=" ma-1">
      <VCardSubtitle v-text="'Здесь вы можете найти малую группу'" />

    </v-card>
    <VCardTitle class="text-center" v-text="'1+ 1'"/>

    <v-card elevation="3" max-width="900" class=" ma-1">
      <VCardSubtitle v-text="'Здесь вы можете найти малую группу'" />

    </v-card>
    <VCardTitle class="text-center" v-text="'Встреча-знакомство'"/>

    <v-card elevation="3" max-width="900" class="ma-1">
      <VCardSubtitle v-text="'Здесь вы можете найти малую группу'" />

    </v-card>
  </v-card>

</template>

<script setup>
import TheCardToolbar from '@/components/navigations/TheCardToolbar.vue'
import ListOfLeaders from '@/components/purposes/purposeFellowship/listOfLeaders.vue'
</script>