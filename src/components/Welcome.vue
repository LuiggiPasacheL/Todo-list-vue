<script>
import WelcomeInput from './Welcome/WelcomeInput.vue';
import WelcomeTitle from './Welcome/WelcomeTitle.vue'

export default {

    name: 'Welcome',

    components: {
        WelcomeInput,
        WelcomeTitle,
    },

    data() {
        return {
            processing: false,
            error: false,
            correct: false,
            name: null,
        }
    },

    methods: {
        showTodos() {
            this.$router.push('/todos')
        }
    }
}
</script>

<template>
    <main class="margin">
        <WelcomeTitle />
        <WelcomeInput @show-todos="showTodos"/>
    </main>
</template>

<style></style>
