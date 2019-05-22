<template>
    <div class="items">
            <v-container class="my-5">
                <h1 class="subheading bold white--text">Items</h1>
                <v-data-table
                :headers="headers"
                :items="items"
                hide-actions
                class="elevation-1 itemtable"
                >
                    <template slot="items" slot-scope="props">

                        <td class="text-xs-left font-weight-regular black--text">
                            <v-layout justify-center>
                                {{ props.index+1 }}
                            </v-layout>
                        </td>
                        <td class="text-xs-left font-weight-regular black--text">
                            <v-layout justify-center>
                                {{ props.item.id }}
                            </v-layout>
                        </td>
                        <td class="text-xs-left font-weight-regular black--text">
                            <v-layout justify-center>
                                {{ props.item.name }}
                            </v-layout>
                        </td>
                         <td class="text-xs-left font-weight-regular black--text">
                            <v-layout justify-center>
                                {{ props.item.price }}{{ props.item.priceType }}
                            </v-layout>
                        </td>
                        <td class="text-xs-left font-weight-medium black--text"></td>
                        <td class="text-xs-center font-weight-medium black--text">
                            <v-layout justify-center>
                                <v-chip v-for="category in props.item.categories" :key="category._id">
                                    {{category.name}}
                                </v-chip>
                            </v-layout>
                        </td>
                        <td class="text-xs-left font-weight-medium black--text">
                            <v-layout class="justify-center">
                                <v-chip v-for="tag in props.item.tags" :key="tag._id">
                                    {{ tag.name }}
                                </v-chip>
                            </v-layout>
                        </td>
                        <td class="justify-center layout">
                            <v-btn icon class="mx-0" @click="editItem(props.item)">
                                <v-icon color="teal">edit</v-icon>
                            </v-btn>
                        </td>
                    </template>
                </v-data-table>
            </v-container>
        </v-layout>
    </div>
</template>

<script>
import itemService from '../services/item'

/* eslint-disable */
export default {
  data(){
    return{
      items: [],
      pagination: {
        page: 1,
        pageSize: 10,
        pages: 1
      },
      headers: [
        { text: 'No', align: 'center', sortable: false, value: 'no'},
        { text: 'Id', align: 'center', sortable: false, value: 'id' },
        { text: 'Name', align: 'center', value: 'name', sortable: true },
        { text: 'Price', align: 'center', value: 'price', sortable: true },
        { text: 'Image', align: 'center', value: 'image', sortable: false },
        { text: 'categories', align: 'center', value: 'categories', sortable: false },
        { text: 'tags', align: 'center', value:'tags', sortable: false },
        { text: 'Actions', align: 'center', value: 'action', align: 'left', sortable: false }
      ],
    }
  },
  methods:{
    initialize: function(){
      var query = {
        page: this.pagination.page,
        pageSize: this.pagination.pageSize
      }
      itemService.getAllItems().then(response => {
        this.items= response.entities;
        this.pagination.page = response.pageInformation.size
      })
    },
  },
  beforeMount () {
    this.initialize()
  }
}
</script>

<style>
.itemtable table tr {
    background-color: lightcyan;
    border-left: 8px solid #3cd1c2; 
}
</style>
