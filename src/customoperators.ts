import { from, OperatorFunction } from "rxjs";
import { map, tap } from "rxjs/operators";

export function multiply(
    factor: number | number[]
): OperatorFunction<number, number[]> {
    return source =>
        source.pipe(
            map(value =>
                (Array.isArray(factor) ? factor : [factor]).map(f => value * f)
            )
        );
}

const source$ = from([1, 2, 3, 4, 5]);

const multiplyValues$ = source$.pipe(multiply([5, 10]));
multiplyValues$.pipe(tap(console.log)).subscribe();