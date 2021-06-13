import { fromEvent } from 'rxjs';

const src1$ = fromEvent<MouseEvent>( document, 'click' );
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const observer = {
    next: value => console.log('Event: ', value)
}

src1$.subscribe(observer);

// El mismo con destructuracion
src1$.subscribe(({x, y}) => {
    console.log(`x: ${x}, y: ${y}`);
});

src2$.subscribe(event => {
    console.log(`Key: ${event.key}`)
});