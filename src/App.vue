<template>
  <v-app class="red lighten-2">
    <Navbar />
    <v-content>
      <router-view class="mx-4 mb-4"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components:{
      Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
