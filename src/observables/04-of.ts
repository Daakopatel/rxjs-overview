import { of } from 'rxjs';

// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of<number>(...[1, 2, 3, 4, 5, 6]);
// const obs$ = of([1, 2], {a: 1, b: 2}, function() {}, true, Promise.resolve(true));

// of es síncrono
console.log('Inicio del obs$');
obs$.subscribe(
    value => console.log(`next: ${value}`),
    null,
    () => console.log('Secuencia terminada.')
);
console.log('Fin del obs$');