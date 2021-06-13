import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, mergeMap, pluck, switchMap } from "rxjs/operators";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResponse } from "../interfaces/github-users.interface";

// Refers
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
    orderList.innerHTML = '';
    console.log(usuarios);

    for(let usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img')
        img.src = usuario.avatar_url;

        const anchor  = document.createElement('a');
        anchor.href   = usuario.html_url;
        anchor.text   = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + '');
        li.append(anchor);

        orderList.append(li);
    }
}

// Stream
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    mergeMap<string, Observable<GithubUsersResponse>>(texto => ajax.getJSON(
        `https://api.github.com/search/users?q=${texto}`
    )),
    pluck<GithubUsersResponse, GithubUser[]>('items'),
);//.subscribe( mostrarUsuarios );

const url = 'https://httpbin.org/delay/1?args=';

input$.pipe(
    pluck('target', 'value'),
    switchMap(value => ajax.getJSON(`${url}${value}`))
).subscribe( console.log );
