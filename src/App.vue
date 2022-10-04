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
          name: 'Comprar alfajores'
        },
        {
          id: 2,
          name: 'Almuerzo'
        },
        {
          id: 3,
          name: 'Ir a jugar futbol'
        },
      ],
      user: 'Luiggi'
    }
  },

  methods: {
    addTodo(todo) {
      let id = 0;

      if(this.todos.length > 0) {
        id = this.todos.length - 1
      }

      todo.id = id
      this.todos = [...this.todos, {...todo}]
    },
    deleteTodo(id){
      this.todos = this.todos.filter(
        todo => todo.id !== id
      )
    },
    editTodo(id, todoEdited){
      this.todos = this.todos.map(todo => 
        todo.id === id ? todoEdited : todo
      )
    }
  },
}
</script>

<template>
  <header>
    <NavBar :user="user" />
  </header>

  <main>
    <Welcome :user="user" />
    <TodoInput @add-todo="addTodo" />
    <TodoList @delete-todo="deleteTodo" @edit.todo="editTodo" :todos="todos" />
  </main>
</template>

<style scoped>

</style>
