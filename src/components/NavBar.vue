<script>
export default {
    name: 'nav-bar',
    props: {
        user: String,
    },
}
</script>

<template>
    <nav>
        <ul>
            <li>Inicio</li>
            <li>Agregar Tarea</li>
            <li>{{user}}</li>
            <ul>
                <li>Cerrar Sesión</li>
            </ul>
        </ul>
        <hr>
    </nav>
</template>

<style>

</style>