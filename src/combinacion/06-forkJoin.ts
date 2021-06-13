import { forkJoin, interval, of } from "rxjs";
import { delay, take } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4);
const interva$ = interval(100).pipe( take(3) );
const letras$ = of('a', 'b', 'c').pipe( delay(3500) );

// forkJoin(
//     numeros$, 
//     interva$, 
//     letras$
// ).subscribe( console.log );

// forkJoin(
//     numeros$, 
//     interva$, 
//     letras$
// ).subscribe(resp => {
//     console.log('Numeros:', resp[0])
//     console.log('Intervalo:', resp[1])
//     console.log('Letras:', resp[2])
// });

forkJoin({
    num: numeros$,
    int: interva$,
    let: letras$
}).subscribe(resp => {
    console.log(resp);
});