

export const user = ref({
    name: String,
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
    setName(name) {
        if (!name || name.trim().split(" ").length > 1) {
            return false;
        }
        this.name = name
        return true;
    },
    addTodo(todo) {
        this.todos.add({
            id: todo.id,
            name: todo.name
        })
    }
})
