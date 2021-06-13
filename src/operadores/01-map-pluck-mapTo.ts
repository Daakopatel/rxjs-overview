import { fromEvent, Observer, range } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

const observer: Observer<number> = {
    next: value => console.log(`Next:`, value),
    error: error => console.log(`Error:`, error),
    complete: () => console.log('Secuencia finalizada')
};

range(1, 5).pipe(
    map<number, number>(value => value * 10)
)
.subscribe(observer);

// Usar map para obtener el codigo de la tecla.
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

// Map -> Permite modificar el valor previo a su salida.
const keyupCode$ = keyup$.pipe(
    map( value => value.code)
)

// Pluck -> Permite obtener un atributo de objeto en el observable
const keyupPluck$ = keyup$.pipe(
    // pluck('key') // Atributo del objeto
    pluck('target', 'baseURI') // Atributo dentro de otro objeto
);

// mapTo -> Permite transformar la entrada en una salída específica
const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
);

keyup$.subscribe( console.log );
keyupCode$.subscribe(code => console.log('map:', code));
keyupPluck$.subscribe(atributo => console.log('pluck:', atributo));
keyupMapTo$.subscribe(value => console.log('mapTo:', value));