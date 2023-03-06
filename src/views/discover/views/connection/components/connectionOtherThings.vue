<template>
  <v-form>
    <VTextarea
      rows="3"
      class="ma-1"
      variant="outlined"
      label="Ваш вопрос, молитвенная нужда, просьба"
      v-model="connectionFinalQuestion"
    />
    <v-card-actions>
      <VSpacer/>
      <v-btn variant="text" @click="sendConnectionForm(connectionFinalQuestion)">Отправить</v-btn>
    </v-card-actions>
  </v-form>
</template>

<script setup>

</script>