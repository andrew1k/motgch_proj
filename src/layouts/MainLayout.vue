<template>
  <TheAppBar/>
  <TheBottomNavigation />
  <v-main>
      <routerView/>
  </v-main>
</template>

<script setup>
import TheAppBar from '@/components/navigations/TheAppBar'
import TheBottomNavigation from '@/components/navigations/TheBottomNavigation'
// import {useDisplay} from 'vuetify'
//
// const {smAndDown} = useDisplay()

</script>