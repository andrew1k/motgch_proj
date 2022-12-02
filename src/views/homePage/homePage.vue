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
      <v-card theme="light" color="info" to="/sunday" append-icon="mdi-broadcast">
        <v-card-title>Sunday</v-card-title>
      </v-card>
    </v-col>
    <v-col>
      <v-card theme="light" color="success" to="/connection" append-icon="mdi-human-greeting">
        <v-card-title >Connection</v-card-title>
      </v-card>
    </v-col>
  </v-row>
  <v-row >
    <v-col>
      <v-card theme="light" color="primary" to="/myNotes" append-icon="mdi-note">
        <v-card-title>Notes</v-card-title>
      </v-card>
    </v-col>
    <v-col>
      <v-card theme="light" color="warning" to="/givingCard" append-icon="mdi-hand-heart">
        <v-card-title >Giving</v-card-title>
      </v-card>
    </v-col>
  </v-row>
  <v-row >
    <v-col>
      <v-card theme="light" color="brown" to="/calendar" append-icon="mdi-calendar">
        <v-card-title>Calendar</v-card-title>
      </v-card>
    </v-col>
    <v-col>
      <v-card theme="light" color="error" to="/discover" append-icon="mdi-compass">
        <v-card-title >Discover</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>

</script>