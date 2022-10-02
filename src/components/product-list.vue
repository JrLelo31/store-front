<template>
  <div>fggggf
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">DashboardProductsLITSTSTST</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group mr-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div>
      <!-- <div>
      <div class="actions">
        <a class="btn btn-default">
          <router-link :to="{path: '/add-product'}">
            <span class="glyphicon glyphicon-plus"></span>
            Add product
          </router-link>
        </a>
      </div>
      <div class="filters row">
        <div class="form-group col-sm-3">
          <input placeholder="Search" v-model="searchKey" class="form-control" id="search-element" requred/>
        </div>
      </div>
      <table class="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th class="col-sm-2">Actions</th>
        </tr>
        </thead>
        <tbody>
          <td>
            <a>
              <router-link :to="{name: 'product', params: {product_id: product.id}}">{{ product.name }}</router-link>
            </a>
          </td>
          <td>{{ product.description }}</td>
          <td>
            {{ product.price }}
            <span class="glyphicon glyphicon-euro" aria-hidden="true"></span>
          </td>
          <td>
            <a class="btn btn-warning btn-xs">
              <router-link :to="{name: 'product-edit', params: {product_id: product.id}}">Edit</router-link>
            </a>
            <a class="btn btn-danger btn-xs">
              <router-link :to="{name: 'product-delete', params: {product_id: product.id}}">Delete</router-link>
            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>

<script>
import ProductService from "../services/ProductService";
  export default {
data() {
    return {
      filteredProducts: []
    };
  },
  methods: {
    retrieveProducts() {
      ProductService.getAll()
        .then(response => {
          this.filteredProducts = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  /*mounted() {
    this.retrieveProducts();
  }*/
  created() {
    this.retrieveProducts();
  }
  }
</script>

<style lang="scss" scoped>

</style>
