<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb3">My products</h1>
                <v-card
                        v-for="(product, index) in products"
                        :key="index"
                        class="elevation-10 mb-2">
                    <v-layout>
                        <v-flex xs4>
                            <v-card-media
                                    :src="product.imageSrc"
                                    height="200px"
                            >

                            </v-card-media>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text-primary">{{product.title}}</h2>
                                <p>{{product.description}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        :to="'/product/' + product.id"
                                        class="info">Open</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
          products: [
              { id: '1',
                  title: 'Dell XPS 13',
                  vendor: 'dell',
                  color: 'black',
                  material:'metal/plastic',
                  price: 300,
                  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nostrum harum, aperiam eos! Quas, quae dolore molestiae doloribus odit vel?',
                  promo: false,
                  imageSrc: 'https://cdn.mos.cms.futurecdn.net/Gtv3PqL9JWPM9EfaFtmRCJ-650-80.jpg'
              },
              { id: '2',
                  title: 'Inspiron 15 5000',
                  vendor: 'dell',
                  color: 'black',
                  material:'metal/plastic',
                  price: 500,
                  description: '15" laptop with gorgeous views, a sophisticated design and plenty of options. Featuring AMD Ryzen™ processors with Radeon™ Vega graphics.',
                  promo: true,
                  imageSrc: 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/inspiron_notebooks/15_5575/pdp/laptops-inspiron-15-5000-amd-gallery-global-504x350-pdp.jpg?fmt=jpg&wid=570&hei=400'
              },
              { id: '3',
                  title: 'XPS 15',
                  vendor: 'dell',
                  color: 'black',
                  material:'metal/plastic',
                  price: 900,
                  description: 'The world’s smallest 15.6-inch performance laptop with a stunning InfinityEdge display. Now featuring 8th Gen Intel® Core™ processors with up to 6 cores and 12 threads.',
                  promo: true,
                  imageSrc: 'https://i.dell.com/sites/imagecontent/videos/en/PublishingImages/xps-15-lt-2018.jpg'
              },
          ]
      }
    }
  }
</script>

<style scoped>

</style>