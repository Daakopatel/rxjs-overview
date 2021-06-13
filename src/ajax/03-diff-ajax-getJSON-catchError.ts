import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const url = 'https://httpbin.org/delay/1';

const manejaError = (error: AjaxError) => {
    console.log('Error:', error.message);
    return of({
        ok: false,
        usuarios: []
    });
}

// const obsGetJson$ = ajax.getJSON( url ).pipe(
//     catchError( manejaError )
// );
// const obsAjax$ = ajax( url ).pipe(
//     catchError( manejaError )
// );

const obsGetJson$ = ajax.getJSON( url ).pipe(
    catchError( manejaError )
);
const obsAjax$ = ajax( url ).pipe(
    catchError( manejaError )
);

obsGetJson$.subscribe( dataGetJSON => console.log('Data:', dataGetJSON));
obsAjax$.subscribe( dataAjax => console.log('Data:', dataAjax));