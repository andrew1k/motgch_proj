<template>
  <v-card-title>Открой для себя церковь</v-card-title>
  <v-card
    class="mx-2 my-4"
    v-for="(card, i) in purposesCards"
    :key="i"
    @click="$router.push(card.routerTo)"
    rounded="xl"
  >
    <v-card-actions>
      <VAvatar class="mx-3" :image="card.img" rounded="0" />
      <VCardItem :title="card.title" :subtitle="card.subtitle"/>
    </v-card-actions>
<!--    <VCardText v-text="card.text" />-->
  </v-card>
</template>

<script setup>
import worship from '@/assets/icons/worship.svg'
import evangelism from '@/assets/icons/evangelism.svg'
import discepleship from '@/assets/icons/discepleship.svg'
import ministry from '@/assets/icons/ministry.svg'
import fellowship from '@/assets/icons/fellowship.svg'
const purposesCards = [
  {
    title: 'ПОКЛОНЕНИЕ',
    subtitle: 'Мы Бога Восхваляем!',
    img: worship,
    text: 'Возлюби Господа Бога твоего всем сердцем твоим. Матфея 22:37',
    routerTo: '/purposes/worship',
    color: '#015366 '
  },{
    title: 'ОБЩЕНИЕ',
    subtitle: 'Можем больше вместе!',
    img: fellowship,
    text: `И они постоянно пребывали ... в общении Деяния 2:42`,
    routerTo: '/purposes/fellowship',
    color: '#0093b7 '
  },{
    title: 'УЧЕНИЧЕСТВО',
    subtitle: 'Мы будем возрастать!',
    img: discepleship,
    text: 'И они постоянно пребывали в учении Апостолов. Деяния 2:42',
    routerTo: '/purposes/discepleship',
    color: '#a0c5cf'
  },{
    title: 'СЛУЖЕНИЕ',
    subtitle: 'Место больших возможностей!',
    img: ministry,
    text: 'Разделяли всем, смотря по нужде каждого. Деяния 2:45',
    routerTo: '/purposes/ministry',
    color: '#e6eceb'
  },{
    title: 'БЛАГОВЕСТИЕ',
    subtitle: 'Мы благовествуем всем!',
    img: evangelism,
    text: 'Господь же ежедневно прилагал спасаемых к Церкви. Деяния 2:47',
    routerTo: '/purposes/evangelism',
    color: '#63cdd7 '
  }
]
</script>