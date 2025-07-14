import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
    // state
    state: () => ({
        todoList: []
    }),
    // getters
    // actions 
    actions: {
        addTodo(item) {
            this.todoList.push({ item, id: this.id++, completed: false })
        },
        deleteTodo(itemId) {
            this.todoList = this.todoList.filter((object) => {
                return object.id !== itemId
            })
        }
    }
})