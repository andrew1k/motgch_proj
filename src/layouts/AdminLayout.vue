<template>
    <TheCardToolbar toolbar-title="admin" toolbar-color="black" />
    <v-main>
        <v-card elevation="0" variant="text" rounded="0" class="mx-auto">
            <router-view />
        </v-card>
    </v-main>
</template>

<script setup>
import TheCardToolbar from '@/components/navigations/TheCardToolbar.vue'

</script>


<style scoped>

</style>