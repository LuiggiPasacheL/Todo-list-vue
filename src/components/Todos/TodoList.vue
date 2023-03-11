<script>
export default {
    name: 'todo-list',
    props: {
        todos: Array,
    },
    methods: {
        editTodo(todo) {
            this.todoEdit = Object.assign({}, todo)
            this.editing = todo.id
        },
        saveTodo(todo) {
            if (!todo.name.length) {
                return
            }
            this.$emit('edit-todo', todo.id, todo)
            this.editing = null
        },
        cancelEdit(todo){
            Object.assign(todo, this.todoEdit)
            this.editing = null
        }
    },
    data() {
        return {
            editing: null,
        }
    },
}
</script>

<template>
    <div v-if="!todos.length">No se han agregado tareas</div>
    <div v-else>
        Lista de tareas:
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <span v-if="editing === todo.id">
                    <input type="text" v-model="todo.name" :placeholder="todo.name">
                    <button @click="cancelEdit(todo)">❌</button>
                    <button @click="saveTodo(todo)">✅</button>
                </span>
                <span v-else>
                    {{ todo.name }}
                    <button @click="$emit('delete-todo', todo.id)">🗑</button>
                    <button @click="editTodo(todo)">📝</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
span {
    display: flex;
    gap: 10px;
}
ul li {
    margin-bottom: 8px;
}
.danger {
    color: white;
    background-color: red;
    font-weight: bold;
}
</style>
