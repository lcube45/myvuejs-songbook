<template>
        <v-app-bar app color="light-blue darken-1" dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn text>SIGN IN</v-btn>
        </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'My Songbook',
        };
    },
});
</script>