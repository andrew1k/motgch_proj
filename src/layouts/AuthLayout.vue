<template>
  <v-main class="bg-amber-lighten-5 ">
    <v-container class="px-0 px-md-2 px-lg-2 px-xl-16">
      <v-snackbar
        v-model="snackbar"
        multi-line
        location="top"
        v-if="message"
      >
        {{message}}
      </v-snackbar>
      <router-view/>
    </v-container>
  </v-main>
</template>

<script>
import { computed, ref } from 'vue'
import store from '@/store'

export default {
  setup() {
    let message = computed(() => store.getters['errors/getErrorMessage'])
    const snackbar = ref(true)
    return {
      message,
      snackbar,
    }
  }
}
</script>