import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map( ({x, y}) => ({x, y}) ),
    // takeWhile( ({y}) => y <= 150 ) // Retorna todas las notificaciones que cumplan la condicion hasta que una no cumpla
    takeWhile( ({y}) => y <= 150, true ) // Retorna todas las notificaciones que cumplan la condicion hasta la primera que no cumpla (incluida)
).subscribe({
    next: value => console.log('Next:', value),
    complete: () => console.log('Secuencia Terminada')
});
