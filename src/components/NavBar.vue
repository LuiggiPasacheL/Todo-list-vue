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
    </nav>
</template>

<style scoped>
nav {
    background-color: rgba(0, 0, 0, 0.1);
}

ul {
    list-style: none;
    display: inline;
}

li {
    display: inline;
}
</style>