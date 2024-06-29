<script setup>
import { ref, computed } from 'vue';
import MatchingCardComponent from '../components/MatchingCardComponent.vue';
import PartyStatsCard from '../components/PartyStatsCard.vue';
import jsonOffers from '../json/offers.json';

const offersLen = jsonOffers.offers.length

const nonEmptyStr = (str) => "" !== str.trim()

const offers = ref(
  jsonOffers
    .offers
    .sort(() => Math.random() - 0.5)
    .filter(offer => [
      offer.source,
      offer.category,
      offer.description,
      offer.political_party,
    ].every(nonEmptyStr))
);

const partyStats = ref({
  'TOTAL': 0,
  'Ensemble': 0,
  'Ensemble Total': 0,
  'Les Républicains': 0,
  'Les Républicains Total': 0,
  'Nouveau Front Populaire': 0,
  'Nouveau Front Populaire Total': 0,
  'Rassemblement National': 0,
  'Rassemblement National Total': 0,
  'Reconquête': 0,
  'Reconquête Total': 0
});

const updateStats = (party, action) => {
  partyStats.value['TOTAL']++;
  partyStats.value[party + ' Total']++;

  if (partyStats.value[party] !== undefined) {
    if (action === 'agree') {
      partyStats.value[party]++;
    } else if (action === 'disagree') {
      partyStats.value[party]--;
    }
  }
};

const removeCard = (index) => offers.value.splice(index, 1)

const agree = (party) => updateStats(party, 'agree')

const noop = (party) => updateStats(party, 'noop')

const disagree = (party) => updateStats(party, 'disagree')

const sortedPartyStats = computed(() => {
  const parties = Object.keys(partyStats.value).filter(p => !p.includes('Total') && p !== 'TOTAL')
  return parties
    .map(party => ({
      name: party,
      matchCount: partyStats.value[party],
      total: partyStats.value[party + ' Total']
    }))
    .sort((a, b) => (b.matchCount / b.total) - (a.matchCount / a.total));
});
</script>

<template>
  <main>
    <div class="container">
      <div v-if=offers.length class="progression">{{ partyStats.TOTAL + 1 }} / {{ offersLen }}</div>
      <div v-if="offers.length > 0" class="card-stack">
        <MatchingCardComponent
          v-for="(offer, index) in offers.slice(0, 3)"
          :key="offer.description"
          :category="offer.category"
          :description="offer.description"
          :politicalParty="offer.political_party"
          :zIndex="3 - index"
          :stackPosition="index"
          @removeCard="removeCard(index)"
          @agree="agree(offer.political_party)"
          @noop="noop(offer.political_party)"
          @disagree="disagree(offer.political_party)"
        />
      </div>
      <div v-else class="stats">
        <h2>Classement des Partis</h2>
        <div v-for="party in sortedPartyStats" :key="party.name">
          <PartyStatsCard :partyName="party.name" :total="party.total" :matchCount="party.matchCount" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card-stack {
  position: relative;
  width: 30%; /* You can adjust this width as needed */
  min-width: 350px; /* You can adjust this width as needed */
  margin: 0 auto;
}

.card-stack .matching-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0; /* Masque initialement toutes les cartes */
}

.card-stack .matching-card:nth-child(1) {
  transform: translateY(0px);
  opacity: 1;
}

.card-stack .matching-card:nth-child(2) {
  transform: translateY(10px);
  opacity: 1;
}

.card-stack .matching-card:nth-child(3) {
  transform: translateY(20px);
  opacity: 1;
}

.stats {
  text-align: center;
  max-width: 800px;
}

.stats h2 {
  font-size: 2em;
  color: var(--french-red);
  margin-bottom: 40px;
}
</style>
