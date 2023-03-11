<template>
  <v-card-title class="mt-2">В это воскресенье</v-card-title>
  <v-card @click="$router.push('/sunday')" class="ma-2">
    <LiteYouTubeEmbed id="NlmMjY86g80" title="sunday" />
  </v-card>
  <v-card-text>
    <h4 class="font-weight-light">Преображение взаимоотношений. Как противостоять страхам, которые разрушают взаимоотношения</h4>
  </v-card-text>
</template>

<script setup>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
</script>