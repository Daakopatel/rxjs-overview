import { fromEvent, merge } from "rxjs";
import { map, tap } from "rxjs/operators";
import { iif } from "rxjs";

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '**********';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

const getInputStream = (elem: HTMLElement) => {
    return iif<KeyboardEvent>(
        () => elem.getAttribute("type") == "password",
        fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
            tap<KeyboardEvent>(_ => console.log("reading password")),
            map<KeyboardEvent, string>(e => (<HTMLInputElement>e.target).value) // pluck<KeyboardEvent, string>('target', 'value')
        ),
        fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
            tap<KeyboardEvent>(_ => console.log("reading user")),
            map<KeyboardEvent, string>(e => (<HTMLInputElement>e.target).value) // pluck<KeyboardEvent, string>('target', 'value')
        )
    )
}

merge(
    getInputStream(input1),
    getInputStream(input2),
).subscribe( console.log );