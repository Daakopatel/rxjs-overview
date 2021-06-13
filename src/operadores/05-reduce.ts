import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

/* Reduce - Normal */
const numbers = [1, 2, 3, 4, 5];

const totalReduce = (acumulado: number, actual: number) => {
    return acumulado + actual;
}

const total = numbers.reduce(totalReduce, 0);
console.log('Total:', total);

/* Reduce - RxJS*/
interval(1000).pipe(
    take(3), // completa el observable despues de tomar la cantidad de elementos indicados
    tap( console.log ),
    reduce( totalReduce, 5)
).subscribe({
    next: value => console.log('Value:', value),
    complete: () => console.log('Secuencia completada')
});