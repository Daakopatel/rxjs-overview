import { ajax } from "rxjs/ajax";
import { startWith } from "rxjs/operators";

// References
const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'cargado...';

const body = document.querySelector('body');

// Stream
const url = 'https://reqres.in';

ajax.getJSON(`${url}/api/users/2?delay=3`).pipe(
    startWith(true)
).subscribe( resp => { 
    if (resp === true) {
        body.append(loadingDiv);
    } else {
        document.querySelector('.loading').remove();
    }
    console.log (resp);
});