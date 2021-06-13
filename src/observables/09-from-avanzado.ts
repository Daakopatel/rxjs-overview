import { Observable, Observer, of, from } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Value:', value),
    error: error => console.log('Error:', error),
    complete: () => console.log('Secuencia terminada')
}

/* From */
// Recibe una lista de elementos y notifica por cada elemento
// const obs$ = of(...[1,2,3,4,5]);
// const obs$ = from([1,2,3,4,5]);

// From permite realizar peticiones http
const source$ = from( fetch('https://api.github.com/users/klerith') );

// Aqui recibimos el resultado de la petición
source$.subscribe( observer );

// Para acceder a los datos de la petición
source$.subscribe(async (resp) => {
    console.log(resp.status);
    console.log(resp.url);

    // El body se resuelve como promesa
    const respuestaData = await resp.json();
    console.log(respuestaData);
});

// Uso en funciones Generadoras (Iterables)
const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

for (let id of miIterable) {
    console.log(`Iterable: ${id}`);
}

from(miIterable).subscribe( observer );