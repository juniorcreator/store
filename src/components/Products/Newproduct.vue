<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm-6 offset-sm3>
                <h1 class="text--secondary mb-3">Create new product</h1>
                <v-form ref="form"
                        v-model="valid"
                        lazy-validation>
                    <v-text-field
                        required
                        :rules="[v => !!v || 'Title is require']"
                        v-model="title"
                        name="Title*"
                        label="Title"
                        type="email">
                    </v-text-field>
                    <v-text-field
                          v-model="vendor"
                          name="vendor"
                          label="Vendor product"
                          type="text">
                    </v-text-field>
                    <v-text-field
                            v-model="color"
                            name="color"
                            label="Color product"
                            type="text">
                    </v-text-field>
                    <v-text-field
                            v-model="material"
                            name="material"
                            label="Material product"
                            type="text">
                    </v-text-field>
                    <v-text-field
                            v-model="price"
                            :rules="[v => !!v || 'Price is require']"
                            required
                            name="price"
                            label="Price product"
                            type="text">
                    </v-text-field>
                    <v-text-field
                            v-model="description"
                            name="description"
                            label="Description product"
                            type="text">
                    </v-text-field>
                </v-form>
                <v-layout class="mb-3">
                    <v-flex xs12>
                        <v-btn class="warning">Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <img src="" height="200px">
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <v-switch
                                v-model="promo"
                                color="primary"
                                label="Add to promo"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn
                                :disabled="!valid"
                                class="success"
                                @click="createProduct"
                        >Create product
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: null,
        vendor: null,
        color: null,
        material: null,
        price: 0,
        promo: false,
        valid: false,
        description: '',
      }
    },
      methods: {
          createProduct() {

          },
      }
  }
</script>

<style scoped>

</style>