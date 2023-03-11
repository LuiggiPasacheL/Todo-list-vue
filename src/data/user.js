
export const user = {
    name: null,
    todos: [
        {
            id: 1,
            name: 'Tarea de ejemplo 1'
        },
        {
            id: 2,
            name: 'Tarea de ejemplo 2'
        },
        {
            id: 3,
            name: 'Tarea de ejemplo 3'
        },
    ],
    setName(inputName) {
        if (!inputName || inputName.trim().split(" ").length > 1) {
            return false;
        }
        this.name = inputName;
        return true;
    },
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
    },
    setDefault(){
        this.name = null;
        this.todos = [
            {
                id: 1,
                name: 'Tarea de ejemplo 1'
            },
            {
                id: 2,
                name: 'Tarea de ejemplo 2'
            },
            {
                id: 3,
                name: 'Tarea de ejemplo 3'
            },
        ]
    }
}
