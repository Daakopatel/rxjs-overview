import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

const numeros = [1,2,3,4,5];

const totalAcumulador = (acumulado: number, actual: number) => acumulado + actual;

// Reduce
from(numeros).pipe(
    reduce(totalAcumulador, 0)
).subscribe( console.log );

// Scan
from(numeros).pipe(
    scan(totalAcumulador, 0)
).subscribe( console.log );

// Redux
interface User {
    id?: string,
    autenticado?: boolean,
    token?: string,
    edad?: number,
}

const user: User[] = [
    { id: 'jose', autenticado: false, token: null },
    { id: 'jose', autenticado: true, token: 'ABC' },
    { id: 'jose', autenticado: true, token: 'ABC123' },
]

const state$ = from(user).pipe(
    scan<User>( (acc, cur) => {
        return { ...acc, ...cur };
    }, { edad: 33 })
);

const id$ = state$.pipe(
    map( state => state)
);

id$.subscribe( console.log );