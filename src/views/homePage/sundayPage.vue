<template>
  <v-card max-width="1000" class="mx-auto" variant="text">
  <v-row>
    <v-col cols="12" md="8" lg="6">
      <v-responsive class="bg-green-accent-1" :aspect-ratio="16/9">
        <v-card-text>
          Video
        </v-card-text>
      </v-responsive>
    </v-col>
    <v-col cols="12" md="4" lg="6">
      <v-card-text>
        <v-card-actions>
          Notes here:
          <vSpacer />
          <v-btn @click="saveNotes" @keydown.enter="saveNotes">Сохранить себе</v-btn>
        </v-card-actions>
      </v-card-text>
      <v-textarea
        outlined
        auto-grow
        density="comfortable"
        v-model="sundayText"
        variant="outlined"
      >

      </v-textarea>
    </v-col>
  </v-row>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'

const sundayText = ref(`Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Accusantium, assumenda at
beatae debitis dolorum,
eius excepturi iure laborum nihil nobis officia quibusdam quod ratione sed, sint soluta sunt suscipit tempore vel vitae! Ab accusantium architecto aspernatur assumenda commodi, debitis distinctio dolor ex fuga iure laboriosam maiores natus nesciunt non odio officia omnis quasi quia repellat repellendus reprehenderit repudiandae rerum sit?

text________________

text________________

text________________

xte
`)
const saveNotes = () => {
  console.log(sundayText.value)
}

</script>