<template>
  <v-row>
    <v-col cols="12" sm="12" md="8" lg="6">
    <v-card flat max-width="800" class="mx-auto">
      <v-responsive :aspect-ratio="16/9">
        Calendar
      </v-responsive>
    </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <v-card flat>
        <v-responsive :aspect-ratio="3">
          Question of the Day or Daily Verse
        </v-responsive>
      </v-card>
    </v-col>
  </v-row>
  <v-row >
    <v-col>
      <v-card color="info" to="/sunday">
        <v-card-actions>
          <vSpacer />
          <vIcon icon="mdi-broadcast"/>
        </v-card-actions>
        <v-card-title>Sunday</v-card-title>
      </v-card>
    </v-col>
    <v-col>
      <v-card color="success" to="/connection">
        <v-card-actions>
          <vSpacer />
          <vIcon icon="mdi-human-greeting"/>
        </v-card-actions>
        <v-card-title >Connection</v-card-title>
      </v-card>
    </v-col>
  </v-row>
  <v-row >
    <v-col>
      <v-card color="primary" to="/myNotes">
        <v-card-actions>
          <vSpacer />
          <vIcon icon="mdi-note"/>
        </v-card-actions>
        <v-card-title>Notes</v-card-title>
      </v-card>
    </v-col>
    <v-col>
      <v-card color="warning" to="/givingCard">
        <v-card-actions>
          <vSpacer />
          <vIcon icon="mdi-hand-heart" />
        </v-card-actions>
        <v-card-title >Giving</v-card-title>
      </v-card>
    </v-col>
  </v-row>
  <v-row >
    <v-col>
      <v-card color="brown" to="/calendar">
        <v-card-actions>
          <vSpacer />
          <vIcon icon="mdi-calendar"/>
        </v-card-actions>
        <v-card-title>Calendar</v-card-title>
      </v-card>
    </v-col>
    <v-col>
      <v-card color="error" to="/discover">
        <v-card-actions>
          <vSpacer />
          <vIcon icon="mdi-compass" />
        </v-card-actions>
        <v-card-title >Discover</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>

</script>