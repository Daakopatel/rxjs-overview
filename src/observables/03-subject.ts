import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log(`next: ${value}`),
    error: err => console.warn(`error: ${err}`),
    complete: () => console.info(`completado`),
}

const obs$ = new Observable<number> ( subs => {
    
    const interval = setInterval(() => {
        let random = Math.random();
        console.log(random);
        subs.next(random);
    }, 1000);

    return () => {
        clearInterval(interval);
        console.log('Fin del Observable');
    };

});

// Cada elemento subscrito recibe un valor random independiente
//const sub1 = obs$.subscribe( value => console.log(`sub1: ${value}`) );
//const sub2 = obs$.subscribe( value => console.log(`sub2: ${value}`) );

/**
 * *********************************************
 * Subject
 * *********************************************
 * 1) Casteo Múltiple.- Varias subscripciones pueden atarse 
 *          al Subject. Esto permite tener la misma 
 *          información en los elementos subscritos.
 * 2) También es un observer
 * 3) Tambien maneja: next, error y complete
 */

const subject$ = new Subject();
const subscription = obs$.subscribe(subject$);

const sub3 = subject$.subscribe( value => console.log(`sub3: ${value}`));
const sub4 = subject$.subscribe( value => console.log(`sub4: ${value}`));

/**
 * Cold Observable.- Cuando la data es producida por el observer
 *                  en sí mismo.
 * Hot Observable.- Cuando la data es producida fuera del observer
 */

setTimeout(() => {

    // Esto notifica a los elementos del observer
    // Cold Observable => Hot Observable
    subject$.next(10);

    // Desubscribe los elementos del observer, es decir,
    // los elementos del subject$ ya no serán notificados
    // pero el observer sigue ejecutando.
    subject$.complete();


    // Ejecuta el return del observer
    subscription.unsubscribe();

}, 3000);