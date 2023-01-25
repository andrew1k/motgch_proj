<template>
  <v-card-title class="text-center">Purposes</v-card-title>
  <v-card
    elevation="3"
    class="ma-2"
    v-for="(card, i) in purposesCards"
    :key="i"
    :title="card.title"
    @click="$router.push(card.routerTo)"
    :prepend-avatar="card.img"
    :text="card.text"
  >
  </v-card>
</template>

<script setup>
const purposesCards = [
  {
    title: 'ПОКЛОНЕНИЕ',
    img: 'https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/images%2Fpurposes%2Fworship.png?alt=media&token=88855cad-98bd-4add-adee-489d318c4231',
    text: 'Возлюби Господа Бога твоего всем сердцем твоим. Матфея 22:37',
    routerTo: '/purposes/worship',
    color: 'error'
  },{
    title: 'ОБЩЕНИЕ',
    img: 'https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/images%2Fpurposes%2Ffellowship.png?alt=media&token=063bb60f-3dbf-4202-9ee0-21872d2442df',
    text: `И они постоянно пребывали ... в общении Деяния 2:42`,
    routerTo: '/purposes/fellowship',
    color: 'warning'
  },{
    title: 'УЧЕНИЧЕСТВО',
    img: 'https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/images%2Fpurposes%2Fdiscepleship.png?alt=media&token=318454a8-4e6e-4018-b18e-cff794280db5',
    text: 'И они постоянно пребывали в учении Апостолов. Деяния 2:42',
    routerTo: '/purposes/discepleship',
    color: 'success'
  },{
    title: 'СЛУЖЕНИЕ',
    img: 'https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/images%2Fpurposes%2Fministry.png?alt=media&token=5ad78d21-f2cb-4dc5-af96-79ff4bee8021',
    text: 'Разделяли всем, смотря по нужде каждого. Деяния 2:45',
    routerTo: '/purposes/ministry',
    color: 'secondary'
  },{
    title: 'БЛАГОВЕСТИЕ',
    img: 'https://firebasestorage.googleapis.com/v0/b/telegraf-e4d87.appspot.com/o/images%2Fpurposes%2Fevangelism.png?alt=media&token=3874ac8b-fa5f-4389-b635-8c3d1e5e90d6',
    text: 'Господь же ежедневно прилагал спасаемых к Церкви. Деяния 2:47',
    routerTo: '/purposes/evangelism',
    color: 'info'
  }
]
</script>