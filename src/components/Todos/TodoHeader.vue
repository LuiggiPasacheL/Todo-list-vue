<script>
export default {
    name: 'todo-header',
    props: {
        user: String
    }
}
</script>

<template>
    <header>
        <h1>Bienvenido, {{user}}!</h1>
        <p>Ingrese sus tareas</p>
    </header>
</template>

<style scoped>

</style>
