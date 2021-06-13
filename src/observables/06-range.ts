import { of, range } from 'rxjs';

// const obs$ = of(1, 2, 3, 4, 5);
const obs$ = range(1, 5);

console.log('Inicio de sequencia');
obs$.subscribe( console.log );
console.log('Fin de sequencia');
