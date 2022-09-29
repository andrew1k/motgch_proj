<template>
  <v-card max-width="800" class="mx-auto" elevation="1" color="basil">
    <v-toolbar density="comfortable">
      <v-btn prepend-icon="mdi-chevron-left" to="/">Настройки</v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="tab"

        >
          <v-tab value="account">
            Options
          </v-tab>
          <v-tab value="authSettings">
            Auth
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
      <v-window v-model="tab">
        <v-window-item value="account">
          <v-card flat>
            <accountSettings />
          </v-card>
        </v-window-item>
        <v-window-item value="authSettings">
          <v-card flat>
            <authSettings />
          </v-card>
        </v-window-item>
      </v-window>

  </v-card>
</template>

<script>
import accountSettings from '@/components/accountSettings/accountSettings'
import authSettings from '@/components/accountSettings/authSettings'
import {ref} from 'vue'
export default {
  setup () {
    const tab = ref('account')
    return {
      tab,
    }
  },
  components: {
    accountSettings,
    authSettings,
  }
}
</script>

<style scoped>

</style>