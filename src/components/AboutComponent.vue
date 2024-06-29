<template>
    <section class="about">
      <h1 class="app-title">Polimatch</h1>

      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    
      <h1>De quoi s'agit-il ?</h1>
      <p>
        Les élections législatives de Juillet 2024 approchent à grands pas.
      </p>
      <p>
        Actuellement, peu de personnes lisent les programmes politiques lors d'élections,<br>
        et encore moins les lisent tous. Les votes sont parfois motivés par une idéologie fantasmée,<br>
        et déformée par des médias véhiculant des avis subjectifs (presse, audiovisuel, réseaux sociaux...).
      </p>
      <p>
        Je vous propose donc une petite application web,<br>
        pour vous permettre de choisir votre candidat idéal, de façon ludique et simple,<br>
        en vous basant sur des extraits de programmes politiques.
      </p>
      
      <h1>Comment ça marche ?</h1>
      <p>
        Il vous suffit de vous rendre à la section <a @click="goToMatching">Matching</a>, et le quiz commence.<br>
        Chaque étape vous présente un extrait, pris au hasard dans le programme d'un élu (ou d'un parti).<br>
        Vous aurez ensuite le choix de "matcher", selon votre affinité avec la mesure présentée:
      </p>
      <ul>
        <li>❌ : je ne suis pas d'accord</li>
        <li>❓ : je n'ai pas d'avis</li>
        <li>❤️ : je suis d'accord</li>
      </ul>
      <p>
        Une fois toutes les mesures revues par vos soins, un calcul statistique sera effectué,<br>
        vous révélant le programme politique vous correspondant objectivement le plus.
      </p>
      
      <h1>Vos données sont elles privées ?</h1>
      <p>
        Absolument !<br>
        Afin d'encourager votre objectivité (et de garantir le "secret du vote").
      </p>
      <p>
        Cette application web ne collecte en aucun cas vos données.<br>
        Les résultats de "matching" sont enregistrés et calculés localement.<br>
        Personne d'autre que vous n'en aura connaissance.<br>
      </p>

      <h1>Sources (extraits de programmes)</h1>
      <ul>
        <li><a href="https://www.ifrap.org/elections-legislatives-2024-comparez-les-programmes#rjfflevqj" target="_blank">IFRAP</a></li>
        <li><a href="https://programme-candidats.interieur.gouv.fr/index.html" target="_blank">Ministère de l'Intérieur</a></li>
      </ul>
    </section>
  </template>
  
  <script setup>
  import router from '../router'

  const goToMatching = () => router.push('/matching')
  </script>
  
  <style lang="scss">
  .about {
    padding: 0rem;
    max-width: 1000px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    color: #333;
  
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: var(--french-blue);
    }

    .app-title {
      font-size: 4em;
      padding: 10px;
      padding-bottom: 20px;
      color: var(--french-red);
    }
  
    p {
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }
  
    ul {
      list-style-type: none;
      padding-left: 0;
  
      li {
        background: #f0f0f0;
        margin: 0.5rem 0;
        padding: 0.5rem;
        border-radius: 5px;
      }
    }

    a {
      color: var(--french-red);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  </style>
  