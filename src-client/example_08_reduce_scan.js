import Rx from 'rxjs/Rx';
import {
    createSubscriber
} from './lib/util';


//writing "reduce " function
// function arrayReduce(array, accumulator, startValue) {
//     let value = startValue;
//     for (let item of array) {
//         value = accumulator(value, item);
//
//     }
//     return value;
// }
//
//
// const values = [342, 432, 23, 1, 3];
//
// console.log(arrayReduce(values, (acc, i) => acc + i, 0));
//
//
// const max = arrayReduce(values, function(acc, value){
//   if(value> acc)
//   return value;
//   return acc;
// },-1);
//
//
// console.log(max)


//reduce an Observable
Rx.Observable.range(1,10)
.reduce((acc, value)=> acc+value)
.subscribe(createSubscriber("reduce"));


//scan an Observable: process values as they  come in.  Get last value and current value.
Rx.Observable.range(1,10)
.map(i=>i*i)
.scan(([last],current)=> [current, last], [])
.subscribe(createSubscriber("reduce"));
