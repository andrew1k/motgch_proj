<template>
  <v-snackbar
    v-model="snackbar"
    multi-line
    location="top"
    v-if="message"
  >{{message}}</v-snackbar>
  <v-main>
    <v-container class="py-0 my-0 px-0 px-md-2 px-lg-2 px-xl-16">
      <router-view />
    </v-container>
  </v-main>
</template>

<script>
import store from '@/store'
import {computed, ref} from 'vue'
export default {
  setup() {
    let message = computed(() => store.getters['errors/getErrorMessage'])
    const snackbar = ref(true)
    return {
      message,
      snackbar,
    }
  },
}
</script>

<style scoped>

</style>