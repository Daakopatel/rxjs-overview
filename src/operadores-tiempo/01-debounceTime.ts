import { fromEvent } from "rxjs";
import { debounceTime, distinct, distinctUntilChanged, pluck } from "rxjs/operators";

// const click$ = fromEvent(document, 'click');
// click$.pipe(
//     debounceTime(3000)
// ).subscribe( console.log );

// Ejemplo
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
input$.pipe(
    pluck('target', 'value'),
    debounceTime(1000),
    distinctUntilChanged()
).subscribe( console.log );