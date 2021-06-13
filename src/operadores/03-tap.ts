import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators'

range(1, 5).pipe(
    tap(value => console.log('antes:', value)),
    map(value => value * 10),
    tap({
        next: value => console.log('despues:', value),
        error: error => console.log('error:', error),
        complete: () => console.log('Ha finalizado')
    }),
).subscribe(value => console.log('subs:', value));