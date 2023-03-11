<script>
export default {

    name: 'Welcome',

    props: {
        user: String
    },

    data() {
        return {
            processing: false,
            error: false,
            correct: false,
            user: null,
        }
    },

    methods: {
        resetState() {
            this.error = false
            this.correct = false
        },
        validateUser() {
            this.processing = true;
            if (!this.user || this.user.trim().split(" ").length > 1) {
                this.error = true;
                this.processing = false;
                return;
            }
            this.user = this.user.trim()
            this.error = false;
            this.correct = true;
        },
        sendUser() {
            this.validateUser();
            if (this.correct) {
                this.$emit('createUser', user)
                this.$router.push('/todos');
                console.log("Es correcto");
            }
        },
    },

}
</script>

<template>
    <main class="margin">
        <h1>Bienvenido</h1>
        <p>Ingrese nombre de usuario</p>
        <b-form-group>
            <b-form-input type="text" placeholder="Ej: usuario001" v-model="user" v-on:keyup.enter="sendUser"
                :class="{ 'is-invalid': !processing && error, 'is-valid': correct }" @focus="resetState"
                @keypress="resetState" autofocus>
            </b-form-input>
            <div class="invalid-feedback"> Escriba un nombre de usuario correcto </div>
        </b-form-group>
        <b-button variant="success" v-on:click="sendUser">Continuar</b-button>
    </main>
</template>

<style></style>
