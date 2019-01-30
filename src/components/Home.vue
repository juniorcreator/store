<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                        <v-carousel
                                delimiter-icon="stop"
                                prev-icon="mdi-arrow-left"
                                next-icon="mdi-arrow-right"
                        >
                            <v-carousel-item></v-carousel-item>
                        </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container>
            <v-layout row>
                <v-flex xs12>
                    <h1>Home</h1>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    name: "Home",
    data () {
      return {
        products: [
          { id: '',
            title: '',
            vendor: '',
            color: '',
            material:'',
            description: 0,
            promo: false,
            imageSrc: ''
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>