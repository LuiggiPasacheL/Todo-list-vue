<script>
import TodoInput from './Todos/TodoInput.vue';
import TodoList from './Todos/TodoList.vue';
import TodoHeader from './Todos/TodoHeader.vue';
import {user} from '../data/user.js';

export default {
    name: 'todos',

    components: {
        TodoHeader,
        TodoInput,
        TodoList,
    },

    data() {
        return {
            username: user.name,
            todos: user.todos,
        }
    },

    methods: {
        addTodo(todo) {
            user.addTodo(todo);
            this.todos = user.todos;
        },
        deleteTodo(id) {
            user.deleteTodo(id);
            this.todos = user.todos;
        },
        editTodo(id, todoEdited) {
            user.editTodo(id, todoEdited);
            this.todos = user.todos;
        },
        validateUser() {
            if(!this.username) {
                this.$router.push('/');
            }
        },
        removeUser() {
            user.setDefault();
            this.$router.push('/');
        }
    },

    beforeMount() {
        this.validateUser();
    }
}
</script>

<template>
    <main class="margin">
        <TodoHeader :user="username" />
        <TodoInput @add-todo="addTodo" />
        <TodoList @delete-todo="deleteTodo" @edit.todo="editTodo" :todos="todos" />
        <b-button variant="danger" v-on:click="removeUser">Salir</b-button>
    </main>
</template>

<style></style>
