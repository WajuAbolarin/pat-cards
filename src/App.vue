<template>
  <div class="cards">
    <PaymentCard v-for="card in cards" :key="card.cvv" :card="card" />
  </div>
</template>

<script setup>
import PaymentCard from './components/PaymentCard.vue'
const cards = [
  { cardNo: '9756727274784834', cvv: '222', cardHolder: 'Abolarin Olanrewaju', expires: '10/22' },
  { cardNo: '9759300033334883', cvv: '333', cardHolder: 'Adekunle Chukwuma Ciroma-Benson-Alakija', expires: '11/23' },
]
</script>

<style>
#app {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 5% 1fr 5%;
  align-items: center;
}
.cards {
  grid-column: 2/-2;
}
.cards > *:not(:first-child) {
  margin-top: 2em;
}

/* Ipad */
@media screen and (min-width: 720px) {
  .cards {
    display: flex;
    flex-wrap: nowrap;
    gap: 1em;
  }
  .cards > *:not(:first-child) {
    margin-left: 2em;
    margin-top: 0;
  }
}
/* Laptops */
@media screen and (min-width: 1025px) {
  #app {
    grid-template-columns: 100px 1fr 100px;
  }
  .cards {
    display: flex;
    gap: 1em;
  }
  .cards > *:not(:first-child) {
    margin-left: 2em;
    margin-top: 0;
  }
}
</style>
