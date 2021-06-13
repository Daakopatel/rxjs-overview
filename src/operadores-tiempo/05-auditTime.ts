import { fromEvent } from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map( ({x}) => ({x})),
    tap(value => console.log('tap:', value)),
    auditTime(2000)
).subscribe( console.log );