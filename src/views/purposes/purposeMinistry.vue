<template>
  <TheCardToolbar toolbar-title="Служение" toolbar-color="brown" />
  <v-card max-width="900" variant="text" class="mx-auto" elevation="0">
    <VCardTitle class="mt-6" v-text="'Наши служения'"/>
    <v-card elevation="5" class="ma-2" rounded="xl">
      <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eum explicabo harum incidunt laudantium neque rerum vel veniam. Debitis hic iure perferendis quo? Ad animi architecto aut, commodi culpa dolorem ducimus enim facere fugit incidunt ipsa ipsam ipsum maxime minus nihil nulla obcaecati odio quas repudiandae rerum sint ut vel?</v-card-text>
    </v-card>
  </v-card>
</template>

<script setup>
import TheCardToolbar from '@/components/navigations/TheCardToolbar.vue'

</script>