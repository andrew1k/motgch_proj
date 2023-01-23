<template>
  <v-card v-if="savedNotes" max-width="1000" class="mx-auto pa-1" variant="text">
    <v-card-text>
      Your notes:
    </v-card-text>
    <vDivider />
    <v-card v-for="note in savedNotes" :key="note.nateId" max-width="1000" class="mx-auto" variant="text">
      <v-card-text>
        <v-card-actions>
          {{ note.noteName }}
          <vSpacer />
          <vBtn icon="mdi-pencil"/>
        </v-card-actions>
      </v-card-text>
      <vDivider />
    </v-card>
  </v-card>
  <v-card v-else max-width="1000" class="mx-auto" variant="text">
    <v-card-text>
      There is no any notes
    </v-card-text>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'

const savedNotes = ref([
  {
    noteId: 1,
    noteName: 'date of Sunday',
  },{
    noteId: 2,
    noteName: 'date of Sunday 2',
  },{
    noteId: 3,
    noteName: 'date of Sunday 3',
  },
])


</script>