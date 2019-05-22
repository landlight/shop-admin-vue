<template>
    <div class="dashboard">
        
        <v-container class="my-5">
            <h1 class="subheading white--text">Dashboard</h1>
            <v-card flat class="pa-3">
                <v-layout row wrap>
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Project Title</div>
                        <div>Create KiraKira</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--tex">Person</div>
                        <div>Shiro</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--tex">Due By</div>
                        <div>1 July 2019</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--tex">Status</div>
                        <div>ongoing</div>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>
    </div>
</template>

<script>
  export default {
      
  }
</script>
