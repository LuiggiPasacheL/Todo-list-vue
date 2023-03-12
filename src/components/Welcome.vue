<script>
import WelcomeInput from './Welcome/WelcomeInput.vue';
import WelcomeTitle from './Welcome/WelcomeTitle.vue'

export default {

    name: 'Welcome',

    components: {
        WelcomeInput,
        WelcomeTitle,
    },

    methods: {
        showTodos() {
            this.$router.push('/todos')
        }
    }
}
</script>

<template>
    <p>Ingrese nombre de usuario:</p>
    <WelcomeInput @show-todos="showTodos"/>
</template>

<style></style>
