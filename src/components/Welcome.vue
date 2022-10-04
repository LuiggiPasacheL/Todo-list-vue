<script>
export default {
    name: 'welcome',
    props: {
        user: String
    }
}
</script>

<template>
    <h1>Bienvenido, {{user}}!</h1>
    <p>Ingrese sus tareas</p>
</template>

<style scoped>

</style>