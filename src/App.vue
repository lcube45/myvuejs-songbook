<template>
    <v-app>
        <app-navigation></app-navigation>

        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppNavigation from '@/components/AppNavigation';

export default Vue.extend({
    name: 'App',

    components: {
        AppNavigation
    },

    data: () => ({
        //
    })
});
</script>
