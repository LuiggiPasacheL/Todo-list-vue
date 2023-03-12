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
            user,
        }
    },

    methods: {
        addTodo(todo) {
            this.user.addTodo(todo);
        },
        deleteTodo(id) {
            this.user.deleteTodo(id);
        },
        editTodo(id, todoEdited) {
            this.user.editTodo(id, todoEdited);
        },
        validateUser() {
            if(!this.user.name) {
                this.$router.push('/');
            }
        },
        removeUser() {
            this.user.setDefault();
            this.$router.push('/');
        }
    },

    beforeMount() {
        this.validateUser();
    }
}
</script>

<template>
    <TodoInput @add-todo="addTodo" />
    <TodoList @delete-todo="deleteTodo" @edit.todo="editTodo" :todos="this.user.todos" />
    <b-button variant="danger" v-on:click="removeUser">Salir</b-button>
</template>

<style></style>
