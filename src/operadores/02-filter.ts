import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

range(1,10)
.pipe(
    filter(value => value % 2 === 1)
).subscribe(value => console.log('Value:', value));

range(1,10)
.pipe(
    filter((value, index) => {
        console.log('Index:', index);
        return value % 2 === 1;
    })
).subscribe(value => console.log('Value:', value));

interface Personaje {
    tipo: string,
    nombre: string
}

const personajes: Array<Personaje> = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'robin'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    }
]

from(personajes).pipe(
    filter(personaje => personaje.tipo === 'heroe')
).subscribe(personaje => console.log(personaje.nombre));

fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(code => code === 'Enter'),
).subscribe(key => console.log(key));