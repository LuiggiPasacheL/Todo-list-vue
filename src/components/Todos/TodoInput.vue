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
            <input type="text" placeholder="Ingrese el nombre de la tarea" v-model="todo.name"
                :class="{ 'is-invalid': processing && invalidName }" @focus="resetState" @keypress="resetState" ref="name">
            <button>+</button>
            <div v-if="error && processing">Debe rellenar el nombre correctamente</div>
            <div v-if="correct">La tarea ha sido agregada correctamente</div>
        </form>
    </div>
</template>

<style scoped>
.is-invalid {
    color: red;
}
</style>