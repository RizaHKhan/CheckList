<template>
  <div class="main-container">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/include/Header'
import Footer from '@/components/include/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
