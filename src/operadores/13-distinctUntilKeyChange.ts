import { from } from "rxjs";
import { distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";


// Ejemplo con Objetos
interface Personaje {
    nombre: string
}

const personajes = [
    { nombre: 'Megaman' },
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'Zero' },
    { nombre: 'Dr. Willy' },
    { nombre: 'X' },
    { nombre: 'X' },
    { nombre: 'Megaman' },
    { nombre: 'Zero' },
];

from(personajes).pipe(
    distinctUntilKeyChanged('nombre')
).subscribe( console.log );