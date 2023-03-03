<template>
  <VCardTitle v-text="'Разбор Библии | Даниил Шатров'" class="mt-4"/>
  <v-card class="ma-2">
    <LiteYouTubeEmbed playlist="true" title="Разбор Библии | Даниил Шатров" id="PLjjvxd6WcKV0y6SrODLnJBOWYaUjzTHfE" playlistCoverId="CJOmxv5D8dg" />
  </v-card>
  <VCardTitle  v-text="'Библейская школа | онлайн'" class="mt-4" />
  <v-card class="ma-2">
    <LiteYouTubeEmbed playlist="true" title="Библейская школа | онлайн" id="PLjjvxd6WcKV2oN8Gv8aIvdZ657hLS_KNR" playlistCoverId="W9oUvW2VdTA" />
  </v-card>
</template>

<script setup>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
</script>