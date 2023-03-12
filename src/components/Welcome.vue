<script>
import WelcomeInput from './Welcome/WelcomeInput.vue';

export default {

    name: 'Welcome',

    components: {
        WelcomeInput,
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
