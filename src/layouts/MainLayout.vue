<template>
  <v-snackbar
    v-model="snackbar"
    multi-line
    location="top"
    v-if="message"
  >{{message}}</v-snackbar>
  <theAppBar/>
  <theBottomNavigation />
  <v-main>
    <v-container>
      <routerView />
    </v-container>
  </v-main>
</template>

<script>
import theAppBar from '@/components/navigations/TheAppBar'
import theBottomNavigation from '@/components/navigations/TheBottomNavigation'
import {computed, ref} from 'vue'
import store from '@/store'

export default {
  setup() {
    let message = computed(() => store.getters['errors/getErrorMessage'])
    const snackbar = ref(true)
    return {
      message,
      snackbar,
    }
  },
  components: {
    theAppBar,
    theBottomNavigation,
  },
}
</script>

<style scoped>

</style>