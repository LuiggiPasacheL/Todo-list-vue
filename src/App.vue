<script>
import {user} from './data/user.js'
import Header from './components/Header.vue';

export default {
    name: 'app',

    components: {
        Header
    },

    data() {
        return {
            user: user,
        }
    }
}
</script>

<template>
    <main class="margin">
        <Header :name="this.user.name"/> 
        <router-view></router-view>
    </main>
</template>

<style>
.margin {
    margin-left: 15%;
    margin-top: 5%;
    margin-right: 15%;
}
</style>
