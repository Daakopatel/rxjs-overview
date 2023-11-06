import { fromEvent, interval, Observable, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll, pluck } from "rxjs/operators";
import {  mergeMap, take, takeUntil } from "rxjs/operators";


// Refers

function merge() {

    const body = document.querySelector('body');
    const textInput = document.createElement('input');
    const orderList = document.createElement('ol');
    body.append( textInput, orderList );
    
    // Helpers
    const getUser = (users) => {
        orderList.innerHTML = '';
        console.log(users);
    
        for(let user of users) {
            const li = document.createElement('li');
            const img = document.createElement('img')
            img.src = user.avatar_url;
    
            const anchor  = document.createElement('a');
            anchor.href   = user.html_url;
            anchor.text = 'click here'
            anchor.target = '_blank';
    
            li.append(img);
            li.append(user.login + '');
            li.append(anchor);
    
            orderList.append(li);
        }
    }
    
    // Stream
    const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');
    
    input$.pipe(
        debounceTime(500),
        pluck('target', 'value'),
        map(texto => ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
        )),
        mergeAll(),
        pluck('items'),
    ).subscribe( getUser );
}
// mergeAll , pluck, map , debounceTime 
// merge();

function mergeMapp() {
    

    const letras$ = of('a', 'b', 'c');
  
    
    letras$.pipe(
        mergeMap( (letra) => interval(1000).pipe(
            map( i => letra + i ),
            take(4)
        ))
    ).subscribe(console.log )

    const mousedown$ = fromEvent(document, 'mousedown');
    const mouseup$ = fromEvent(document, 'mouseup');
    const interval$ = interval();
    
    mousedown$.pipe(
        mergeMap( () => interval$.pipe(
            takeUntil(mouseup$)
        ))
    ).subscribe( console.log );
}

mergeMapp()

