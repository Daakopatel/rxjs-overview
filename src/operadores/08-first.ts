import { fromEvent } from "rxjs";
import { first, take } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
    // take(1), // Obtiene la primera emisión
    // first(), // Obtiene la primera emisión
    first<MouseEvent>(event => event.clientY >= 150), // Emite el primer elemento que cumpla la condición y finaliza la subscripción
).subscribe({
    next: value => console.log('Next:', value),
    complete: () => console.log('Secuencia finalizada')
});

