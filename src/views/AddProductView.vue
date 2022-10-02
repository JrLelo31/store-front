<template>
  <div>
    <div class="actions container">
        <div class="row">
          <div class="col-md-6">
            <form>
                <!-- <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
                  </div>
                </div> -->
                <div class="form-group row mt-3">
                  <label for="inpuNom" class="col-sm-2 col-form-label ">Nom</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inpuNom">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputDescription" class="col-sm-2 col-form-label">Description</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputDescription">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPrix" class="col-sm-2 col-form-label">Prix</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPrix">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputImg" class="col-sm-2 col-form-label">Lien image</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputImg">
                  </div>
                </div>
            </form>
            <a class="btn btn-default">
              <router-link :to="{path: '/add-product'}">
                <button type="button" class="btn btn-primary">Ajouter un produit</button>
              </router-link>
            </a>
          </div>
          <div class="col-md-6">
          </div>
        </div>
      </div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
