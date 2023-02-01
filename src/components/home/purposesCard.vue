<template>
  <v-card-title class="mt-6">Purposes</v-card-title>
  <v-card
    elevation="5"
    class="ma-2 "
    v-for="(card, i) in purposesCards"
    :key="i"
    @click="$router.push(card.routerTo)"
    rounded="xl"
  >
    <v-card-actions>
      <VAvatar :image="card.img" rounded="0" />
      <VCardTitle v-text="card.title" />
    </v-card-actions>
    <VCardText v-text="card.text" />
  </v-card>
</template>

<script setup>
import worship from '@/assets/icons/worship.png'
import evangelism from '@/assets/icons/evangelism.png'
import discepleship from '@/assets/icons/discepleship.png'
import ministry from '@/assets/icons/ministry.png'
import fellowship from '@/assets/icons/fellowship.png'
const purposesCards = [
  {
    title: 'ПОКЛОНЕНИЕ',
    img: worship,
    text: 'Возлюби Господа Бога твоего всем сердцем твоим. Матфея 22:37',
    routerTo: '/purposes/worship',
    color: '#015366 '
  },{
    title: 'ОБЩЕНИЕ',
    img: fellowship,
    text: `И они постоянно пребывали ... в общении Деяния 2:42`,
    routerTo: '/purposes/fellowship',
    color: '#0093b7 '
  },{
    title: 'УЧЕНИЧЕСТВО',
    img: discepleship,
    text: 'И они постоянно пребывали в учении Апостолов. Деяния 2:42',
    routerTo: '/purposes/discepleship',
    color: '#a0c5cf'
  },{
    title: 'СЛУЖЕНИЕ',
    img: ministry,
    text: 'Разделяли всем, смотря по нужде каждого. Деяния 2:45',
    routerTo: '/purposes/ministry',
    color: '#e6eceb'
  },{
    title: 'БЛАГОВЕСТИЕ',
    img: evangelism,
    text: 'Господь же ежедневно прилагал спасаемых к Церкви. Деяния 2:47',
    routerTo: '/purposes/evangelism',
    color: '#63cdd7 '
  }
]
</script>