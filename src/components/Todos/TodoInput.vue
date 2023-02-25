<script>
export default {
    name: 'todo-input',
    data() {
        return {
            processing: false,
            error: false,
            correct: false,
            todo: {
                id: '',
                name: '',
            }
        }
    },
    methods: {
        sendForm() {
            this.processing = true
            this.resetState()

            if (this.invalidName) {
                this.error = true
                this.correct = false
                return
            }

            this.$emit('add-todo', this.todo)
            this.$refs.name.focus()
            this.error = false
            this.correct = true
            this.processing = false

            this.todo = {
                id: '',
                name: ''
            }
        },

        resetState() {
            this.error = false
            this.correct = false
        }
    },
    computed: {
        invalidName() {
            return this.todo.name.length < 1
        },
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="sendForm">
            <section>
                <b-form-input type="text" placeholder="Ingrese el nombre de la tarea" v-model="todo.name"
                    :class="{ 'is-invalid': processing && invalidName, 'is-valid': correct }" @focus="resetState"
                    @keypress="resetState" ref="name"></b-form-input>
                <div class="valid-feedback" v-if="correct">La tarea ha sido agregada correctamente</div>
                <div class="invalid-feedback" v-if="error && processing">Debe ingresar un nombre correcto</div>
            </section>
            <section>
                <b-button type="submit">+</b-button>
            </section>
        </form>
    </div>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;
    margin-bottom: 20px;
    max-width: minmax(400px, 100%);
}
form > section:first-child {
    width: 100%;
    max-width: min(100%, 400px);
}
</style>