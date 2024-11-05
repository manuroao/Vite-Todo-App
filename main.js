import './style.css'
import { App } from "./src/todos/App";
import todoStore from "./src/store/todo.store"; // Importa por defecto un objeto y lo llama todoStore

todoStore.initStore();
App('#app');