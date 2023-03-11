<script>
import TodoInput from './Todos/TodoInput.vue';
import TodoList from './Todos/TodoList.vue';
import TodoHeader from './Todos/TodoHeader.vue';

export default {
    name: 'todos',

    components: {
        TodoHeader,
        TodoInput,
        TodoList,
    },

    data() {
        return {
            todos: [
                {
                    id: 1,
                    name: 'Todo example 1'
                },
                {
                    id: 2,
                    name: 'Todo example 2'
                },
                {
                    id: 3,
                    name: 'Todo example 3'
                },
            ],
            user: 'esteNombreNoSeDeberiaMostrarAquí'
        }
    },

    methods: {
        addTodo(todo) {
            let id = 0;

            if (this.todos.length > 0) {
                id = this.todos.at(-1).id + 1
            }

            todo.id = id
            this.todos = [...this.todos, { ...todo }]
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(
                todo => todo.id !== id
            )
        },
        editTodo(id, todoEdited) {
            this.todos = this.todos.map(todo =>
                todo.id === id ? todoEdited : todo
            )
        }
    },
}
</script>

<template>
    <main class="margin">
        <TodoHeader :user="user" />
        <TodoInput @add-todo="addTodo" />
        <TodoList @delete-todo="deleteTodo" @edit.todo="editTodo" :todos="todos" />
    </main>
</template>

<style></style>
