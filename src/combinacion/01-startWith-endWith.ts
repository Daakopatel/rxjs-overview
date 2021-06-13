import { of } from "rxjs";
import { endWith, startWith } from "rxjs/operators";

const numero$ = of(1, 2, 3).pipe(
    startWith('a', 'b', 'c'),
    endWith('x', 'y', 'z')
);

numero$.subscribe( console.log );

/*
a
b
c
1
2
3
x
y
z
*/