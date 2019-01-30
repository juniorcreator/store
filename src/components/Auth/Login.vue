<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form"
                                v-model="valid"
                                lazy-validation>

                            <v-text-field prepend-icon="person"
                                          :rules="emailRules"
                                          v-model="email"
                                          name="email"
                                          label="Email"
                                          type="email">

                            </v-text-field>
                            <v-text-field prepend-icon="lock"
                                          v-model="password"
                                          :rules="passwordlRules"
                                          :counter="6"
                                          name="password"
                                          label="Password"
                                          type="password">

                            </v-text-field>

                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary"
                               @click="onsubmit"
                               :disabled="!valid"
                        >Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        valid: false,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        passwordlRules: [
          v => !!v || 'Pass is required',
          v => (v && v.length >= 6) || 'Pass must be equal or more than 6 characters'
        ],
      }
    },
    methods: {
      onsubmit () {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password,
          };
          console.log(user);
        }
      }
    }
  }
</script>

<style scoped>

</style>