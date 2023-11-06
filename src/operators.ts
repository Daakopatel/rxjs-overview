import { from, fromEvent, range } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, pluck, sampleTime } from 'rxjs/operators';

// filter using pipe , map?

function filterValue() {
    range(1, 10)
        .pipe(
            filter((value, index) => {
                return value % 2 === 1;
            })
        ).subscribe(value => console.log('Value:', value));
}

// filterValue();

interface Personaje {
    tipo: string,
    nombre: string
}


function filerFromArray() {
    const personajes: Array<Personaje> = [
        {
            tipo: 'heroe',
            nombre: 'batman'
        },
        {
            tipo: 'heroe',
            nombre: 'robin'
        },
        {
            tipo: 'villano',
            nombre: 'joker'
        }
    ];
    from(personajes).pipe(
        filter(personaje => personaje.tipo === 'heroe')
    ).subscribe(personaje => console.log(personaje.nombre));
}

// filerFromArray();


// show in console if enter is press using map and pine 
function filterEnter() {

    fromEvent<KeyboardEvent>(document, 'keyup').pipe(
        map(event => event.code),
        filter(code => code === 'Enter'),
    ).subscribe(key => console.log(key));
}

// filterEnter()



function debounceTimeS() {
    const input = document.createElement('input');
    document.querySelector('body').append(input);

    const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
    input$.pipe(
        pluck('target', 'value'),
        debounceTime(4000),
        distinctUntilChanged()
    ).subscribe((res) => {
        console.log(res);
    });
}

// debounceTimeS(); 

function sampleTimee() {
    const click$ = fromEvent<MouseEvent>(document, 'click');

    click$.pipe(
        sampleTime(3000),
        map(({ x, y }) => ({ x, y }))
    ).subscribe(console.log);
}

// sampleTimee();
