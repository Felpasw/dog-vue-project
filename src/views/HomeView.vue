
<template>
  <Navbar />
  <HeroSection />
  <AboutUs/>
  <DogsComponent />
  <FooterComponent />
</template>


<script>

import HeroSection from '../components/HeroSection.vue';
import Navbar from '../components/Navbar.vue';
import DogsComponent from '../components/DogsComponent.vue';
import AboutUs from '../components/AboutUs.vue';
import FooterComponent from '../components/FooterComponent.vue'
export default {
  components:{
    HeroSection,
    Navbar,
    DogsComponent,
    AboutUs,
    FooterComponent
}
}
</script>

<style></style>
