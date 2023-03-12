
<script>
export default {
    name: 'header',
    props: {
        name: String
    }
}
</script>

<template>
    <h1>Bienvenido(a)<span v-if="this.name">, {{this.name}}</span></h1>
</template>

<style>

</style>
