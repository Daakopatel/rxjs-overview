import { fromEvent, merge, observable, timer } from "rxjs";
import { map, tap } from "rxjs/operators";
import { iif } from "rxjs";
import { Observable, Observer, of, from } from 'rxjs';
import {  range } from 'rxjs';

// Using RXjs lets explaing Observer...below is common observer
const observer = {
    next: value => console.log('Value:', value),
    error: error => console.log('Error:', error),
    complete: () => console.log('Secuencia terminada')
}

//get api data using from observale and subscribe method
function getApiData() {
    const source$ = from(fetch('https://api.github.com/users/klerith'));

    source$.subscribe(observer);
    source$.subscribe(async (res) => {
        const respuestaData = await res.json();
        console.log(res);
    });
}

// getApiData();

//Create a observable for the count up to 7
function countObservable() {
    const divElement = document.createElement('div');
    const obs$ = new Observable<string>((subs: any) => {
        let count = 0
        const interval = setInterval(() => {
            subs.next(count++)
        }, 1000)

        setTimeout(() => {
            subs.complete();
            subs.next("This will not load...because we have complete Observable there");
            clearInterval(interval)
        }, 7000);

    });

    obs$.subscribe((resp: any) => {
        divElement.innerHTML = resp;
        document.body.appendChild(divElement);
    });
    //subscribe
    const subscription1 = obs$.subscribe(observer);

    subscription1.add(subscription1);
    //unsubscribe
    subscription1.unsubscribe();

}
// countObservable();

function ofObservable() {
    const of$ = of<number>(...[1, 2, 3, 4, 5, 6]);
    of$.subscribe(
        value => console.log(`next: ${value}`),
        null,
        () => console.log('Final ')
    );
}
// ofObservable();

const input1 = document.createElement('input');
const input2 = document.createElement('input');

// Of in rxJs


//fromEvent
function fromoEvent() {
    const src1$ = fromEvent<MouseEvent>(document, 'click');
    const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

    src1$.subscribe(observer);

    src1$.subscribe(({ x, y }) => {
        console.log(`x: ${x}, y: ${y}`);
    });

    src2$.subscribe(event => {
        console.log(`Key: ${event.key}`)
    });
}
// fromoEvent();

//Range observable

function rangeObservable() {
const obqs$ = range(1, 10);

console.log('Inicio de sequencia');
obqs$.subscribe( console.log );
console.log('Fin de sequencia');

}

// rangeObservable()


// interval timer 
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timer$ = timer(hoyEn5);

timer$.subscribe(observer1 => {
    console.log('timer', observer1);

});

input1.placeholder = 'email@gmail.com';
input2.placeholder = '**********';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

const getInputStream = (elem: HTMLElement) => {
    return iif(
        () => elem.getAttribute("type") == "password",
        fromEvent(elem, 'keyup').pipe(
            tap(_ => console.log("reading password")),
            map(e => (<HTMLInputElement>e.target).value) // pluck<KeyboardEvent, string>('target', 'value')
        ),
        fromEvent(elem, 'keyup').pipe(
            tap(_ => console.log("reading user")),
            map(e => (<HTMLInputElement>e.target).value) // pluck<KeyboardEvent, string>('target', 'value')
        )
    )
}

merge(
    getInputStream(input1),
    getInputStream(input2),
).subscribe(console.log);