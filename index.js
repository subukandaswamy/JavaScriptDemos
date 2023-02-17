import ValClass, {setval, getval} from './util.js';

let vc = new ValClass(20)

setval(vc, 30)

console.log(getval(vc));
