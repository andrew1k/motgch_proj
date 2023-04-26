<template>
  <VCardTitle v-text="'Молитвенное служение'" class="mt-4"/>
  <v-card class="ma-2">
    <LiteYouTubeEmbed playlist="true" title="Молитвенное служение" id="PLjjvxd6WcKV04vM9MkM6Gd69-qdkzpRbj" playlistCoverId="MbRwC0jjPPw" />
  </v-card>
  <VCardTitle  v-text="'Прославление МБВ'" class="mt-4" />
  <v-card class="ma-2">
    <LiteYouTubeEmbed playlist="true" title="Прославление МБВ" id="PLjjvxd6WcKV0Vae-XkzPV_bOmJWB1iWU3" playlistCoverId="DwtauHFjSTQ" />
  </v-card>
</template>

<script setup>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
</script>