import { fromEvent, interval, merge } from "rxjs";
import { mergeMap, switchMap } from "rxjs/operators";

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

click$.pipe(
    // mergeMap( () => interval$) // Varios observable hijos activos
    switchMap( () => interval$) // Solo el ultimo observable hijo activo
).subscribe( console.log );