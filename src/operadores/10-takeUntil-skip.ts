import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';
document.querySelector('body').append(boton);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(boton, 'click');

// Doble click
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap( value => console.log('Tap antes de skip')),
    skip(1),
    tap( value => console.log('Tap despues de skip')) // Solo ejecuta cuando pasa el skip
);

counter$.pipe(
    takeUntil( clickBtn$ )
).subscribe({
    next: value => console.log('Value:', value),
    complete: () => console.log('Secuencia terminada')
});
