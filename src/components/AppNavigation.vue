<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="light-blue darken-4" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
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
            appTitle: 'My Songbook',
            drawer: false,
            items: [
                { title: 'Songs' },
                { title: 'Artists' },
                { title: 'Login' }
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