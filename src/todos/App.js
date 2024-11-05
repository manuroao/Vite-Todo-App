import html  from "./app.html?raw";
/**
 * Renderizar la aplicación
 * @param {String} elementID 
 */
export const App = (elementID) => {
    // Función anonima autoinvocada
    // cuando la función App() se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementID).append(app);
    })();  
}