import { of } from 'rxjs';
import { take } from 'rxjs/operators';

const numeros$ = of(1, 2, 3, 4, 5);

numeros$.pipe(
    take(3)
).subscribe({
    next: value => console.log('Next:', value),
    complete: () => console.log('Secuencia terminada')
});

