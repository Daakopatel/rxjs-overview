import { asyncScheduler } from 'rxjs';

const saludar1 = () => console.log(`Hola mundo`);
const saludar2 = nombre => console.log(`Hola ${nombre}`);
const saludar3 = ({ nombre, apellido }) => console.log(`Hola ${nombre} ${apellido}`);

asyncScheduler.schedule(saludar1);
asyncScheduler.schedule(saludar1, 2000);

// Utilizando state podemos pasar 1 pará a la función
asyncScheduler.schedule(saludar2, 4000, 'Jose');
asyncScheduler.schedule(saludar3, 6000, {nombre: 'Jose', apellido: 'Gallegos'});

const subs = asyncScheduler.schedule( function(state) {
    console.log('state: ', state);
    this.schedule(state + 1, 1000);
}, 3000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);