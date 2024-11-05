/**
 * Se utiliza para definir las clases y estructuras de datos que representan los objetos de la aplicación.
 */

import { v4 as uuid } from "uuid";


export class Todo {
    constructor(description) {
        this.id = uuid();
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}