<template>
    <v-card class="ma-2" :to="{name: 'prayPage'}">
        <v-container class="ma-0 pa-0">
            <v-row>
                <v-col cols="4">
                    <v-card elevation="0">
                        <VImg :src="prayhelp"/>
                    </v-card>
                </v-col>
                <v-col cols="8" class="d-flex flex-column">
                    <VCardTitle class="ma-0 px-0 pt-1" v-text="'Молитвенная поддержка'"/>
                    <v-card-actions class="mx-0 pa-0 mt-auto">
                        <VSpacer/>
                        <VIcon class="mx-3" icon="mdi-chevron-right"/>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script setup>
import prayhelp from '@/assets/pinnedNews/prayhelp.jpg'
</script>