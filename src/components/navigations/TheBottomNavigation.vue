<template>
  <v-bottom-navigation
    density="comfortable"
    elevation="3"
    grow
    color="primary"
  >
    <v-btn to="/"><v-icon>mdi-home</v-icon>Главная</v-btn>
    <v-btn to="/calendar"><v-icon>mdi-calendar</v-icon>Календарь</v-btn>
    <v-btn to="/discover"><v-icon>mdi-compass</v-icon>Открой церковь</v-btn>
  </v-bottom-navigation>
</template>

<script setup>

</script>