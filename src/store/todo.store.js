/**
 * Se utiliza para gestionar el estado global de la aplicación, incluyendo las instancias de las clases si es necesario.
 */

import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}


const state = {
    todos: [ // Instancias de la clase
        new Todo("Piedra del Alma"),
        new Todo("Piedra del infinito"),
        new Todo("Piedra del Tiempo")
        new Todo("Piedra del Poder")
        new Todo("Piedra del Sol")
    ],
    filter: Filters.All
}

const initStore = () => {
    console.log(state);
}

const loadStore = () => {
    throw new Error("Not implemented");
}

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos]; // Envia un nuevo objeto, para no mandar la referencia
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done)
        default:
            throw new Error(`Option ${filter} is not valid`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addStore = (description) => {
    if (!description) throw new Error("Description is required");
    state.todos.push(new Todo(description));
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    if (!todoId) throw new Error("todoId is required");

    const todo = state.todos.find(todo => todo.id === todoId);
    if (todo) {
        todo.done = !todo.done;
    }
}

const deleteTodo = (todoId) => {
    if(!todoId) throw new Error("todoId is required");
    state.todos = state.todos.filter(todo => todo.id !== todoId);
}

const deleteCompleted = () => {
    if(!todoId) throw new Error("todoId is required");
    state.todos = state.todos.filter(todo => !todo.done);
}

/**
 * Establece un nuevo filtro
 * @param {Filters} newFilter - El nuevo filtro a aplicar
 */
const setFilter = (newFilter = Filters.All) => {
    if (!Object.values(Filters).includes(newFilter)) {
        throw new Error("Invalid filter value");
    }
    state.filter = newFilter;
};

const getCurrentFilter = (newFilter = Filters.All) => {
    return state.filter;
}

export default { // Se exporta por defecto un objeto
    addStore,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}