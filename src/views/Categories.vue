<template>
    <div class="categories">
        <v-container class="my-5">
            <h1 class="subheading bold white--text">Categories</h1>
            <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
            class="elevation-1 categorytable"
            >
                <template slot="items" slot-scope="props">
                    <td class="text-xs-left font-weight-regular black--text row-category">{{ props.index+1 }}</td>
                    <td class="text-xs-left font-weight-regular black--text">{{ props.item.id }}</td>
                    <td class="text-xs-left font-weight-medium black--text">{{ props.item.name }}</td>
                    <td class="text-xs-left font-weight-medium black--text">{{ props.item.description}} </td>
                    <td class="text-xs-left font-weight-medium black--text">{{ new Date(props.item.createdAt) }} </td>
                    <td class="text-xs-left font-weight-medium black--text">{{ new Date(props.item.updatedAt) }} </td>
                    <td v-if= "props.item.parentId !=  undefined" class="text-xs-center font-weight-medium black--text"> {{ props.item.parentId.name }} </td>
                    <td v-else class="text-xs-center font-weight-medium black--text">-</td>
                    <td class="text-xs-left .body-1 white--text"></td>
                    <td class="justify-center layout">
                    <v-btn icon class="mx-0" @click="editItem(props.item)">
                        <v-icon color="teal">edit</v-icon>
                    </v-btn>
                    </td>
                </template>
            </v-data-table>
        </v-container>
    </div>
</template>

<script>
import categoryService from '../services/category.js'
import dateService from '../services/date.js'

export default 
{ 
  data(){
    return{
      items: [],
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
      categoryService.getAllCategories().then(response => {
        this.items= response.entities;
        this.pagination.page = response.pageInformation.size
      })
    },
    formatDate: function(myDate){
        return dateService.formatMMDDYYYY(myDate);
    }
  },
  beforeMount () {
    this.initialize()
  }
}
</script>

<style>
.categorytable table tr {
    box-shadow:lightgreen;
    background-color: whitesmoke;
    border-left: 8px solid lightblue; 
}

</style>