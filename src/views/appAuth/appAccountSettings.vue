<template>
  <v-card max-width="800" class="mx-auto" flat>
    <v-toolbar density="comfortable">
      <v-btn prepend-icon="mdi-chevron-left" to="/">Настройки</v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
        >
          <v-tab value="account">
            Базовые
          </v-tab>
          <v-tab value="authSettings">
            Авторизации
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <vDivider />
    <v-window v-model="tab" touch="{
      left:  () => swipe('left'),
      right: () => swipe('right')
    }">
      <v-window-item value="account">
        <v-card-text>
          <accountSettings/>
        </v-card-text>
      </v-window-item>
      <v-window-item value="authSettings">
        <v-card-text>
          <authSettings/>
        </v-card-text>
      </v-window-item>
    </v-window>

  </v-card>
</template>

<script>
import accountSettings from '@/components/accountSettings/accountSettings'
import authSettings from '@/components/accountSettings/authSettings'
import {ref} from 'vue'

export default {
  setup() {
    const tab = ref('account')
    const swipe = (direction) => {
      if (direction === 'left') {
        tab.value = 'authSettings'
      } else if (direction === 'right') {
        tab.value = 'account'
      }
    }
    return {
      tab,
      swipe,
    }
  },
  components: {
    accountSettings,
    authSettings,
  },
}
</script>

<style scoped>

</style>