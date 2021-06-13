import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log(`next: ${value}`),
    error: err => console.warn(`error: ${err}`),
    complete: () => console.info(`completado`),
}

const intervalo$ = new Observable<number>( subscriber => {
    let count = 0;

    const interval = setInterval(() => {
        subscriber.next( count++ );
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500)

    // Se define el procesa que va a ejecutar cuando se
    // llama a la función unsubscribe
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subscription1 = intervalo$.subscribe( observer );
const subscription2 = intervalo$.subscribe( observer );
const subscription3 = intervalo$.subscribe( observer );

// Agrupacion de subscripciones
subscription1.add(subscription2)
    .add(subscription3);

setTimeout(() => {
    // Esto cancela la subscripcion, pero sigue ejecutando
    // el observer (Puede producir una fuga de memoria)
    // subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();

    // Si tenemos agrupadas las subscripciones podemos
    // hacer solo la llamada al unsubscribe de la primera
    // subscripcion y se ejecutara el de ella y el de 
    // los que tiene añadidas.
    subscription1.unsubscribe();

    console.log('Completado TimeOut')
}, 3000);