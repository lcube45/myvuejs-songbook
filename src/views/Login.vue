<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Login Form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid">
                            <v-text-field
                                name="email"
                                label="Email"
                                type="email"
                                v-model="email"
                                :rules="emailRules"
                                required
                            >
                            </v-text-field>
                            <v-text-field
                                name="password"
                                label="Password"
                                type="password"
                                v-model="password"
                                :rules="passwordRules"
                                required
                            >
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            :disabled="!valid"
                            @click="submit"
                            >Login</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Login',

    data() {
        return {
            valid: false,
            email: '',
            password: '',
            emailRules: [
                (v: any) => !!v || 'E-mail is required',
                (v: any) => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                (v: any) => !!v || 'Password is required',
                (v: any) => v.length >= 6 || 'Password must be greater than 6 characters'
            ]
        };
    },

    methods: {
        submit() {
            if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
                this.$store.dispatch('userLogin', {
                    email: this.email,
                    password: this.password
                });
            }
        }
    }
});
</script>
