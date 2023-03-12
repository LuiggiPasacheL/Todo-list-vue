
<script>

import {user} from '../../data/user.js';

export default {
    name: 'welcome-input',

    props: {
        name: String
    },

    data() {
        return {
            processing: false,
            error: false,
            correct: false,
            inputName: null,
            user,
        }
    },

    methods: {
        sendForm() {
            const validName = this.user.setName(this.inputName);

            this.processing = true;
            this.resetState()

            if (!validName) {
                this.error = true;
                this.correct = false;
                return
            }
            this.error = false
            this.correct = true
            this.processing = false
            this.$emit('show-todos')
        },
        resetState() {
            this.error = false
            this.correct = false
        },
    }
}
</script>

<template>
    <b-form-group>
        <b-form-input type="text" placeholder="Ej: usuario001" v-model="this.inputName" v-on:keyup.enter="sendForm"
            :class="{ 'is-invalid': processing && error, 'is-valid': correct }" @focus="resetState"
            @keypress="resetState" autofocus>
        </b-form-input>
        <div class="invalid-feedback"> Escriba un nombre de usuario correcto </div>
    </b-form-group>
    <b-button variant="success" v-on:click="sendForm">Continuar</b-button>
</template>

<style>

</style>
