<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="light-blue darken-4" dark disable-resize-watcher>
        <v-list dense>
            <v-list-item v-for="(item, index) in items" :key="index" :to="item.url">
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="light-blue darken-1" dark>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn icon class="hidden-sm-and-down">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn text class="hidden-sm-and-down">LOGIN</v-btn>
        </v-app-bar>
    </span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'AppNavigation',
    data() {
        return {
            appTitle: process.env.VUE_APP_TITLE,
            drawer: false,
            items: [
                { title: 'Songs', url: '/songs', icon: 'dashboard' },
                { title: 'Artists', url: '/artists', icon: 'dashboard' },
                { title: 'Logout', url: '/logout', icon: 'dashboard' }
            ]
        };
    },
});
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>