<template>
    <the-card-toolbar toolbar-title="Назад" toolbar-color="worship"/>
    <v-card class="ma-2">
        <VImg :src="prayhelp"/>
    </v-card>
    <v-card class="ma-2">
        <VCardTitle class="text-red-darken-2 font-weight-bold" v-html="'Каждый день молимся за вас'"/>
        <VCardText v-html="`Наша команда молится каждый день напишите нам, и это сообще придет им напрямую.
<br/>
<br/>
 Если вы хотите отправить анонимную форму, то перед заполнением нажмите на галочку 'Сделать анонимным' и мы не будем собирать от вас никаких данных`"/>
        <v-form @submit="sendForm('forms',{text, anon}, 'Молитвенная помощь')">
            <v-checkbox hide-details color="worship" label="Сделать анонимным" v-model="anon" />
            <VTextarea v-model="text" class="ma-2" label="Ваша просьба" />
            <v-card-actions>
                <VSpacer />
                <v-btn type="submit" color="worship">Отправить</v-btn>
            </v-card-actions>
        </v-form>
    </v-card>

</template>

<script setup>
import {ref} from 'vue'
import prayhelp from '@/assets/pinnedNews/prayhelp.jpg'
import {useFormsStore} from '@/stores/formsStore'
import TheCardToolbar from '@/components/navigations/TheCardToolbar.vue'
const text = ref('')
const anon = ref(false)

const {sendForm} = useFormsStore()
</script>