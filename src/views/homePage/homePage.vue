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
        <v-responsive :aspect-ratio="16/9">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor earum, explicabo natus nisi numquam.
        </v-responsive>
      </v-card>
    </v-col>
  </v-row>
  <v-row >
    <v-col>
      <v-card color="info">
        <v-card-title>Sunday</v-card-title>
      </v-card>
    </v-col>
    <v-col>
      <v-card color="success" >
        <v-card-title >Connection</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style scoped>

</style>