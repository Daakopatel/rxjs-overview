import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

const get$ = ajax.get(url);

const post$ = ajax.post(url, {
    id: 1,
    nombre: 'jose'
});

const put$ = ajax.put(url, {
    id: 1,
    nombre: 'jose'
});

const delete$ = ajax.delete(url);

const metodoDinamico$ = ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'jose'
    }
});

get$.subscribe( console.log );
post$.subscribe( console.log );
put$.subscribe( console.log );
delete$.subscribe( console.log );
metodoDinamico$.subscribe( console.log );