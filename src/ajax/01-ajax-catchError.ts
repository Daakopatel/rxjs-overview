import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

// const fetchPromesa = fetch(url);

// fetchPromesa
//     .then( resp => resp.json() )
//     .then( data => console.log('data:', data) )
//     .catch( error => console.log('Error:', error));

// Capturando error 
// const manejoError = (response: Response) => {
//     if (!response.ok) {
//         throw new Error(response.statusText);
//     }
//     return response;
// }

// fetchPromesa
//     .then( manejoError )
//     .then( resp => resp.json() )
//     .then( data => console.log('data:', data) )
//     .catch( error => console.warn('Error:', error));

// RxJs
const atrapaError = (error: AjaxError) => {
    console.log('Error:', error.message);
    // return []; // No ejecutaria el subscribe
    return of([]);
}

ajax( url ).pipe(
    pluck('response'),
    catchError( atrapaError )
).subscribe( users => console.log('Usuarios:', users) );