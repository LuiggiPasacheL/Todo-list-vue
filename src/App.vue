<script>
import NavBar from './components/NavBar.vue';
import TodoInput from './components/Todos/TodoInput.vue';
import TodoList from './components/Todos/TodoList.vue';
import Welcome from './components/Welcome.vue';

export default {
    name: 'app',

    components: {
        NavBar,
        Welcome,
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
            user: 'Luiggi'
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
    <header class="margin">
        <!-- <NavBar :user="user" /> -->
    </header>

    <main class="margin">
        <Welcome :user="user" />
        <TodoInput @add-todo="addTodo" />
        <TodoList @delete-todo="deleteTodo" @edit.todo="editTodo" :todos="todos" />
    </main>
</template>

<style>
.margin {
    margin-left: 15%;
    margin-top: 5%;
    margin-right: 15%;
}
</style>
