<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text-secondaty mb-3">Orders</h1>
                <v-list
                        subheader
                        two-line
                >
                    <v-list-tile
                            avatar
                            v-for="(order, index) in orders"
                            :key="index"
                    >
                        <v-list-tile-action>
                            <v-checkbox
                                    color="success"
                                    :input-value="order.done"
                                @change="markDone(order)"
                            ></v-checkbox>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{order.name}}</v-list-tile-title>
                            <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn
                                    :to="'/product'+ order.productId"
                                    class="primary">Open</v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    name: "Home",
    data () {
      return {
          orders: [
              {
                id:     'test',
                name:   'KOnstantin',
                phone: '22-22-22',
                productId: '1',
                done: false,
              },
          ]
      }
    },
    methods: {
        markDone(order) {
            order.done = true;
        },

      }
  }
</script>

<style scoped>

</style>