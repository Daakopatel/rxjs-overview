import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut blandit sapien. Nulla nec arcu et velit lacinia aliquam. Ut congue gravida feugiat. Vivamus interdum sem non velit blandit posuere. Nullam at orci ex. Duis varius, felis eu placerat cursus, nunc quam tincidunt orci, vel ullamcorper nulla enim vitae tortor. Ut mollis nisl id purus suscipit, vitae elementum sem efficitur. In tincidunt dolor eget magna suscipit viverra.
<br/><br/>
Aliquam efficitur velit vel massa dignissim, in auctor erat pretium. Aliquam leo leo, iaculis nec enim ut, imperdiet varius nibh. Pellentesque volutpat nunc non odio tempus lobortis. Mauris eu est dolor. Sed tristique rutrum consectetur. Praesent finibus vel lectus sed aliquet. Mauris convallis imperdiet elit vel faucibus. Proin eget tincidunt est, ac eleifend dolor. Pellentesque molestie nulla non lacinia pellentesque. Cras ultrices purus quis sagittis pretium. Nulla facilisis ac dolor eu ultrices. Morbi rhoncus a felis ut bibendum. Sed id velit dolor.
<br/><br/>
Nullam nunc nunc, convallis et quam et, porta ornare nibh. Mauris tempor faucibus lacus sed feugiat. Phasellus nec neque a quam auctor lacinia. Maecenas sit amet dolor dapibus, aliquet metus ut, ullamcorper tellus. Nunc nec dictum purus. Phasellus urna augue, tincidunt in lorem commodo, iaculis tristique nisl. Ut dapibus augue ut erat vestibulum, vel condimentum ligula mollis. Morbi pharetra felis at massa egestas aliquam. Nullam at auctor elit. Phasellus eget nisi mi. In vestibulum enim varius lorem accumsan, pretium venenatis mi porttitor. Mauris congue dapibus ipsum, ut consequat leo tincidunt et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
<br/><br/>
Nulla accumsan purus feugiat, molestie magna sit amet, fermentum urna. Mauris faucibus, lectus ac sollicitudin fermentum, lectus urna ornare libero, nec dictum eros erat sit amet erat. Integer dapibus diam eleifend velit placerat, eu accumsan mi bibendum. Pellentesque et urna congue, lacinia purus in, interdum mi. Integer sed nisl vitae ante vehicula venenatis sed et odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sed commodo ex. Aliquam eleifend libero eu dapibus laoreet. Nulla porttitor tincidunt sodales. Vestibulum bibendum neque a nunc scelerisque eleifend.
<br/><br/>
Nullam ultrices, massa quis sagittis porta, velit odio egestas ipsum, id fermentum nisl orci at diam. Morbi semper, mauris a tincidunt eleifend, ligula metus sodales nulla, eu placerat diam mi in nulla. Ut tristique in eros vitae lacinia. Maecenas congue interdum metus, quis aliquam libero porta ut. Nulla gravida pellentesque sapien nec luctus. Fusce pulvinar tempus orci, vitae tincidunt orci iaculis id. Aliquam venenatis vehicula risus quis fermentum. Aenean pellentesque elit massa, eu viverra lectus ultrices ac. Sed eros eros, fermentum vel mollis at, porta in nisl. Nunc sed viverra tortor. Etiam at auctor ante. Integer sit amet erat purus.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut blandit sapien. Nulla nec arcu et velit lacinia aliquam. Ut congue gravida feugiat. Vivamus interdum sem non velit blandit posuere. Nullam at orci ex. Duis varius, felis eu placerat cursus, nunc quam tincidunt orci, vel ullamcorper nulla enim vitae tortor. Ut mollis nisl id purus suscipit, vitae elementum sem efficitur. In tincidunt dolor eget magna suscipit viverra.
<br/><br/>
Aliquam efficitur velit vel massa dignissim, in auctor erat pretium. Aliquam leo leo, iaculis nec enim ut, imperdiet varius nibh. Pellentesque volutpat nunc non odio tempus lobortis. Mauris eu est dolor. Sed tristique rutrum consectetur. Praesent finibus vel lectus sed aliquet. Mauris convallis imperdiet elit vel faucibus. Proin eget tincidunt est, ac eleifend dolor. Pellentesque molestie nulla non lacinia pellentesque. Cras ultrices purus quis sagittis pretium. Nulla facilisis ac dolor eu ultrices. Morbi rhoncus a felis ut bibendum. Sed id velit dolor.
<br/><br/>
Nullam nunc nunc, convallis et quam et, porta ornare nibh. Mauris tempor faucibus lacus sed feugiat. Phasellus nec neque a quam auctor lacinia. Maecenas sit amet dolor dapibus, aliquet metus ut, ullamcorper tellus. Nunc nec dictum purus. Phasellus urna augue, tincidunt in lorem commodo, iaculis tristique nisl. Ut dapibus augue ut erat vestibulum, vel condimentum ligula mollis. Morbi pharetra felis at massa egestas aliquam. Nullam at auctor elit. Phasellus eget nisi mi. In vestibulum enim varius lorem accumsan, pretium venenatis mi porttitor. Mauris congue dapibus ipsum, ut consequat leo tincidunt et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
<br/><br/>
Nulla accumsan purus feugiat, molestie magna sit amet, fermentum urna. Mauris faucibus, lectus ac sollicitudin fermentum, lectus urna ornare libero, nec dictum eros erat sit amet erat. Integer dapibus diam eleifend velit placerat, eu accumsan mi bibendum. Pellentesque et urna congue, lacinia purus in, interdum mi. Integer sed nisl vitae ante vehicula venenatis sed et odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sed commodo ex. Aliquam eleifend libero eu dapibus laoreet. Nulla porttitor tincidunt sodales. Vestibulum bibendum neque a nunc scelerisque eleifend.
<br/><br/>
Nullam ultrices, massa quis sagittis porta, velit odio egestas ipsum, id fermentum nisl orci at diam. Morbi semper, mauris a tincidunt eleifend, ligula metus sodales nulla, eu placerat diam mi in nulla. Ut tristique in eros vitae lacinia. Maecenas congue interdum metus, quis aliquam libero porta ut. Nulla gravida pellentesque sapien nec luctus. Fusce pulvinar tempus orci, vitae tincidunt orci iaculis id. Aliquam venenatis vehicula risus quis fermentum. Aenean pellentesque elit massa, eu viverra lectus ultrices ac. Sed eros eros, fermentum vel mollis at, porta in nisl. Nunc sed viverra tortor. Etiam at auctor ante. Integer sit amet erat purus.
`;
const body = document.querySelector('body');
body.append(texto);

// Progress Bar
const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Funcion que haga el calculo
const calcularPorcentajeScroll = event => {
    // console.log(event);
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    console.log({scrollTop, scrollHeight, clientHeight});

    return ( scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams
const scroll$ = fromEvent(document, 'scroll')
// .subscribe( console.log );

const progress$ = scroll$.pipe(
    map( calcularPorcentajeScroll ),
    tap( console.log ),
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});
