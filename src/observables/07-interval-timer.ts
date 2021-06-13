import { interval, timer } from 'rxjs';

const observer = {
    next: value => console.log(`next: ${value}`),
    complete: () => console.log('Sequencia completada')
}

/* INTERVAL */
// Emite las notificaciones en un intervalo de tiempo
//const obs$ = interval(1000);

/* TIMER */
// (timer) Emite la notificación después del tiempo establecido
// const obs$ = timer(2000);

// (timer) Realiza un interval pero inicia en un tiempo determinado
//const obs$ = timer(2000, 1000);

// (time en una fecha determinada)
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const obs$ = timer(hoyEn5);

obs$.subscribe(observer);