import { fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, exhaustMap, map, mergeMap, pluck, switchMap, tap } from "rxjs/operators";

const url = 'https://reqres.in';

// Helper
const peticionHttpLogin = ( userPassword ) => 
    ajax.post(`${url}/api/login?delay=1`, userPassword).pipe(
        pluck('response', 'token'),
        catchError(error => of('xxx'))
    );

// Creando formularo
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar'

form.append(inputEmail, inputPassword, submitBtn);
document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
    tap(event => event.preventDefault()),
    pluck('target'),
    map(target => ({
        email: target[0].value,
        password: target[1].value,
    })),
    // mergeMap( peticionHttpLogin ),
    // switchMap( peticionHttpLogin ),
    exhaustMap( peticionHttpLogin ),
);

submitForm$.subscribe(token => console.log(token));

/*
- mergeMap => Con cada click se lanzará una petición y mantendrá 
    todas las anteriores activas
- switchMap => Con cada click se lanzará un petición pero solo 
    mantendrá la última activa y el resto serán canceladas
- exhaustMap => Con cada click lanzará la petició siempre y cuando 
    no exista una en ejecución
*/