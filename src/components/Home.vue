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
                            <v-carousel-item
                                    v-for="(product, i) in products"
                                    :key="i"
                                    :src="product.imageSrc"
                            ></v-carousel-item>
                        </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12
                        sm6
                        md4
                        v-for="(product, i) in products"
                        :key="i"
                >

                    <v-card>
                        <router-link
                            :aria-label="product.title"
                            :to="'/product' + product.id"
                        >
                            <v-img :src="product.imageSrc" aspect-ratio="2.75"></v-img>
                        </router-link>


                        <v-card-title primary-title>
                            <div>
                                <h3 class="card_heading heading">{{product.title}}</h3>
                                <div class="card_describe">
                                    <p class="subheading">{{product.description.substring(0, 90)}}</p>
                                    <p class="subheading card_price"><span class="title">Price: </span>${{product.price}}</p>
                                </div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn darc color="light-blue darken-4" round outline :to="'/product/' + product.id">Description</v-btn>
                            <v-btn darc color="light-blue darken-4" round>Add to cart</v-btn>
                        </v-card-actions>
                    </v-card>
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
    .card_heading {
        font-weight: bold;
        -ms-word-wrap: break-word;
        word-wrap: break-word;
        text-align: center;
        margin-bottom: 10px;
    }
    .card_describe {
        margin-top: auto;
        padding-left: 10px;
    }
    .card_price {
        color: tomato;
        font-size: 18px;
    }
</style>