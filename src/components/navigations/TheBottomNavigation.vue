<template>
<v-bottom-navigation density="comfortable" elevation="2" grow v-if="smAndDown">
  <vBtn icon="mdi-home" to="/" />
  <vBtn icon="mdi-calendar" to="/calendar" />
  <vBtn icon="mdi-magnify" to="/discover" class=""/>
  <vBtn icon="mdi-menu" />
</v-bottom-navigation>
</template>

<script>
import {useDisplay} from 'vuetify'
export default  {
  setup() {
    const {smAndDown} = useDisplay()
    return {
      smAndDown
    }
  }
}
</script>

<style scoped>

</style>