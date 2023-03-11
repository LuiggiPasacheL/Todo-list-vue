<script>

import {user} from '../data/user.js';

export default {

    name: 'Welcome',

    data() {
        return {
            processing: false,
            error: false,
            correct: false,
            name: null,
        }
    },

    methods: {
        resetState() {
            this.error = false
            this.correct = false
        },
        sendUser() {
            const isValid = user.setName(this.name)
            if (isValid) {
                this.processing = false;
                this.correct = true;
                this.$router.push('/todos')
            } else {
                this.processing = true;
                this.error = true;
            }
        }
    },
}
</script>

<template>
    <main class="margin">
        <h1>Bienvenido</h1>
        <p>Ingrese nombre de usuario:</p>
        <b-form-group>
            <b-form-input type="text" placeholder="Ej: usuario001" v-model="name" v-on:keyup.enter="sendUser"
                :class="{ 'is-invalid': processing && error, 'is-valid': correct }" @focus="resetState"
                @keypress="resetState" autofocus>
            </b-form-input>
            <div class="invalid-feedback"> Escriba un nombre de usuario correcto </div>
        </b-form-group>
        <b-button variant="success" v-on:click="sendUser">Continuar</b-button>
    </main>
</template>

<style></style>
