<template>
  <!--  <router-link :to="{ name: 'newsPage', params: { id }}" class="text-decoration-none">-->
  <!--    <v-card class="ma-2">-->
  <!--      <div class="d-flex">-->
  <!--        <div>-->
  <!--          <v-avatar size="125" rounded="xl" class="ma-1">-->
  <!--            <VImg :src="img"/>-->
  <!--          </v-avatar>-->
  <!--        </div>-->
  <!--        <div class="d-flex flex-column">-->
  <!--          <v-card-text class="ma-0 px-0">-->
  <!--            <h2 class="mx-3" v-html="title"/>-->
  <!--            <VCardItem :prepend-avatar="leaderUrl" :title="leaderName" subtitle="25 min ago"/>-->
  <!--          </v-card-text>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </v-card>-->
  <!--  </router-link>-->


  <v-card class="ma-2" :to="{ name: 'newsPage', params: { id }}">
    <v-container class="ma-0 pa-0">
      <v-row>
        <v-col cols="4">
          <v-card elevation="0">
            <VImg :src="img"/>
          </v-card>
        </v-col>
        <v-col cols="8" class="d-flex flex-column">
          <VCardTitle class="ma-0 px-0 pt-1" v-text="title"/>
          <v-card-actions class="mx-0 pa-0 mt-auto">
            <v-card-subtitle class="ma-0 pa-0">25 min ago</v-card-subtitle>
            <VSpacer/>
            <VIcon class="mx-3" icon="mdi-chevron-right"/>
          </v-card-actions>
          <!--      <VCardItem class="mx-0 pa-0 mt-auto" :prepend-avatar="leaderUrl" :subtitle="leaderName" density="compact" />-->
        </v-col>
      </v-row>
    </v-container>
  </v-card>

  <!--  <v-card class="ma-2" :to="{name: 'newsPage', params: { id }}">-->
  <!--    <v-img :src="img" class="align-end" cover height="150">-->
  <!--      <VCardTitle class="text-white font-weight-bold" v-text="title"/>-->
  <!--    </v-img>-->
  <!--  </v-card>-->
</template>

<script setup>
import {defineProps} from 'vue'

defineProps({
  title: {
    type: String,
  },
  img: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  leaderName: {
    type: String,
  },
  leaderUrl: {
    type: String,
  },
})
</script>