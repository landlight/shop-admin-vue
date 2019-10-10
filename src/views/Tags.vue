<template>
    <div class="tags">
        <v-container class="my-5">
            <v-layout row class ="mb-3">
                <v-btn small flat color = "white" @click="sortByName('name')">
                    <v-icon left small>adjust</v-icon>
                    <span class="caption text-lowercase">By Tag Name</span>
                </v-btn>
                <v-btn small flat color = "white" @click="sortByDate('createdAt')">
                    <v-icon left small>date_range</v-icon>
                    <span class="caption text-lowercase">By Created Date</span>
                </v-btn>
            </v-layout>

            <h1 class="subheading white--text">Dashboard</h1>
            <v-card flat class="pa-3" v-for="item in items" :key="item.id">
                <v-layout row wrap :class="`pa-3 item ${item.name}`">
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Tag Name</div>
                        <div>{{ item.name }}</div>
                    </v-flex>
                    <v-flex xs6 sm6 md2>
                        <div class="caption grey--tex">Tag Description</div>
                        <div>{{ item.description }}</div>
                    </v-flex>
                    <v-flex xs6 sm6 md2>
                        <div class="caption grey--tex">Created</div>
                        <div>{{ formatDate(item.createdAt) }}</div>
                    </v-flex>
                    <v-flex xs6 sm6 md2>
                        <div class="caption grey--tex">Updated</div>
                        <div>{{ formatDate(item.updatedAt) }}</div>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import tagService from '../services/tag.js'
import dateService from '../services/date.js'
import { match } from 'minimatch';

export default {
  data(){
    return{
      items: [],
      sortDate: false,
      sortName: false,
      pagination: {
        page: 1,
        pageSize: 10,
        pages: 1
      },
      headers: [
        { text: 'No', align: 'left', sortable: false, value: 'no' },
        { text: 'Id', align: 'left', sortable: true, value: 'id' },
        { text: 'Name', value: 'name', sortable: true },
        { text: 'Description', value: 'description', sortable: true },
        { text: 'created_at', value: 'createdAt', sortable: false },
        { text: 'updated_at', value: 'updatedAt', sortable: false },
        { text: 'parent', value: 'parent', sortable: false}, 
        { text: 'image', value: 'image', sortable: false },
        { text: 'Actions', value: 'action', align: 'left', sortable: false }
      ],
    }
  },
  methods:{
    initialize: function(){
      var query = {
        page: this.pagination.page,
        pageSize: this.pagination.pageSize
      }
      tagService.getAllTags().then(response => {
        this.items= response.entities;
        console.log(this.items, "items -- ")
        this.pagination.page = response.pageInformation.size
      })
    },
    formatDate: function(myDate){
      return dateService.formatMMDDYYYY(myDate);
    },
    sortByDate(prop){
        this.sortDate = !this.sortDate;
        if(this.sortDate){
            this.items.sort((a,b) => a[prop] < b[prop] ? -1 : 1);
        }else{
            this.items.sort((a,b) => a[prop] > b[prop] ? -1 : 1);
        }
    },
    sortByName(prop){
        this.sortName = !this.sortName;
        if(this.sortName){
            this.items.sort((a,b) => a[prop].toLowerCase() < b[prop].toLowerCase() ? -1 : 1);    
        }else{
            this.items.sort((a,b) => a[prop].toLowerCase() > b[prop].toLowerCase() ? -1 : 1);
        }
        
    }
  },
  beforeMount () {
    this.initialize()
  }
}
</script>

<style>
.item {
    border-left: 4px solid #3cd1c2;
}

.item.rem {
    border-left: 4px solid gold;
}
</style>