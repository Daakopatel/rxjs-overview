import { Observable, Observer } from 'rxjs';

console.log('Hola Jose!!!');

// Esta es otra forma de establecer los parametros 
// de la funcion subscriber
const observer: Observer<any> = {
    next: value => console.log(`Objeto Observer => value (next): ${value}`),
    error: err => console.error(`Objeto Observer => error: ${err}`),
    complete: () => console.warn(`Objeto Observer => El observable se ha sido completado`),
}

//const obs = Observable.create();
const obs$ = new Observable<string>(subs => {
    subs.next("Hola");
    subs.next("Mundo");

    subs.next("Hola");
    subs.next("Mundo");

    // Forzar un error
    // const a = undefined;
    // a.nombre = 'Jose';

    subs.next("Hola");
    subs.next("Mundo");

    subs.complete();

    // Esto no imprime xq esta despues de que el observer se completo
    subs.next("Hola");
    subs.next("Mundo");
});

obs$.subscribe( console.log );
obs$.subscribe( resp => console.log(`observable2: ${resp}`) );

// Parametros => susbcribe
obs$.subscribe(
    value => console.log(`value (next): ${value}`),
    error => console.error(`error: ${error}`),
    () => console.warn(`El observable se ha sido completado`),
);

obs$.subscribe( observer );

obs$.subscribe()