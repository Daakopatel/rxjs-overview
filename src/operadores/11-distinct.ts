import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";


const numeros$ = of<number | string>(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);
numeros$.pipe(
    distinct()
).subscribe( console.log );

// Ejemplo con Objetos
interface Personaje {
    nombre: string
}

const personajes = [
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'Zero' },
    { nombre: 'Dr. Willy' },
    { nombre: 'X' },
    { nombre: 'Megaman' },
    { nombre: 'Zero' },
];

from(personajes).pipe(
    distinct(p => p.nombre)
).subscribe( console.log );