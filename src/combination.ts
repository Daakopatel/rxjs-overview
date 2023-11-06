import { concat, interval, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { endWith, startWith, take } from "rxjs/operators";


// start with 
const numero$ = of(1, 2, 3).pipe(
    startWith('a', 'b', 'c'),
    endWith('x', 'y', 'z')
);
numero$.subscribe( console.log );


function labStart() {

    const loadingDiv = document.createElement('div');
    loadingDiv.classList.add('loading');
    loadingDiv.innerHTML = 'loading data please wait...';

    const body = document.querySelector('body');


    const url = 'https://reqres.in';

    ajax.getJSON(`${url}/api/users/2?delay=5`).pipe(
        startWith('isloading')
    ).subscribe(resp => {
        if (resp === 'isloading') {
            body.append(loadingDiv);
        } else {
            document.querySelector('.loading').remove();
        }
        console.log(resp);
    });
}

// labStart();

function concatt() {

  
    concat(
        [1, 2, 3, 4],
        of(1)
    ).subscribe(console.log);
}

// concatt()
